import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import {
  sendMailWithRetry,
  createVisitorEmailPayload,
  createAdminEmailPayload,
} from "@/lib/email/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;

      return NextResponse.json(
        { message: "Validasi gagal, silakan periksa input Anda.", fieldErrors },
        { status: 400 },
      );
    }

    const { name, email, interest, message } = validationResult.data;

    const mailToVisitor = createVisitorEmailPayload(name, email);

    const mailToAdmin = createAdminEmailPayload(name, email, interest, message);

    await Promise.all([
      sendMailWithRetry(mailToVisitor),
      sendMailWithRetry(mailToAdmin),
    ]);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("[Email API Error]:", error);

    return NextResponse.json(
      { message: "Service temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }
}

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
      const errorMessages = validationResult.error.issues.map(
        (issue) => issue.message,
      );

      return NextResponse.json(
        { message: "Validasi gagal", errors: errorMessages },
        { status: 400 },
      );
    }

    const { name, email } = validationResult.data;

    const mailToVisitor = createVisitorEmailPayload(name, email);
    const mailToAdmin = createAdminEmailPayload(name, email);

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

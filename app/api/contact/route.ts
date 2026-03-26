import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import {
  sendMailWithRetry,
  createVisitorEmailPayload,
  createAdminEmailPayload,
} from "@/lib/email/mailer";

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 50;
const TIME_WINDOW = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (now - userLimit.lastReset > TIME_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false;
  }

  userLimit.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown-ip";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          message:
            "Terlalu banyak permintaan. Silakan coba lagi dalam 1 jam ke depan.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();

    const { captchaValue, ...formData } = body;

    if (!captchaValue) {
      return NextResponse.json(
        { message: "Token verifikasi keamanan (ReCAPTCHA) tidak ditemukan." },
        { status: 400 },
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error(
        "[ReCAPTCHA Error]: RECAPTCHA_SECRET_KEY is not defined in environment variables.",
      );
      return NextResponse.json(
        { message: "Kesalahan konfigurasi server." },
        { status: 500 },
      );
    }

    console.log(
      "[DEBUG] Token ReCAPTCHA yang diterima (potongan):",
      captchaValue.substring(0, 20) + "...",
    );

    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: captchaValue,
        }).toString(),
      },
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      console.warn("[ReCAPTCHA Verification Failed]:", verifyData);
      return NextResponse.json(
        { message: "Verifikasi ReCAPTCHA gagal. Silakan coba lagi." },
        { status: 400 },
      );
    }

    const validationResult = contactSchema.safeParse(formData);

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

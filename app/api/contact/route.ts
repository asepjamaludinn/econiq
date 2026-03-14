import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// 1. Definisikan Skema Validasi dengan Zod di luar fungsi handler
const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nama harus terdiri dari minimal 2 karakter." }),
  email: z.string().email({ message: "Format email tidak valid." }),
});

const sendMailWithRetry = async (
  transporter: nodemailer.Transporter,
  mailOptions: nodemailer.SendMailOptions,
  maxRetries = 3,
  delayMs = 1000,
) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.warn(
        `[Mail Attempt ${attempt}/${maxRetries} Failed]:`,
        (error as Error).message,
      );

      if (attempt === maxRetries) {
        throw new Error(`Failed to send email after ${maxRetries} attempts.`);
      }

      await new Promise((resolve) => setTimeout(resolve, delayMs * attempt));
    }
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 2. Eksekusi Validasi Input menggunakan Zod
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.issues.map(
        (issue) => issue.message,
      );

      return NextResponse.json(
        {
          message: "Validasi gagal",
          errors: errorMessages,
        },
        { status: 400 },
      );
    }

    const { name, email } = validationResult.data;

    // 3. Konfigurasi Nodemailer menggunakan Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const currentHour = parseInt(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "numeric",
        hour12: false,
      }),
    );

    let greeting = "Malam";
    if (currentHour >= 5 && currentHour < 11) greeting = "Pagi";
    else if (currentHour >= 11 && currentHour < 15) greeting = "Siang";
    else if (currentHour >= 15 && currentHour < 18) greeting = "Sore";

    // 4. Payload Email Konfirmasi Otomatis ke Pengunjung
    const mailToVisitor = {
      from: `"ECONIQ" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Konfirmasi Registrasi ECONIQ",
      html: `
        <div style="font-family: sans-serif; color: #171717; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #660DFF;">ECONIQ</h2>
          <p>Selamat ${greeting}, <strong>${name}</strong>!</p>
          <p>Terima kasih atas ketertarikan Anda. Email dan data Anda sudah kami terima ke dalam sistem ECONIQ.</p>
          <p>Tunggu informasi selanjutnya dari tim kami mengenai program edukasi Web3 dan Financial Digital. Kami akan segera menghubungi Anda kembali.</p>
          <br />
          <p>Salam hangat,</p>
          <p><strong>Tim ECONIQ</strong></p>
        </div>
      `,
    };

    // 5. Payload Email Notifikasi ke Tim Econiq
    const mailToAdmin = {
      from: `"ECONIQ System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `[New Lead] Registrasi Baru dari ${name}`,
      html: `
        <h3>Ada pendaftar baru di website ECONIQ!</h3>
        <ul>
          <li><strong>Nama:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Waktu Daftar:</strong> ${new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })} WIB</li>
        </ul>
      `,
    };

    // 6. Eksekusi Pengiriman Email Paralel dengan Retry Mechanism
    await Promise.all([
      sendMailWithRetry(transporter, mailToVisitor),
      sendMailWithRetry(transporter, mailToAdmin),
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

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMailWithRetry = async (
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

const getGreeting = () => {
  const currentHour = parseInt(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jakarta",
      hour: "numeric",
      hour12: false,
    }),
  );

  if (currentHour >= 5 && currentHour < 11) return "Pagi";
  if (currentHour >= 11 && currentHour < 15) return "Siang";
  if (currentHour >= 15 && currentHour < 18) return "Sore";
  return "Malam";
};

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const createVisitorEmailPayload = (name: string, email: string) => ({
  from: `"ECONIQ" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Selamat Datang di Ekosistem ECONIQ! 🚀",
  html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #171717; max-width: 600px; margin: 0 auto; line-height: 1.6; background-color: #ffffff; border: 1px solid #e5e5e5; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
      
      <div style="background-color: #f4effc; padding: 20px; text-align: center;">
        <img src="${baseUrl}/images/Image001.png" alt="ECONIQ Banner" style="width: 100%; max-width: 560px; border-radius: 12px; display: block; margin: 0 auto; border: 1px solid #dcc3f4;" />
      </div>

      <div style="padding: 30px;">
        <h2 style="color: #660DFF; margin-top: 0; font-size: 24px;">Selamat ${getGreeting()}, ${name}!</h2>
        
        <p style="font-size: 16px; color: #3f3f46;">Terima kasih telah mengambil langkah pertama Anda bersama <strong>ECONIQ</strong>.</p>
        
        <p style="font-size: 16px; color: #3f3f46;">Kami sangat antusias menyambut Anda di komunitas kami. Data Anda telah berhasil kami catat dalam sistem. Di ECONIQ, kami berkomitmen untuk membantu Anda menavigasi dunia <em>Web3, Blockchain,</em> dan <em>Financial Digital</em> dengan cara yang aman, terpercaya, dan mudah dipahami.</p>

        <div style="background-color: #fcf9ff; border-left: 4px solid #8644F7; padding: 15px 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-weight: bold; color: #5200CC; font-size: 16px;">Apa langkah selanjutnya?</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #52525b;">Tim kami sedang menyiapkan pembaruan dan informasi program edukasi terbaik untuk Anda. Kami akan segera menghubungi Anda kembali via email ini.</p>
        </div>

        <p style="font-size: 16px; color: #3f3f46;">Sambil menunggu, Anda bisa mulai mengeksplorasi berbagai artikel menarik di website kami untuk memperkuat fundamental literasi digital Anda.</p>

        <div style="text-align: center; margin: 35px 0;">
          <a href="${baseUrl}/content" style="background-color: #660DFF; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 12px; font-weight: bold; display: inline-block; font-size: 16px;">Jelajahi Artikel Kami</a>
        </div>

        <p style="margin-bottom: 0; font-size: 16px; color: #3f3f46;">Salam hangat,</p>
        <p style="margin-top: 5px; font-weight: 900; color: #660DFF; font-size: 18px; letter-spacing: 1px;">Tim ECONIQ</p>
      </div>

      <div style="background-color: #fafafa; padding: 24px; text-align: center; border-top: 1px solid #e5e5e5;">
        <p style="font-size: 12px; color: #a1a1aa; margin: 0; line-height: 1.5;">
          <em>Email ini dikirim secara otomatis oleh sistem ECONIQ. Mohon untuk tidak membalas langsung ke alamat email ini. Jika Anda memiliki pertanyaan lebih lanjut, silakan hubungi kami melalui email resmi atau halaman kontak yang tersedia di website kami.</em>
        </p>
        <p style="font-size: 12px; color: #a1a1aa; margin: 10px 0 0 0;">
          &copy; ${new Date().getFullYear()} ECONIQ. All rights reserved.
        </p>
      </div>
      
    </div>
  `,
});

export const createAdminEmailPayload = (
  name: string,
  email: string,
  interest: string,
  message: string,
) => ({
  from: `"ECONIQ System" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  subject: `[New Lead] Registrasi Baru dari ${name}`,
  html: `
    <div style="font-family: sans-serif; color: #171717; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f5; border-radius: 8px;">
      <h3 style="color: #660DFF; margin-top: 0;">Notifikasi Sistem ECONIQ</h3>
      <p style="color: #3f3f46; font-size: 14px;">Ada pendaftar baru yang masuk melalui formulir website:</p>
      
      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e5e5; margin-top: 15px;">
        <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Nama:</strong><br/> ${name}</p>
        <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Email:</strong><br/> <a href="mailto:${email}" style="color: #8644F7;">${email}</a></p>
        <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Minat Belajar:</strong><br/> <span style="background-color: #f4effc; color: #5200CC; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 13px;">${interest}</span></p>
        
        <p style="margin: 15px 0 5px 0; font-size: 14px;"><strong>Pesan / Motivasi:</strong></p>
        <div style="background-color: #fafafa; padding: 12px; border-left: 3px solid #8644F7; font-size: 14px; color: #52525b; line-height: 1.5; border-radius: 0 4px 4px 0;">
          ${message.replace(/\n/g, "<br/>")}
        </div>

        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0 15px 0;" />
        <p style="margin: 0; font-size: 12px; color: #a1a1aa;">
          <strong>Waktu Daftar:</strong> ${new Date().toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
            dateStyle: "full",
            timeStyle: "long",
          })} WIB
        </p>
      </div>
    </div>
  `,
});

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmails = async (emailInfo) => {
  if (!emailInfo) return null;

  // Debug: check env vars are loaded
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS set:", !!process.env.EMAIL_PASS);

  // Debug: verify transporter config
  try {
    await transporter.verify();
    console.log("✅ Transporter verified — SMTP connection is working");
  } catch (err) {
    console.error("❌ Transporter verification failed:", err.message);
    return null;
  }

  const response = await Promise.allSettled(
    emailInfo.map(async (data) => {
      if (data.to && data.message && data.subject) {
        console.log("Sending email to:", data.to);
        const sentInfo = await transporter.sendMail({
          from: `"No Reply" <${process.env.EMAIL_USER}>`,
          to: data.to,
          subject: data.subject,
          html: `<p>${data.message}</p>`,
        });
        console.log("✅ Email sent:", sentInfo.messageId);
        return sentInfo;
      } else {
        return Promise.reject(
          new Error(
            `Couldn't send email, please check the ${JSON.stringify(data)}.`,
          ),
        );
      }
    }),
  );

  return response;
};

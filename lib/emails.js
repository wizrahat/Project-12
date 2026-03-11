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

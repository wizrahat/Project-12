import nodemailer from "nodemailer";

const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export const sendEmails = async (emailInfo) => {
  if (!emailInfo) return null;

  const transporter = createTransporter();

  try {
    await transporter.verify();
    console.log("✅ SMTP connection verified");
  } catch (verifyError) {
    console.error("❌ SMTP verification failed:", verifyError);
    throw verifyError;
  }

  const response = await Promise.allSettled(
    emailInfo.map(async (data) => {
      if (data.to && data.message && data.subject) {
        console.log("Sending email to:", data.to);
        try {
          const sentInfo = await transporter.sendMail({
            from: `"No Reply" <${process.env.EMAIL_USER}>`,
            to: data.to,
            subject: data.subject,
            html: `<p>${data.message}</p>`,
          });
          console.log("✅ Email sent:", sentInfo.messageId);
          return sentInfo;
        } catch (sendError) {
          console.error("❌ Failed to send email to", data.to, sendError);
          throw sendError;
        }
      } else {
        return Promise.reject(
          new Error(
            `Couldn't send email, please check the ${JSON.stringify(data)}.`,
          ),
        );
      }
    }),
  );

  response.forEach((result, i) => {
    if (result.status === "rejected") {
      console.error(`❌ Email ${i} failed:`, result.reason);
    }
  });

  return response;
};

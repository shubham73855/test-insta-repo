import * as nodemailer from "nodemailer";
import ENV from "./env.js";

const transporter = nodemailer.createTransport({
  host: ENV.SMTP_HOST,
  port: 2525,
  auth: {
    user: ENV.SMTP_USER,
    pass: ENV.SMTP_PASS,
  },
});

export const sendEmail = async (to: string, subject: string, html: string) => {
  await transporter.sendMail({
    from: '"Instagram" <shubham@gmail.com>',
    to,
    subject,
    html,
  });
};

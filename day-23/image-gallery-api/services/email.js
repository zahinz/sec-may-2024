import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const email = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

export default email;

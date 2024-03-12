"use server";

import nodemailer from "nodemailer"

export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {

  // Get nodemailer auth in .env  
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;


  // Create your transporter
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  // Verify if transporter is working
  try {
    const testResult = await transport.verify();
    console.log("Transport connection verified successfully:", testResult);
  } catch (error) {
    console.error("Error verifying transport connection:", error);
    return;
  }

  // Send your Email
  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log("Email sent successfully:", sendResult);
    return {success: true}
  } catch (error) {
    console.error("Error sending email:", error);
  }
}


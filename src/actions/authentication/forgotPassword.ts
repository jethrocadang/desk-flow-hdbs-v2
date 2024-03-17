"use server";

import * as z from "zod";
import { forgotPasswordSchema } from "@/schemas/userSchema";
import { getUserByEmail } from "@/data/user";
import { sendMail } from "@/lib/mails";
import { generatePasswordResetToken } from "@/lib/tokens";

export async function forgotPassword(
  values: z.infer<typeof forgotPasswordSchema>
) {
  const validatedData = forgotPasswordSchema.safeParse(values);

  if (!validatedData.success) {
    return { error: "Invalid Email!" };
  }

  const { email } = validatedData.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    console.log("1");
    return { error: "You do not have an account yet!" };
  }

  if (existingUser && !existingUser.password) {
    console.log("2");
    return { error: "Please sign in with your email (SSO) !" };
  }

  const fullName = `${existingUser.firstName} ${existingUser.lastName}`;

  const token = generatePasswordResetToken(email)
  const domain = process.env.NEXT_PUBLIC_APP_URL;


  const sendResetLink = await sendMail({
    to: email,
    name: fullName,
    subject: "OTP",
    body: `<h1>Your Token: ${domain}/forgotPassword?=${token}</h1>`,
  });

  if (sendResetLink){
    return {success: "Please Check your Email"}
  }
}

"use server";

import * as z from "zod";
import { forgotPasswordSchema } from "@/schemas/userSchema";
import { getUserByEmail } from "@/data/user";
import { sendMail } from "@/lib/mails";
import { generatePasswordResetToken } from "@/lib/tokens";

export async function forgotPassword(
  values: z.infer<typeof forgotPasswordSchema>
) {
  // Server side data validation
  const validatedData = forgotPasswordSchema.safeParse(values);

  if (!validatedData.success) {
    return { error: "Invalid Email!" };
  }

  // Destructure
  const { email } = validatedData.data;

  // Check if email exists
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    console.log("1");
    return { error: "You do not have an account yet!" };
  }

  // Check if email exists but no password
  if (existingUser && !existingUser.password) {
    console.log("2");
    return { error: "Please sign in with your email (SSO) !" };
  }

  // Generate token for user
  const token = await generatePasswordResetToken(email);
  // I put my domain in .env for easy update
  const domain = process.env.NEXT_PUBLIC_APP_URL;
  // Create your Link
  const resetLink = `${domain}/reset-password?token=${token.token}`;
  // I need full name
  const fullName = `${existingUser.firstName} ${existingUser.lastName}`;

  // Send the reset Link
  await sendMail({
    to: email,
    subject: "Reset Password",
    body: `<p>Reset link ${resetLink}</p>`,
  });

  return { success: "Please Check your Email" };
}

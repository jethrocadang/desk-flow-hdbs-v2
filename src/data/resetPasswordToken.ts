"use server";

import { db } from "@/lib/prisma";

export async function getResetPasswordTokenbyEmail(email: string) {
  try {
    const verificationToken = await db.passwordResetToken.findFirst({
      where: { email },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
}

export async function getResetPasswordTokenbyToken(token: string) {
  try {
    const verificationToken = await db.passwordResetToken.findUnique({
      where: { token },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
}

"use server";

import { randomInt } from "crypto";
import { v4 as uuidV4 } from "uuid";
import { getVerificationTokenByEmail } from "@/data/verificationToken";
import { db } from "./prisma";
import { getResetPasswordTokenbyEmail } from "@/data/resetPasswordToken";

export async function generateToken(email: string) {
  // Generate Token
  const token = OTP();

  // Add Expiration
  const expires = new Date(new Date().getTime() + 1000 * 3000);

  // Check existing token
  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({ where: { id: existingToken.id } });
  }

  // Create token
  const verificationToken = db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
}

// Create the OTP
function OTP(): string {
  const min = 100000; // Minimum value for a 6-digit number
  const max = 999999; // Maximum value for a 6-digit number
  return String(randomInt(min, max));
}


export async function generatePasswordResetToken(email: string) {
  const token = uuidV4();
  const expires = new Date(new Date().getTime() + 1000 * 3000);

  const existingToken = await getResetPasswordTokenbyEmail(email);

  if (existingToken) {
    await db.passwordResetToken.delete({ where: { id: existingToken.id } });
  }

  const passwordResetToken = db.passwordResetToken.create({
    data: { email, token, expires },
  });

  return passwordResetToken
}

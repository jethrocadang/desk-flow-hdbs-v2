"use server";

import { randomInt } from "crypto";
import { getVerificationTokenByEmail } from "@/data/verificationToken";
import { db } from "./prisma";

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

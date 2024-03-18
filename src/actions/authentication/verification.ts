"use server";

import { db } from "@/lib/prisma";
import { getUserById } from "@/data/user";
import {
  getVerificationTokenByEmail,
  getVerificationTokenByToken,
} from "@/data/verificationToken";


export async function verification(token: string) {
  // Get token from db by token  
  const verifyToken = await getVerificationTokenByToken(token);

  // Check if same token
  if (!verifyToken) {
    return { error: "Token does not exists!" };
  }

  
  // Check if not expired
  const hasExpired = new Date(verifyToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token Expired" };
  }

  // Check if email exists
  const existingUser = await getVerificationTokenByEmail(verifyToken.email);

  if (!existingUser) {
    return { error: "Something went wrong!" };
  }

  // Update user
  await db.user.update({
    where: { email: existingUser.email },
    data: {
      emailVerified: new Date(),
      email: existingUser.email,
    },
  });

  // Delete the token in the db
  await db.verificationToken.delete({ where: { id: verifyToken.id } });

  return {success: "Email Verfied"}
  
}

//TODO ADD REDIRECT

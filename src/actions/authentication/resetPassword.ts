"use server";
import * as z from "zod";
import { hash } from "bcryptjs";

import { getResetPasswordTokenbyToken } from "@/data/resetPasswordToken";
import { getUserByEmail } from "@/data/user";
import { resetPasswordSchema } from "@/schemas/userSchema";
import { db } from "@/lib/prisma";

export async function resetPassword(
  values: z.infer<typeof resetPasswordSchema>,
  token?: string | null
) {
  // Check if there is token
  if (!token) {
    return { error: "Missing Token!" };
  }

  // Server side data validation
  const validatedData = resetPasswordSchema.safeParse(values);

  if (!validatedData.success) {
    return { error: "Invalid Data" };
  }

  const { password } = validatedData.data;

  // Check if the token is the same as the token in the db
  const existingToken = await getResetPasswordTokenbyToken(token);

  if (!existingToken.token) {
    return { error: "Invalid Token" };
  }

  // Check if the token is not expired
  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has Expired!" };
  }

  // Check if the token in email and the email in user is the same
  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Cannot find your data! Try again Later!" };
  }

  // If all checks passed reset Password

  //Hash the password
  const hashPass = await hash(password, 12);

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashPass },
  });

  await db.passwordResetToken.delete({ where: { id: existingToken.id } });

  return { success: "Password Updated" };
}

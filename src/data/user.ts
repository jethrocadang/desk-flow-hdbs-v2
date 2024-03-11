"use server";

import { db } from "@/lib/prisma";

export async function getUserByEmail(email: string) {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user
  } catch (error) { return null }
}

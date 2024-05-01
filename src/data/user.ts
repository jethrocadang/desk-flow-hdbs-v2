"use server";

import { db } from "@/lib/prisma";

export async function getUserByEmail(email: string) {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    return null;
  }
}

export async function getAllUsers() {
  try {
    const users = await db.user.findMany({});
    return users;
  } catch (error) {
    return null;
  }
}

export const getUserCount = async () => {
  try {
    const allUsers = await db.user.count();
    const user = await db.user.count({
      where:{
        role:"USER"
      }
    })
    const admin = await db.user.count({
      where: {
        role: "ADMIN",
      },
    });
    const FM = await db.user.count({
      where: {
        role: "FM",
      },
    });
    return {
      allUsers,
      user,
      admin,
      FM,
    };
  } catch (error) {
    return null;
  }
};

"use server";

import { db } from "@/lib/prisma";

export const getAllDesks = async () => {
  try {
    const desks = await db.desk.findMany();

    if (!desks) {
      return [];
    }
    return desks;
  } catch (error) {
    return null;
  }
};

export const getDeskById = async (id: string) => {
  try {
    const desk = await db.desk.findUnique({
      where:{
        id
      }
    })

    return desk
  } catch (error) {
    return null
  }
}
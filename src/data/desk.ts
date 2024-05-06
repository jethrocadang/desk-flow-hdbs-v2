"use server";

import { db } from "@/lib/prisma";

export const getAllDesks = async () => {
  try {
    const desks = await db.desk.findMany({
      include: {
        amenities: true,
      },
    });

    return desks;
  } catch (error) {
    return null;
  }
};

export const getDeskById = async (id: string) => {
  try {
    const desk = await db.desk.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        deskName: true,
        description: true,
        coords: true,
        status: true,
        amenities: true,
      },
    });

    return desk;
  } catch (error) {
    return null;
  }
};

export const getDeskCount = async () => {
  try {
    const allDesks = await db.desk.count();
    const available = await db.desk.count({
      where: {
        status: "AVAILABLE",
      },
    });
    const unavailable = await db.desk.count({
      where: {
        status: "UNAVAILABLE",
      },
    });
    // const unoccupied = await db.desk.count({
    //   where: {
    //     booking: {},
    //   },
    // });
    return {
      allDesks,
      available,
      unavailable,
      // unoccupied
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

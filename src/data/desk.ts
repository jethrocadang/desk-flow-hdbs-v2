"use server";

import { db } from "@/lib/prisma";

export const getAllDesks = async () => {
  try {
    const desks = await db.desk.findMany({
      include: {
        amenity: {
          select: {
            id: true,
            amenityName: true,
            deskId:true,
          },
        },
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
        amenity: {
          select: {
            id: true,
            amenityName: true,
          },
        },
      },
    });


    return desk;
  } catch (error) {
    return null;
  }
};

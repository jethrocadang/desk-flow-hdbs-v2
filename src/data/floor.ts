'use server';

import { db } from "@/lib/prisma";

export const getFloorById = async (id: string) => {
  try {
    const floor = await db.floor.findUnique({
      where: { id },
    });

    return floor
  } catch (error) {
    return null
  }
};

export const getAllFloors = async () => {
    try {
        const floors = await db.floor.findMany()

        return floors
    } catch (error) {
        
    }
}
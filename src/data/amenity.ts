"use server";

import { db } from "@/lib/prisma";

export const getAllAmenities = async () => {
  try {
    const amenities = await db.amenity.findMany();
    return amenities;
  } catch (error) {
    return null;
  }
};

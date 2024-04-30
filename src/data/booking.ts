"use server";

import { db } from "@/lib/prisma";

export const getAllBookings = async () => {
  try {
    const bookings = await db.booking.findMany({
      include: {
        desk: true,
      },
      orderBy:{
        date:"desc"
      }
    });
    return bookings;
  } catch (error) {
    return null;
  }
};

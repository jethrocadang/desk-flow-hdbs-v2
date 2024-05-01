"use server";

import { db } from "@/lib/prisma";

export const getAllBookings = async () => {
  try {
    const bookings = await db.booking.findMany({
      include: {
        desk: true,
      },
      orderBy: {
        date: "desc",
      },
    });
    return bookings;
  } catch (error) {
    return null;
  }
};

export const getBookingsCount = async () => {
  try {
    const allBookings = await db.booking.count();
    const confirmed = await db.booking.count({
      where: {
        status: "CONFIRMED",
      },
    });
    const pending = await db.booking.count({
      where: {
        status: "PENDING",
      },
    });
    const cancelled = await db.booking.count({
      where: {
        status: "CANCELLED",
      },
    });
    return {
      allBookings,
      confirmed,
      pending,
      cancelled,
    };
  } catch (error) {
    return null;
  }
};

export const getBookingsCountById = async (id:string) => {
  try {
    const bookings = await db.booking.count({
      where:{
        id
      }
    })
    return bookings
  } catch (error) {
    return null
  }
  
}
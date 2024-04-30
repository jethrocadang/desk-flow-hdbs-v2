"use server";

import { db } from "@/lib/prisma";
import { bookingSchema } from "@/schemas/bookingSchema";
import * as z from "zod";

const toUTCDate = (date: Date) => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
};

export const createBooking = async (values: z.infer<typeof bookingSchema>) => {
  try {
    console.log("Booking...");

    const validateData = bookingSchema.safeParse(values);
    if (!validateData.success) {
      return { error: "Booking Failed..." };
    }

    const { deskId, userId, date } = validateData.data;

    await db.booking.create({
      data: {
        deskId,
        userId,
        date,
      },
      include: {
        user: true,
        desk: true,
      },
    });

    console.log("Booking Success!");
    return { success: "Booking Created!" };
  } catch (error) {
    console.error("Error creating booking:", error);
    return { error: "Booking Failed..." };
  }
};



'use server';

import { db } from "@/lib/prisma";
import { floorSchema } from "@/schemas/floorSchema";
import * as z from "zod";

export const createFloor = async (values: z.infer<typeof floorSchema>) => {
  try {
    const validateData = floorSchema.safeParse(values);
    if (!validateData.success) {
      return { error: "Invalid Input" };
    }

    const { floorName, floorManager } = validateData.data;

    console.log({ "floor name: ": floorName, "floor Manger:": floorManager });

    await db.floor.create({
        data:{
            floorName,
            floorManager
        }
    })

    console.log("New floor created successfully.");

    return {success: "New Floor is Created" }
  } catch (error) {
    console.error("Error occurred while creating floor:", error);

    return {error: "Something went wrong"}
  }
};



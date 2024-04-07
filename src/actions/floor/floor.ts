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

    await db.floor.create({
        data:{
            floorName,
            floorManager
        }
    })

    return {success: "New Floor is Created"}
  } catch (error) {}
};



"use server";

import { db } from "@/lib/prisma";
import { deskSchema } from "@/schemas/deskSchema";
import * as z from "zod";

export const updateDesk = async (values: z.infer<typeof deskSchema>) => {
  try {
    const validateData = deskSchema.safeParse(values);
    if (!validateData.success) {
      return { error: "Wrong Input" };
    }

    const { deskId, deskName, status, description, amenities } =
      validateData.data;

    const amentyIDs = amenities.map((amenity) => amenity.value);
    
    await db.desk.update({
      where: { id: deskId },
      data: {
        deskName,
        status,
        description,
        amentyIDs,
      },
    });

    console.log("updated");
    return { success: "Updated Successfully" };
  } catch (error) {
    return { error: "Something Went Wrong!" };
  }
};

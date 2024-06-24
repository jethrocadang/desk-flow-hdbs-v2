"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { editProfileSchema } from "@/schemas/userSchema";
import * as z from "zod";

export const updateUser = async (values: z.infer<typeof editProfileSchema>) => {
  try {
    const user = await currentUser();

    const validateData = editProfileSchema.safeParse(values);
    if (!validateData.success) {
      return { error: "Invalid Input" };
    }

    const { firstName, lastName, image } = validateData.data;

    await db.user.update({
      where: { id: user.id },
      data: {
        firstName,
        lastName,
        image,
      },
    });

    return { success: "Updated Sucessfully!" };
  } catch (error) {}
  return null;
};

export const uploadAvatar = async (url: string) => {
  console.log(url);

  try {
    const user = await currentUser();

    await db.user.update({
      where: { id: user.id },
      data: {
        image: url,
      },
    });
  } catch (error) {}
};

export const updateRole = async ({
  id,
  role,
}: {
  id: string;
  role: "USER" | "ADMIN" | "FM";
}) => {
  await db.user.update({
    where: {
      id,
    },
    data: {
      role,
    },
  });

  return { success : "Updated Succesfully"}
};

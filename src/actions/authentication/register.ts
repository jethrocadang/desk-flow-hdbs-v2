"use server";

import * as z from "zod";
import { registerSchema } from "@/schemas/userSchema";
import { db } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { getUserByEmail } from "@/data/user";

export async function register(values: z.infer<typeof registerSchema>) {
  try {
    
    // data validation
    const validatedData = registerSchema.safeParse(values);
    if (!validatedData.success) {
      return { error: "Error Validating Data!" };
    }

    // Destructure
    const { firstName, lastName, email, password } = validatedData.data;

    console.log(validatedData)
    // Hash Password
    const hashPass = await hash(password, 12);

    // Check Email if existing
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return { error: "Email already Registered" };
    }

    // Create User
    const createUser = await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashPass,
      },
    });

    if(createUser){
        return {success: true}
    }

  } catch (error) {
    console.log(error)
  }
}

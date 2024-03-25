"use server";

import * as z from "zod";
import { registerSchema } from "@/schemas/userSchema";
import { hash } from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { generateToken } from "@/lib/tokens";
import { sendMail } from "@/lib/mails";
import { compileEmailTokenTemplate } from "@/lib/templates/compileEmail";
import { redirect } from "next/navigation";
import { db } from "@/lib/prisma";
import { User } from "@prisma/client";

export async function register(values: z.infer<typeof registerSchema>) {
  let user: User;
  try {
    // data validation
    const validatedData = registerSchema.safeParse(values);
    if (!validatedData.success) {
      return { error: "Error Validating Data!" };
    }

    // Destructure
    const { firstName, lastName, email, password } = validatedData.data;

    console.log(validatedData);
    // Hash Password
    const hashPass = await hash(password, 12);

    // Check Email if existing
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return { error: "Email already Registered" };
    }

    // Create User
    user = await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashPass,
      },
    });

    // Generate Token and store to db
    const verificationtoken = await generateToken(email);

    // Join firstname and lastname
    const fullName = `${firstName} ${lastName}`;

    // Format Date
    const today = new Date();
    const formatDate = today.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });

    // Send Token to Email
    //TODO Fix Handlebar loader
    //compileEmailTokenTemplate(
    //firstName,
    //verificationtoken.token,
    //formatDate
    //),
    const sendVerificationToken = await sendMail({
      to: email,
      name: fullName,
      subject: "OTP",
      body: `<h1>Your Token: ${verificationtoken.token}</h1>`,
    });

    return { success: "Email sent!" };
  } catch (error) {
    console.log(error);
  }

}

//TODO Fix redirect

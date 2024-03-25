"use server";

import * as z from "zod";
import { loginSchema } from "@/schemas/userSchema";
import { signIn } from "auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";
import { generateToken } from "@/lib/tokens";
import { sendMail } from "@/lib/mails";

export async function login(values: z.infer<typeof loginSchema>) {
  // Get & validate data
  const validatedData = loginSchema.safeParse(values);

  if (!validatedData.success) {
    return { error: "Invalid Data!" };
  }

  const { email, password } = validatedData.data;

  //If User is not Verified & tried to login send verficaction token
  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || existingUser.password) {
    return { error: "Email is not registered!" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateToken(email);
    await sendMail({
      to: email,
      subject: "OTP",
      body: `<h1>Your Token: ${verificationToken.token}</h1>`,
    });

    return { verification : "Email Sent"}
  }
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
}

"use server";

import * as z from "zod";
import { loginSchema } from "@/schemas/userSchema";
import { signIn } from "auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export async function login(values: z.infer<typeof loginSchema>) {
  const validatedData = loginSchema.safeParse(values);

  if (!validatedData.success) {
    return { error: "Invalid Data!" };
  }

  const { email, password } = validatedData.data;

  console.log("email: ", email, "password: ", password)

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

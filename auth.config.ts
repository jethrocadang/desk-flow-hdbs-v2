import Credentials from "next-auth/providers/credentials";
import Google from "@auth/core/providers/google"

import { compare } from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "@/schemas/userSchema";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Credentials({
      async authorize(credentials) {
        const validatedData = loginSchema.safeParse(credentials);


        if (validatedData.success) {
          const { email, password } = validatedData.data;

          const user = await getUserByEmail(email);
          if(!user || !user.password) return null

          const passwordMatch = await compare(password, user.password);

          if(passwordMatch){
            return user
          }
        }


        return null
      },
    }),
  ],
} satisfies NextAuthConfig;

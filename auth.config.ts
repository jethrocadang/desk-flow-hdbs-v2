import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "@/schemas/userSchema";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedData = loginSchema.safeParse(credentials);

        if (validatedData.success) {
          const { email, password } = validatedData.data;

          const user = await getUserByEmail(email);

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

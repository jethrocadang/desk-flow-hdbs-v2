import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";


import authConfig from "auth.config";
import { db } from "@/lib/prisma";
import { getUserById } from "@/data/user";
import { UserRole } from "@prisma/client";

// Declare role to typescript
declare module "next-auth" {
  interface User {
     role: UserRole ;
  }
}



// Auth configuration
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  callbacks: {
    // Check if Email Verfied, if not "You shall not pass!!!"
    // async signIn({user}){

    //   const existingUser = getUserById(user.id)
    //   if(!existingUser && !(await existingUser).emailVerified){
    //     return false
    //   }
    // },
    // Get session {role}
    async session({ token, session}) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    // Use token to get user Id
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  ...authConfig,
});

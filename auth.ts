import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "auth.config";
import { db } from "@/lib/prisma";
import { getUserById } from "@/data/user";
import { User, UserRole } from "@prisma/client";

// Declare role to typescript
declare module "next-auth" {
  interface User {
    role: UserRole;
    firstName: string
    lastName: string
  }
}

// Auth configuration
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages:{
    signIn:"/sign-in",
    error:"/error"
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  events:{
    async linkAccount({user}){
      await db.user.update({
        where:{id: user.id},
        data:{emailVerified: new Date()}
      })
    }
  },
  callbacks: {
    async signIn({ user, account, profile }) {

      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);
      if (!existingUser.emailVerified) {
        return false;
      };

      //TODO add 2FA
      
      return true;
    },
    // Get session {role}
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if(session.user){
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;

      }


      return session;
    },
    // Use token to get user Id
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;
      token.firstName = existingUser.firstName;
      token.lastName = existingUser.lastName;

      return token;
    },
  },
  ...authConfig,
});

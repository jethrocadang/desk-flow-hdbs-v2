"use server";

import { getUserByEmail, getUserById } from "@/data/user";
import { getVerificationTokenByEmail } from "@/data/verificationToken";
import { sendMail } from "@/lib/mails";
import { db } from "@/lib/prisma";
import { generateToken } from "@/lib/tokens";

export async function resendOtp(email: string) {
  // Get user, use the email
  try {
    const user = await getUserByEmail(email);
    const oldToken = await getVerificationTokenByEmail(email);

    if (!oldToken) {
      return { error: "Email does not exists" };
    }
  
    const deleteToken = await db.verificationToken.delete({
      where: {
        token: oldToken.token,
      },
    });
  
    const newToken = await generateToken(email);
  
    const sendVerificationToken = await sendMail({
      to: email,
      subject: "OTP",
      body: `<h1>Your Token: ${newToken.token}</h1>`,
    });
  
    return { success: "Email sent!" };
  } catch (error) {
    return {error:" hahahah"}
  }



  //get user email
  // get token by email
  // check existing token
  // delete existing token
  // create another token
  // send token
}

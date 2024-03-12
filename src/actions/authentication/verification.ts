"use server";

import { db } from "@/lib/prisma";
import { getUserById } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verificationToken";

export async function verification(otp: string, id: string) {
    try {
    
    const token = await getVerificationTokenByToken(otp)

    if(!token){
        return {error: "Invalid Token"}
    }

    if(token){
        return {success: true}
    }

    } catch (error) {
        
    }
}

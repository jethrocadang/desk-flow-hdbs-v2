"use server";

import { db } from "@/lib/prisma";
import { getUserById } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verificationToken";

export async function verification(otp: string, id: string) {
    try {
    
    const token = await getVerificationTokenByToken(otp)

    if(!token){
        console.log("Invalid Token Parrrrr!!!")
        return {error: "Invalid Token"}
    }

    if(token){
        console.log("Successss Parrrrrr!!!!")
        return {success: true}
    }

    } catch (error) {
        
    }
}

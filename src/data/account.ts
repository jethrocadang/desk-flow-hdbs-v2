import { db } from "@/lib/prisma"
import { getUserById } from "./user"

export const getAccountbyUserId = async (userId: string) => {
    try {
        const account = db.account.findFirst({
            where: {userId}
        });

        return account
    } catch (error) {
        return null
    }
}
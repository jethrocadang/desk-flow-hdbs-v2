import { db } from "@/lib/prisma"

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
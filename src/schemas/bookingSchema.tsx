import * as z from "zod"

export const bookingSchema = z.object({
    deskId: z.string(),
    userId: z.string(),
    date: z.date({
        required_error: "Date is Required!"
    })
})


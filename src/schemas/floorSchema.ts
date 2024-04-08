import * as z from "zod";

export const floorSchema = z.object({
    id: z.string(),
    floorName: z.string().min(2, {message: "Floor Name is Required"}),
    floorManager: z.string(),
    imageUrl: z.string(),
})

export const addFloorSchema = floorSchema.omit({id:true, imageUrl: true})
export const addFloorImageSchema = floorSchema.omit({floorManager: true, floorName:true})
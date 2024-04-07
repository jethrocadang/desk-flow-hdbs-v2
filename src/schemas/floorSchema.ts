import * as z from "zod";

export const floorSchema = z.object({
    floorName: z.string().min(2, {message: "Floor Name is Required"}),
    floorManager: z.string()
  

})
import * as z from "zod";

export const amenitySchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const deskSchema = z.object({
  deskId: z.string(),
  deskName: z.string().min(2, {
    message: "floorName must be at least 2 characters.",
  }),
  status: z.enum(["AVAILABLE", "UNAVAILABLE"]),
  description: z.string(),
  amenities: z.array(amenitySchema).min(1),
});

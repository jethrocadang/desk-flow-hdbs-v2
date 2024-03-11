import * as z from "zod";

export const loginSchema = z.object({
  // Email datatype asign
  emailAddress: z.string().email({
    message: "The email address must include '@'",
  }),
  password: z.string().min(12, {
    message: "Password length must be at least 12 characters",
  }),
  checkBox: z.boolean().default(false).optional(),
});

export const registerschema = z.object({
  // Email datatype asign
  firstName: z.string().min(6, {
    message: "required",
  }),
  lastName: z.string().min(6, {
    message: "required",
  }),
  emailAddress: z.string().email({
    message: "The email address must include '@'",
  }),
  password: z
    .string()
    .min(12, {
      message: "Password must atleast 12 characters",
    })
    .refine((data) => /[!@#$%^&*]/.test(data), {
      message: "Password must contain at least one special character.",
    }),
});

export const withConfirmPassSchema = registerschema
  .extend({
    confirmPassword: z.string().min(12, {
      message: "You must confirm your password",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

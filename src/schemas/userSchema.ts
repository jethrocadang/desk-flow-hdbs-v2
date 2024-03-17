import * as z from "zod";


/**This schema accepts values from sign in form */
export const loginSchema = z.object({
  // Email datatype asign
  email: z.string().email({
    message: "The email address must include '@'",
  }),
  password: z.string().min(12, {
    message: "Password length must be at least 12 characters",
  }),
  checkBox: z.boolean().default(false).optional(),
});


/**This schema accepts values from sign up but excludes confirm password  */
export const registerSchema = z.object({
  // Email datatype asign
  firstName: z.string().min(6, {
    message: "required",
  }),
  lastName: z.string().min(6, {
    message: "required",
  }),
  email: z.string().email({
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


/**This schema accepts values from sign up form and includes confirm password  */
export const withConfirmPassSchema = registerSchema
  .extend({
    confirmPassword: z.string().min(12, {
      message: "You must confirm your password",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });


  /** */
  export const forgotPasswordSchema = z.object({
    email: z.string().email({
      message:"Please enter a valid email."
    })
  })
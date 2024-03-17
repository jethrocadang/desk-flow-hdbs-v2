"use client";
import React from "react";
import { useState, useTransition } from "react";
import { MdEmail, MdKey } from "react-icons/md";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/shadcn/input";
import { FiUser } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Button from "@/components/ui/toplevelComponents/Button";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/shadcn/form";

import { withConfirmPassSchema } from "@/schemas/userSchema";
import { register } from "@/actions/authentication/register";
import Spinner from "../../toplevelComponents/Spinner";

export default function ResetPasswordForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // form validation
  //checking for every user passe in form is valid
  const form = useForm<z.infer<typeof withConfirmPassSchema>>({
    resolver: zodResolver(withConfirmPassSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  //  handle for submit
  // TODO Add toast for handling errors
  const handleSubmit = async (
    values: z.infer<typeof withConfirmPassSchema>
  ) => {
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  // Tosee pass
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <div className="max-md:z-40">
      <Form {...form}>
        {/* every the time the form is invalid the handle submit will not perform */}
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col gap-3">
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    {/* label */}
                    <FormLabel>New Password</FormLabel>
                    <div className="relative flex flex-col">
                      <FormControl>
                        <Input
                          type={showPass ? "text" : "password"}
                          placeholder="************"
                          className="pl-12 py-6 border bg-sky-50 border-violet-900"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      {/* icons */}
                      <div className="absolute top-2.5 pl-2.5">
                        <MdKey className="text-black text-3xl" />
                      </div>
                      <div className="absolute right-0 top-3 pr-4 cursor-pointer">
                        {showPass ? (
                          <FaEye
                            onClick={() => setShowPass(false)}
                            className="text-black text-2xl"
                          />
                        ) : (
                          <FaEyeSlash
                            onClick={() => setShowPass(true)}
                            className="text-black text-2xl"
                          />
                        )}
                      </div>
                    </div>
                    <FormMessage /> {/* display Error Messgae*/}
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => {
                return (
                  <FormItem>
                    {/* label */}
                    <FormLabel>Confirm New Password</FormLabel>
                    <div className="relative flex flex-col">
                      <FormControl>
                        <Input
                          type={showConfirmPass ? "text" : "password"}
                          placeholder="************"
                          className="pl-12 py-6 border bg-sky-50 border-violet-900"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      {/* icons */}
                      <div className="absolute top-2.5 pl-2.5">
                        <MdKey className="text-black text-3xl" />
                      </div>
                      <div className="absolute right-0 top-3 pr-4 cursor-pointer">
                        {showConfirmPass ? (
                          <FaEye
                            onClick={() => setShowConfirmPass(false)}
                            className="text-black text-2xl"
                          />
                        ) : (
                          <FaEyeSlash
                            onClick={() => setShowConfirmPass(true)}
                            className="text-black text-2xl"
                          />
                        )}
                      </div>
                    </div>
                    <FormMessage /> {/* display Error Messgae*/}
                  </FormItem>
                );
              }}
            />

            <p className="text-red-700 text-center mt-2">{error}</p>
            <p className="text-green-600 text-center mt-2">{success}</p>
            <div className="h-12 mt-5">
              <Button
                size="custom"
                variant="primary"
                type="submit"
                disabled={isPending}
              >
                {isPending ? <Spinner /> : "Change Password"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

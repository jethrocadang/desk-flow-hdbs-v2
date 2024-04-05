"use client";
import React from "react";
import { useState, useTransition } from "react";
import { useSearchParams, useRouter} from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { MdKey } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "@/components/utils-ui/Button";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import Spinner from "@/components/utils-ui/Spinner";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

import { resetPasswordSchema } from "@/schemas/userSchema";
import { resetPassword } from "@/actions/authentication/resetPassword";

export default function ResetPasswordForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  // form validation
  //checking for every user passe in form is valid
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  //  handle for submit
  const handleSubmit = (values: z.infer<typeof resetPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      resetPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);

        if(data.success){
          router.push("/sign-in")
        }
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

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mt-5">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

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

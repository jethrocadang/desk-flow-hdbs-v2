"use client";
import React, { useState, useTransition } from "react";
import { MdEmail, MdKey } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AlertCircle } from "lucide-react";

import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/shadcn/input";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import Button from "@/components/ui/toplevelComponents/Button";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/shadcn/form";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/shadcn/alert";

import { forgotPasswordSchema } from "@/schemas/userSchema";
import { forgotPassword } from "@/actions/authentication/forgotPassword";

export default function ForgotPasswordForm() {
  // TODO add error & success UI
  //Pending states
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // form validation
  //checking for every user passe in form is valid
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  //  handle for submit
  const handleSubmit = (values: z.infer<typeof forgotPasswordSchema>) => {
    startTransition(() => {
      forgotPassword(values).then((data) => setError(data.error));
    });
  };

  //to see passs

  return (
    <div className="max-md:z-40">
      <Form {...form}>
        {/* every the time the form is invalid the handle submit will not perform */}
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  {/* label */}
                  <FormLabel>Email</FormLabel>
                  <div className="relative flex flex-col">
                    <FormControl>
                      <Input
                        placeholder="Email"
                        className="pl-12 py-6 border bg-sky-50 border-violet-900"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    {/* icons */}
                    <div className="absolute top-2.5 pl-2.5">
                      <MdEmail className="text-black text-3xl" />
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
              <AlertDescription>
                {error}
              </AlertDescription>
            </Alert>
          )}

          <div className="h-12 mt-5">
            <Button
              size="custom"
              variant="primary"
              type="submit"
              disabled={isPending}
            >
              Confirm Email
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

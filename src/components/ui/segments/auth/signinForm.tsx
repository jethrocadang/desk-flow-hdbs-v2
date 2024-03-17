"use client";
import React, { useState, useTransition } from "react";
import { MdEmail, MdKey } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "@/components/ui/toplevelComponents/Spinner";
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

import { loginSchema } from "@/schemas/userSchema";
import { login } from "@/actions/authentication/login";

export default function SignInForm() {
  // TODO add error & success UI
  //Pending states 
  const [isPending, startTransition] = useTransition();
  const[error, setError] = useState("")
  const[success, setSuccess] = useState("")


  // form validation
  //checking for every user passe in form is valid
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      checkBox: true,
    },
  });

  //  handle for submit
  const handleSubmit = (values: z.infer<typeof loginSchema>) => {
    startTransition(() => {
      login(values).then((data)=>{
        setError(data.error)
      })
    });
  };

  //to see passs
  const [showPass, setShowPass] = useState(false);

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
                        className={`pl-12 py-6 border bg-sky-50 ${error ? "border-red-700" : "border-violet-900"}`}
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  {/* label */}
                  <FormLabel>Password</FormLabel>
                  <div className="relative flex flex-col">
                    <FormControl>
                      <Input
                        type={showPass ? "text" : "password"}
                        placeholder="************"
                        className={`pl-12 py-6 border bg-sky-50 ${error ? "border-red-700" : "border-violet-900"}`}
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
          <div className="w-full flex justify-between mt-4">
            <FormField
              control={form.control}
              name="checkBox"
              render={({ field }) => {
                return (
                  <FormItem>
                    <div className="flex flext-row gap-2">
                      <FormControl>
                        <Checkbox
                          className="mt-1"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div>
                        <FormLabel className="text-sm text-black">
                          Remember me
                        </FormLabel>
                      </div>
                    </div>
                  </FormItem>
                );
              }}
            />

            <Link
              href="/forgotPassword"
              className="text-sm text-blue-900 hover:text-blue-500"
            >
              Fogot Password?
            </Link>
          </div>
          <p className="text-red-700 text-center mt-2">{error}</p>
          <p className="text-green-600 text-center mt-2">{success}</p>
          <div className="h-12 mt-5">
            <Button size="custom" variant="primary" type="submit" disabled={isPending}>
              {isPending ? 
              <Spinner />:
              "Login"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/form";

import { User } from "@prisma/client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { updateUser } from "@/actions/user";
import { updatePassSchema } from "@/schemas/userSchema";

type Props = {
  data: User;
  onCancelEdit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

export default function EditProfile({ data, onCancelEdit }: Props) {
  const isPasswordNull = data?.password === null ? true : false;

  const form = useForm<z.infer<typeof updatePassSchema>>({
    resolver: zodResolver(updatePassSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });
  // check if he want to edit his profile
  const [edit, setEdit] = useState(false);
  // for show pass
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const user = useCurrentUser();
  const handleEditProfile = () => {
    setEdit(true);
  };
  // Handle on submit
  const handleSubmit = (values: z.infer<typeof updatePassSchema>) => {};
  return (
    <div className="container">
      <div className="container pt-10">
        {/* form */}
        <div className="pt-10 max-md:z-40">
          <Form {...form}>
            {/* every the time the form is invalid the handle submit will not perform */}
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="flex flex-col gap-3 px-10">
                {/* Current pass */}
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        {/* label */}
                        <div
                          className={`relative flex flex-col ${
                            isPasswordNull ? "hidden" : ""
                          }`}
                        >
                          <FormLabel>Current Password</FormLabel>
                          <div className="relative flex flex-col">
                            <FormControl>
                              <Input
                                type={showCurrentPass ? "text" : "password"}
                                placeholder="************"
                                className="px-7 py-6 border bg-sky-50 border-violet-900"
                                {...field}
                              />
                            </FormControl>
                            {/* icons */}

                            {/* eye */}
                            <div className="absolute right-0 top-3 pr-4 cursor-pointer">
                              {showCurrentPass ? (
                                <FaEye
                                  onClick={() => setShowCurrentPass(false)}
                                  className="text-black text-2xl select-none"
                                />
                              ) : (
                                <FaEyeSlash
                                  onClick={() => setShowCurrentPass(true)}
                                  className="text-black text-2xl select-none"
                                />
                              )}
                            </div>
                          </div>
                          <FormMessage /> {/* display Error Messgae*/}
                        </div>
                      </FormItem>
                    );
                  }}
                />
                {/* New Password */}
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        {/* label */}
                        <div
                          className={`relative flex flex-col ${
                            isPasswordNull ? "hidden" : ""
                          }`}
                        >
                          <FormLabel>New Password</FormLabel>
                          <div className=" relative flex flex-col">
                            <FormControl>
                              <Input
                                type={showPass ? "text" : "password"}
                                placeholder="************"
                                className="px-7 py-6 border bg-sky-50 border-violet-900"
                                {...field}
                              />
                            </FormControl>
                            {/* icons */}

                            {/* eye */}
                            <div className="absolute right-0 top-3 pr-4 cursor-pointer">
                              {showPass ? (
                                <FaEye
                                  onClick={() => setShowPass(false)}
                                  className="text-black text-2xl select-none"
                                />
                              ) : (
                                <FaEyeSlash
                                  onClick={() => setShowPass(true)}
                                  className="text-black text-2xl select-none"
                                />
                              )}
                            </div>
                          </div>
                          <FormMessage /> {/* display Error Messgae*/}
                        </div>
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
                        <div
                          className={`relative flex flex-col ${
                            isPasswordNull ? "hidden" : ""
                          }`}
                        >
                          <FormLabel>Confirm Password</FormLabel>
                          <div className="relative flex flex-col">
                            <FormControl>
                              <Input
                                type={showConfirmPass ? "text" : "password"}
                                placeholder="************"
                                className="px-7 py-6 border bg-sky-50 border-violet-900"
                                {...field}
                              />
                            </FormControl>
                            {/* icons */}

                            {/* eye */}
                            <div className="absolute right-0 top-3 pr-4 cursor-pointer">
                              {showConfirmPass ? (
                                <FaEye
                                  onClick={() => setShowConfirmPass(false)}
                                  className="text-black text-2xl select-none"
                                />
                              ) : (
                                <FaEyeSlash
                                  onClick={() => setShowConfirmPass(true)}
                                  className="text-black text-2xl select-none"
                                />
                              )}
                            </div>
                          </div>
                          <FormMessage /> {/* display Error Messgae*/}
                        </div>
                      </FormItem>
                    );
                  }}
                />
                <div className="h-12 mt-5 flex flex-row gap-5 justify-end">
                  <Button className="bg-red-500" onClick={onCancelEdit}>
                    cancel
                  </Button>
                  <Button className="bg-green-500" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

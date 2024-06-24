"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/form";

import { editProfileSchema } from "@/schemas/userSchema";
import { User } from "@prisma/client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { updateUser } from "@/actions/user";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "../ui/use-toast";
import Spinner from "../utils-ui/Spinner";

type Props = {
  data: User;
  onCancelEdit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

export default function EditProfile({ data, onCancelEdit }: Props) {
  const isPasswordNull = data?.password === null ? true : false;
  const user = useCurrentUser();
  const [image, setImage] = useState(data?.image);
  const [isPending, startTransition] = useTransition();
  const [uploadStatus, setUploadStatus] = useState(false);

  //Form
  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      image: data.image || "",
    },
  });

  //Submit
  const handleSubmit = (values: z.infer<typeof editProfileSchema>) => {
    startTransition(() => {
      updateUser(values).then((data) => {
        if (data.success) {
          toast({
            title: "Success",
            description: "Profile Updated",
          });
          onCancelEdit(null);
        }
      });
    });
  };

  //Temporary Upload Image not stored in DB
  const handleUploadImage = (res: any) => {
    const url = res[0].url;
    setImage(url);
    form.setValue("image", url);
    setUploadStatus(false);
  };

  return (
    <div className="container">
      <div className="container pt-10">
        {/* form */}
        <div className="pt-10 max-md:z-40">
          <Form {...form}>
            {/* every the time the form is invalid the handle submit will not perform */}
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="w-full flex flex-row gap-5 mb-10">
                <div className="w-1/4 flex justify-center items-center">
                  <div className=" w-40 h-40 border border-black bg-slate-500 rounded-full">
                    <Image
                      src={image}
                      width={40}
                      height={40}
                      className=" w-full bg-cover bg-center rounded-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-1/4 flex flex-col justify-center border-r border-black p-5">
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={handleUploadImage}
                    onUploadProgress={(p: number) => {
                      setUploadStatus(true);
                    }}
                    onUploadError={(error: Error) => {
                      alert(`ERROR! ${error.message}`);
                    }}
                    appearance={{
                      button:
                        "bg-blue-300 w-full dark:bg-slate-900 dark:border dark:border-slate-100",
                    }}
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-center pl-5">
                  <p className="text-lg">Image requirements:</p>
                  <p className="text-sm">1. Min. 400 x 400px</p>
                  <p className="text-sm">2. Max. 4MB</p>
                  <p className="text-sm">3. Your face or company logo</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 px-10">
                {/* Name */}
                <div className="flex flex-row gap-10 w-full">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            {/* label */}
                            <FormLabel>First Name</FormLabel>
                            <div className="flex flex-col">
                              <FormControl>
                                <Input
                                  placeholder={user.firstName}
                                  className="px-7 py-6 border bg-sky-50 border-violet-900 dark:bg-slate-900 dark:border dark:border-slate-100"
                                  {...field}
                                />
                              </FormControl>
                              {/* icons */}
                            </div>
                            <FormMessage /> {/* display Error Messgae*/}
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            {/* label */}
                            <FormLabel>Last Name</FormLabel>
                            <div className="flex flex-col">
                              <FormControl>
                                <Input
                                  placeholder={user?.lastName}
                                  className="px-7 py-6 border bg-sky-50 border-violet-900 dark:bg-slate-900 dark:border dark:border-slate-100"
                                  {...field}
                                />
                              </FormControl>
                              {/* icons */}
                            </div>
                            <FormMessage /> {/* display Error Messgae*/}
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                </div>
                {/* Email */}

                <FormItem>
                  {/* label */}
                  <FormLabel>Email</FormLabel>
                  <div className="flex flex-col">
                    <FormControl>
                      <Input
                        placeholder={user?.email}
                        className="px-7 py-6 border bg-sky-50 border-violet-900 dark:bg-slate-900 dark:border dark:border-slate-100"
                        disabled={isPasswordNull}
                      />
                    </FormControl>
                    {/* icons */}
                  </div>
                  <FormMessage /> {/* display Error Messgae*/}
                </FormItem>

                <div className="h-12 mt-5 flex flex-row gap-5 justify-end">
                  <Button
                    className="bg-red-500 hover:bg-red-300 dark:text-white dark:bg-slate-900 dark:border dark:border-slate-100 dark:hover:bg-slate-500"
                    onClick={onCancelEdit}
                    disabled={isPending || uploadStatus}
                  >
                    cancel
                  </Button>
                  <Button
                    className="bg-green-500 hover:bg-green-300 dark:text-white dark:bg-slate-600 dark:border dark:border-slate-100 dark:hover:bg-slate-900"
                    type="submit"
                    disabled={isPending || uploadStatus}
                  >
                    {isPending || uploadStatus ? <Spinner /> : "Submit"}
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

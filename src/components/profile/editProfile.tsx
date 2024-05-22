"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import Profile from '@/components/profile/profile';
import InitialProfile from '@/public/img/profile/initialProfile.png';

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import { FiUser } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AlertCircle } from "lucide-react";

import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/form";

import { editProfileWithConfirmPassSchema } from "@/schemas/userSchema";





export default function profile() {
  const form = useForm<z.infer<typeof editProfileWithConfirmPassSchema>>({
    resolver: zodResolver(editProfileWithConfirmPassSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      currentPassword:"",
      newPassword: "",
    },
  });
  // check if he want to edit his profile
  const [edit, setEdit] = useState(false)
  // for show pass
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleEditProfile = () =>{
    setEdit(true);
  };

  const handleCancelEdit = () =>{
    setEdit(false);
  };

  // Handle on submit
  const handleSubmit = () => {

  }
  return (

    <div className='container'> 
      {!edit ? 
        <>
          <Profile />
          <div className='w-full px-16 flex justify-end'>
            <Button onClick={handleEditProfile}>Edit Profile</Button>
          </div>
        </>
        :
        <div className='container pt-10'>
          {/* Avatar upload do it here */}
          <div className='w-full flex flex-row gap-5'>
            <div className='w-1/4 flex justify-center items-center'>
              <div className=' w-40 h-40 border border-black bg-slate-500 rounded-full'>
                <Image src={InitialProfile} width={40} height={40} className=" w-full bg-cover bg-center rounded-full" alt="" />
              </div> 
            </div>
            <div className='w-1/4 flex flex-col justify-center border-r border-black'>
              <Input
                placeholder="first name"
                type='file'
                className="px-2 py-1 w-48  border bg-white border-violet-900"
              />
             
              <Button className='bg-white hover:bg-white text-black  w-48'>Remove</Button>
             
            </div>
            <div className='w-1/2 flex flex-col justify-center pl-5'>
              <p className='text-lg'>Image requiremnts:</p>
              <p className='text-sm'>1. Min. 400 x 400px</p>
              <p className='text-sm'>2. Max. 2MB</p>
              <p className='text-sm'>3. Your face or company logo</p>
            </div>
          </div>

          {/* form */}
          <div className="pt-10 max-md:z-40">
            <Form {...form}>
              {/* every the time the form is invalid the handle submit will not perform */}
              <form onSubmit={form.handleSubmit(handleSubmit)}>
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
                                    placeholder="first name"
                                    className="px-7 py-6 border bg-sky-50 border-violet-900"
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
                                    placeholder="last name"
                                    className="px-7 py-6 border bg-sky-50 border-violet-900"

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
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          {/* label */}
                          <FormLabel>Email</FormLabel>
                          <div className="flex flex-col">
                            <FormControl>
                              <Input
                                placeholder="Email"
                                className="px-7 py-6 border bg-sky-50 border-violet-900"
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
                  {/* Current pass */}
                  <FormField
                    control={form.control}
                    name="currentPassword"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          {/* label */}
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
                        </FormItem>
                      );
                    }}
                  />
                  <div className="h-12 mt-5 flex flex-row gap-5 justify-end">
                    <Button className='bg-red-500' onClick={handleCancelEdit}>cancel</Button>
                    <Button className='bg-green-500' type="submit" >Submit</Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
          
        </div>
      }
       
    </div>
  )
}

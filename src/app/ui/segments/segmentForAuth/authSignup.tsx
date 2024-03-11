"use client";
import React from 'react'
import { useState } from 'react'; 
import { MdEmail, MdKey } from "react-icons/md";
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { FiUser } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from '@/app/ui/toplevelComponents/Button';
import { 
  Form, 
  FormField, 
  FormItem, 
  FormMessage, 
  FormLabel, 
  FormControl  } from '@/components/ui/form';

import { withConfirmPassSchema } from '@/schemas/userSchema';
import { register } from '@/actions/authentication/register';


export default function SignupInput() {
  // form validation
  //checking for every user passe in form is valid
  const form = useForm<z.infer<typeof withConfirmPassSchema>>({
    resolver: zodResolver(withConfirmPassSchema),
    defaultValues:{
      firstName:"",
      lastName:"",
      email:"",
      password:"",
    }
  });

  //  handle for submit
  const handleSubmit = async (values: z.infer<typeof withConfirmPassSchema>) => {
    register(values)
   }

   

  // Tosee pass
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <div className='max-md:z-40'>
      <Form {...form}>
        {/* every the time the form is invalid the handle submit will not perform */}
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className='flex flex-col gap-3'>
            {/* Name */}
            <div className='flex flex-row gap-2 w-full'>
              <div className='w-1/2'>
                <FormField
                control={form.control} 
                name="firstName" 
                render={({field})=>{
                    return <FormItem> 
                      {/* label */}
                      <FormLabel>First Name</FormLabel>
                      <div className='relative flex flex-col'>
                        <FormControl>
                          <Input placeholder="first name" className='pl-12 py-6 border bg-sky-50 border-violet-900' {...field} /> 
                        </FormControl>
                        {/* icons */}
                        <div className='absolute top-2.5 pl-2.5'>
                          <FiUser  className='text-black text-3xl'/>
                        </div>
                      </div>
                      <FormMessage /> {/* display Error Messgae*/}
                    </FormItem>
                }}/>
              </div>
              <div className='w-1/2'>
                <FormField
                control={form.control} 
                name="lastName" 
                render={({field})=>{
                    return <FormItem> 
                      {/* label */}
                      <FormLabel>Last Name</FormLabel>
                      <div className='relative flex flex-col'>
                        <FormControl>
                          <Input placeholder="last name" className='pl-12 py-6 border bg-sky-50 border-violet-900' {...field} /> 
                        </FormControl>
                        {/* icons */}
                        <div className='absolute top-2.5 pl-2.5'>
                          <FiUser  className='text-black text-3xl'/>
                        </div>
                      </div>
                      <FormMessage /> {/* display Error Messgae*/}
                    </FormItem>
                }}/>
              </div>
            </div>
            {/* Email */}
            <FormField
            control={form.control} 
            name="email" 
            render={({field})=>{
                return <FormItem> 
                  {/* label */}
                  <FormLabel>Email</FormLabel>
                  <div className='relative flex flex-col'>
                    <FormControl>
                      <Input placeholder="Email" className='pl-12 py-6 border bg-sky-50 border-violet-900' {...field} /> 
                    </FormControl>
                    {/* icons */}
                    <div className='absolute top-2.5 pl-2.5'>
                      <MdEmail  className='text-black text-3xl'/>
                    </div>
                  </div>
                  <FormMessage /> {/* display Error Messgae*/}
                </FormItem>
            }}/>
            {/* Password */}
            <FormField
            control={form.control} 
            name="password" 
            render={({field})=>{
                return <FormItem> 
                  {/* label */}
                  <FormLabel>Password</FormLabel>
                  <div className='relative flex flex-col'>
                    <FormControl>
                      <Input 
                      type={showPass ? "text" : "password"} placeholder="************" 
                      className='pl-12 py-6 border bg-sky-50 border-violet-900' {...field} /> 
                    </FormControl>
                    {/* icons */}
                    <div className='absolute top-2.5 pl-2.5'>
                      <MdKey  className='text-black text-3xl'/>
                    </div>
                    <div className='absolute right-0 top-3 pr-4 cursor-pointer'>
                      { showPass ?
                        <FaEye onClick={()=> setShowPass(false)}  className='text-black text-2xl'/>
                        :
                        <FaEyeSlash onClick={()=> setShowPass(true)}className='text-black text-2xl'/>
                      }
                    </div>
                  </div>
                  <FormMessage /> {/* display Error Messgae*/}
                </FormItem>
            }}/>

            <FormField
            control={form.control} 
            name="confirmPassword" 
            render={({field})=>{
                return <FormItem> 
                  {/* label */}
                  <FormLabel>confirmPassword</FormLabel>
                  <div className='relative flex flex-col'>
                    <FormControl>
                      <Input 
                      type={showConfirmPass ? "text" : "password"} 
                      placeholder="************" 
                      className='pl-12 py-6 border bg-sky-50 border-violet-900' {...field} /> 
                    </FormControl>
                    {/* icons */}
                    <div className='absolute top-2.5 pl-2.5'>
                      <MdKey  className='text-black text-3xl'/>
                    </div>
                    <div className='absolute right-0 top-3 pr-4 cursor-pointer'>
                      { showConfirmPass ?
                        <FaEye onClick={()=> setShowConfirmPass(false)}  className='text-black text-2xl'/>
                        :
                        <FaEyeSlash onClick={()=> setShowConfirmPass(true)}className='text-black text-2xl'/>
                      }
                    </div>
                  </div>
                  <FormMessage /> {/* display Error Messgae*/}
                </FormItem>
            }}/>
            
            <div className='h-12 mt-5'>
              <Button size="custom" variant="primary" type="submit">Sign Up</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

import React from 'react'
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { FiUser } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AlertCircle } from "lucide-react";

import Button from "@/components/utils-ui/Button";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { withConfirmPassSchema } from "@/schemas/userSchema";


const handleSubmit =() => {

}

export default function confirmPassword() {
  const form = useForm<z.infer<typeof withConfirmPassSchema>>({
    resolver: zodResolver(withConfirmPassSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} >
          
        </form>
      </Form>
      
    </div>
  )
}

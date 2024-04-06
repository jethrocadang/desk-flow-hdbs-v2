"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "../ui/badge";


const formSchema = z.object({
  department: z.string().min(2, {
    message: "department must be at least 2 characters.",
  }),
  colors: z.string(),
});

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const DepartmentForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      department: "",
      colors: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-white p-5 border border-black rounded-md hidden">
      <div className="space-y-2  flex-col hidden">
        <Label>Departments</Label>
        <ScrollArea className="h-24 w-full rounded-md border bg-white">
          <div className="p-4">
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm">
                  {tag}
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </div>
        </ScrollArea>
        <Button className="w-[180px]">Add</Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <Input placeholder="Department" {...field} />
                </FormControl>
                <FormDescription>
                  This will group your desks by department.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="colors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Colors</FormLabel>
                <FormControl>
                  <RadioGroup defaultValue="Available">
                    <div className=" flex justify-between px-7">
                      <Badge variant="secondary" className="rounded-full">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Available" id="Available" />
                        </div>
                      </Badge>
                      <Badge variant="secondary">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="Maintenance"
                            id="Maintenance"
                          />
                        </div>
                      </Badge>
                      <Badge variant="secondary" className="rounded-full">
                        <div className="flex items-center rounded-full">
                          <RadioGroupItem value="Disabled" id="Disabled" />
                        </div>
                      </Badge>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-[180px]">Add Department</Button>
        </form>
      </Form>
    </div>
  );
};

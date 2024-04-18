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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "../ui/badge";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

import { useState } from "react";
import { Desk } from "@prisma/client";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const OPTIONS: Option[] = [
  { label: "nextjs", value: "nextjs" },
  { label: "React", value: "react" },
  { label: "Remix", value: "remix" },
  { label: "Vite", value: "vite" },
  { label: "Nuxt", value: "nuxt" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular" },
  { label: "Ember", value: "ember", disable: true },
  { label: "Gatsby", value: "gatsby", disable: true },
  { label: "Astro", value: "astro" },
];

export const DeskForm = ({ desk }: { desk: Desk }) => {
  const [value, setValue] = useState<Option[]>([]);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 p-7 bg-white border border-black rounded-md "
      >
        <div>
          <h1 className="text-xl  font-bold tracking-wide">Desk Editor</h1>
        </div>
        {/**Desk Name */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desk Name</FormLabel>
              <FormControl>
                <Input placeholder={desk.deskName} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/**Desk Name */}

        {/**Availabilty */}
        <RadioGroup defaultValue="Available">
          <div className=" flex justify-between px-7">
            <Badge variant="secondary" className="rounded-md">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Available" id="Available" />
                <Label htmlFor="Available">Available</Label>
              </div>
            </Badge>
            <Badge variant="secondary">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Maintenance" id="Maintenance" />
                <Label htmlFor="Maintenance">Maintenance</Label>
              </div>
            </Badge>
            <Badge variant="secondary">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Disabled" id="Disabled" />
                <Label htmlFor="Disabled">Disabled</Label>
              </div>
            </Badge>
          </div>
        </RadioGroup>
        {/**Availabilty */}

        {/**Description */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Description</Label>
          <Textarea placeholder="Describe your desk." id="message" />
        </div>
        {/**Description */}

        {/**Ammenities */}
        <div className="grid w-full gap-1.5">
          <Label>Ammenities</Label>
          <MultipleSelector
            className="bg-white"
            value={value}
            onChange={setValue}
            defaultOptions={OPTIONS}
            selectFirstItem={false}
            placeholder="Add Amenities..."
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                no results found.
              </p>
            }
          />
        </div>
        {/**Ammenities */}

        {/**Department*/}
        <div className="grid w-full gap-1.5">
          <Label>Department</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/**Department*/}

        <div className="flex justify-center space-x-5">
          <Button className="w-[90px]">Save</Button>
          <Button variant="destructive" className="w-[90px]">
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

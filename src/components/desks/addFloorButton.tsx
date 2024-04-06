"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layers3 } from "lucide-react";

const formSchema = z.object({
  floorName: z.string().min(2, {
    message: "Required",
  }),
});

export const AddFloorButton = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      floorName: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[180px] text-black font-semibold gap-3 border border-black">
          <Layers3 />
          Add Floor
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Floor</DialogTitle>
          <DialogDescription>
            Create your new floor, Floor Manager is Required.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="floorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Floor Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Floor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Floor Managers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="John Doe">John Doe</SelectItem>
              </SelectContent>
            </Select>
            <DialogFooter>
              <Button type="submit" className="w-full">
                Create Floor
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

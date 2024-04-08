"use client";

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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layers3 } from "lucide-react";
import { addFloorSchema } from "@/schemas/floorSchema";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

import { createFloor } from "@/actions/floor/floor";
import { User } from "@prisma/client";

export const AddFloorButton = ({ users }: { users: User[] }) => {
  const form = useForm<z.infer<typeof addFloorSchema>>({
    resolver: zodResolver(addFloorSchema),
    defaultValues: {
      floorName: "",
      floorManager: "",
    },
  });

  const onSubmit = (values: z.infer<typeof addFloorSchema>) => {
    createFloor(values);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[180px] text-white font-semibold gap-3 border border-black">
          <Layers3 className="text-black" />
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
            <FormField
              control={form.control}
              name="floorManager"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="Floor Managers" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {users.map((user) => (
                        <SelectItem
                          key={user.id}
                          value={user.id}
                          className="bg-green-500 border border-black"
                        >
                          {`${user.firstName} ${user.lastName}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
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

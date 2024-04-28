"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";

import { Input } from "@/components/ui/input";

import { Amenity, Desk } from "@prisma/client";

import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import { CustomArea } from "react-img-mapper";
import { Calendar } from "../ui/calendar";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { bookingSchema } from "@/schemas/bookingSchema";
import { Label } from "../ui/label";
import { DeskInfoCard } from "./deskInfo";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

interface Props {
  desk: Desk;
  amenities: Amenity[];
  onCancel: (e: CustomArea) => void;
}

export const BookingForm = ({ desk, amenities, onCancel }: Props) => {
  const [isPending, startTransition] = useTransition();
  const user = useCurrentUser();

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      ...(desk.id && { deskId: desk.id }),
      ...(user?.id && { userId: user.id }),
      date: new Date(),
    },
  });

  const onSubmit = (values: z.infer<typeof bookingSchema>) => {
    console.log("Clicked");
    console.log(values);
    console.log(desk.id);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" p-7 bg-white border border-black rounded-md "
      >
        <div>
          <h1 className="text-xl  font-bold tracking-wide">Book this Desk?</h1>
          <DeskInfoCard
            className="border-none shadow-none px-0"
            desk={desk}
            amenities={amenities}
            calendar="hidden"
          />
        </div>

        {/**Desk ID */}
        <FormField
          control={form.control}
          name="deskId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input defaultValue={desk.id} type="hidden" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/**Desk ID */}

        {/**Calendar */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <>
              <Label>Select Date</Label>
              <div
                className={cn(
                  " pl-3 text-left font-normal border border-input rounded-md h-10 px-3 py-2 flex",
                  !field.value && "text-muted-foreground"
                )}
              >
                {" "}
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </div>
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => {
                  const currentDate = new Date();
                  const tomorrow = new Date(currentDate);
                  tomorrow.setDate(currentDate.getDate() + 1); // Get tomorrow's date
                  const futureDate = new Date();
                  futureDate.setDate(currentDate.getDate() + 21); // Add 21 days (3 weeks) to the current date
                  
                  const dayOfWeek = date.getDay(); // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
                  return dayOfWeek === 0 || dayOfWeek === 6 || date <= tomorrow || date > futureDate;
              }}
                initialFocus
              />
            </>
          )}
        />
        {/**Calendar */}

        <div className="flex justify-center space-x-5 mt-5">
          <Button className="w-[90px]" type="submit">
            Book
          </Button>
          <Button
            variant="destructive"
            className="w-[90px]"
            onClick={() => {
              onCancel(null);
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { format } from "date-fns";
import { Amenity, Booking, Desk } from "@prisma/client";
import React, { useTransition } from "react";
import { CustomArea } from "react-img-mapper";
import { Calendar } from "../ui/calendar";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { bookingSchema } from "@/schemas/bookingSchema";
import { Label } from "../ui/label";
import { DeskInfoCard } from "./deskInfo";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { createBooking } from "@/actions/bookings/booking";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

type Props = {
  desk: Desk;
  bookings: Booking[];
  amenities: Amenity[];
  onCancel: (e: CustomArea) => void;
};

export const BookingForm = ({ desk, amenities, bookings, onCancel }: Props) => {
  const [isPending, startTransition] = useTransition();
  const user = useCurrentUser();
  const router = useRouter();

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      ...(desk.id && { deskId: desk.id }),
      ...(user?.id && { userId: user.id }),
      date: new Date(),
    },
  });

  const onSubmit = (values: z.infer<typeof bookingSchema>) => {
    startTransition(() => {
      createBooking(values).then((data) => {
        if (data.success) {
          toast({
            title: "Success!",
            description: "Booking Created!",
          });
          router.refresh();
        }
      });
    });
  };

  const handleDisable = (date: Date) => {
    const currentBookings = bookings.filter(
      (booking) => booking.deskId === desk.id
    );

    for (const booking of currentBookings) {
      const bookingDate = new Date(booking.date);

      if (date.toDateString() === bookingDate.toDateString()) {
        return true; // Disable if the date is already booked for this desk
      }
    }
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1); // Get tomorrow's date
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + 21); // Add 21 days (3 weeks) to the current date

    const dayOfWeek = date.getDay(); // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    return (
      dayOfWeek === 0 ||
      dayOfWeek === 6 ||
      date <= tomorrow ||
      date > futureDate
    );
  };

  const getDisabledClassName = (date: Date) => {
    // Specific date to compare against (adjust to UTC)
    const specificDate = new Date(Date.UTC(2024, 3, 15)); // April is represented by 3 (zero-based)

    // Convert the provided date to UTC for comparison
    const utcDate = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );

    // Check if the provided date matches the specific date
    const isSpecificDate =
      utcDate.toISOString().slice(0, 10) ===
      specificDate.toISOString().slice(0, 10);

    // Check if any booking matches the provided date
    const isBooked = bookings.some((booking) => {
      const bookingDate = new Date(booking.date);
      return (
        utcDate.toISOString().slice(0, 10) ===
        bookingDate.toISOString().slice(0, 10)
      );
    });

    console.log("Specific Date:", specificDate, isBooked);

    // If the date matches the specific date or any booking, return appropriate styles
    if (isSpecificDate || isBooked) {
      return "text-muted-foreground opacity-50 bg-red-100"; // Styles for specific date or booked dates
    } else {
      return "text-muted-foreground opacity-50"; // No background for disabled dates
    }
  };

  const disabledClassName = getDisabledClassName(new Date());

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" p-7 bg-white dark:bg-slate-900 border border-black rounded-md "
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
                disabled={handleDisable}
                initialFocus
                classNames={{
                  day_disabled: disabledClassName,
                }}
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

"use client";

import { Booking, Desk } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { ScrollArea } from "../ui/scroll-area";
import { CancelBooking } from "./cancelBooking";

type Props = {
  desks: Desk[];
  bookings: Booking[];
};

export const UserBookingCard = ({ desks, bookings }: Props) => {
  const user = useCurrentUser();

  const data = bookings.filter((booking) => booking.userId === user?.id);

  const statusColors: { [status: string]: string } = {
    BOOKED: "bg-green-200",
    PENDING: "bg-orange-200",
    CANCELLED: "bg-amber-200",
  };

  return (
    <Card className="w-[300px] self-center px-5">
      <CardHeader className="text-center">
        <CardTitle>Your Bookings</CardTitle>
      </CardHeader>
      <Separator className="mb-5" />
      <ScrollArea className="flex h-[450px]">
        {data.length > 0 ? ( // Check if there are bookings
          data.map((booking) => {
            const desk = desks.find((desk) => desk.id === booking.deskId);
            if (desk) {
              const isExpired =
                (booking.status === "BOOKED" || booking.status === "PENDING") &&
                new Date(booking.date) < new Date();
              const statusColor = isExpired
                ? "bg-red-200"
                : statusColors[booking.status] || "";
              return (
                <CardContent
                  key={booking.id}
                  className={`border border-input rounded-md py-3 space-y-3 mt-3`}
                >
                  <div className="flex text-xs justify-between font-semibold tracking-wider">
                    <p>{desk.deskName}</p>
                    <p>{new Date(booking.date).toDateString()}</p>
                  </div>
                  <div
                    className={`flex justify-center p-2 rounded-lg font-semibold tracking-widest text-sm ${statusColor}`}
                  >
                    <p>{isExpired ? "EXPIRED" : booking.status}</p>
                  </div>
                  {(booking.status === "BOOKED" && !isExpired ) && <CancelBooking id={booking.id}/>}
                </CardContent>
              );
            } else {
              return null;
            }
          })
        ) : (
          <div className="text-center text-sm font-medium tracking-wide">
            <p>You Don&apos;t Have Bookings.</p>
          </div>
        )}
      </ScrollArea>
      <Separator className="mt-5" />
    </Card>
  );
};

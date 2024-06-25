"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

export type Booking = {
  id: string;
  userFullName: string;
  userEmail: string;
  userImage: string;
  deskName: string;
  bookingDate: Date;
  bookingStatus: string;
  
};

const options: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "2-digit",
};

const statusBadge: { [key: string]: string } = {
  BOOKED: "bg-green-500  ",
  PENDING: "bg-orange-500",
  CANCELLED: "bg-amber-500",
  CHECKED_IN: "bg-none border border-black dark:border-white",
  CHECKED_OUT: "bg-none border border-black dark:border-white",
  EXPIRED: "bg-red-500 hover:none",
};

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "userFullName",
    header: "Name",
    cell: ({ row }) => (
        <div className="flex flex-row items-center gap-3">
          <Avatar>
            <AvatarImage src={row.original.userImage} />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
          <p>{row.original.userFullName}</p>
        </div>
      ),
  },
  {
    accessorKey: "userEmail",
    header: "Email",
  },
  {
    accessorKey: "deskName",
    header: "Desk",
  },
  {
    accessorKey: "bookingDate",
    header: "Date",
    cell: ({ getValue }) => {
      const date = getValue() as Date;
      return date.toLocaleDateString("en-US", options);
    },
  },
  {
    accessorKey: "bookingStatus",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.bookingStatus;
      const bookingDate = new Date(row.original.bookingDate);
      const today = new Date();

      let statusClass = statusBadge[status] || "bg-gray-200";
      let displayStatus = status;

      if (bookingDate < today && status === "BOOKED") {
        statusClass = statusBadge.EXPIRED;
        displayStatus = "EXPIRED";
      }

      return <Badge className={statusClass}>{displayStatus}</Badge>;
    },
  },
];

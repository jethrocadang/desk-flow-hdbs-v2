"use client";

import { updateRole } from "@/actions/user";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export type User = {
  id: string;
  fullName: string;
  email: string;
  image: string | null;
  role: "USER" | "ADMIN" | "FM";
};

const roleStyles = {
  USER: "bg-blue-500 text-white",
  ADMIN: "bg-red-500 text-white",
  FM: "bg-green-500 text-white",
};

const roleDisplayNames = {
  USER: "User",
  ADMIN: "Admin",
  FM: "Floor Manager",
};

const handleUpdateRole = (userId: string, newRole: "USER" | "ADMIN" | "FM") => {
  updateRole({id: userId, role: newRole})
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "fullName",
        header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="flex flex-row items-center gap-3">
        <Avatar>
          <AvatarImage src={row.original.image} />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
        <p>{row.original.fullName}</p>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },    
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },    cell: ({ row }) => {
      const role = row.original.role;
      const roleClass = roleStyles[role] || "bg-gray-500 text-white";
      const displayName = roleDisplayNames[role] || "Unknown Role";

      return <Badge className={roleClass}>{displayName}</Badge>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem  onClick={() => handleUpdateRole(user.id, "ADMIN")}>Make as Admin</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleUpdateRole(user.id, "FM")}>Make as Floor Manager</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

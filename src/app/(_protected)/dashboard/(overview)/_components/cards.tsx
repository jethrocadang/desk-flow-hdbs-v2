import React from "react";
import DashCards from "@/components/ui/dashCards";
import { LuUsers } from "react-icons/lu";
import { BsFillBoxFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";

type UserProps = {
  allUsers: number;
  user: number;
  admin: number;
  FM: number;
};

export const UserCards = ({ allUsers, user, admin, FM }: UserProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className=" text-2xl font-bold">Users</h2>
      <div className="flex flex-wrap gap-16 justify-center">
        <DashCards
          title="Total"
          icon={<LuUsers className=" text-3xl" />}
          description=""
          count={allUsers}
        />
        <DashCards
          title="Admins"
          icon={<LuUsers className=" text-3xl" />}
          description=""
          count={admin}
        />
        <DashCards
          title="Floor Manager"
          icon={<LuUsers className=" text-3xl" />}
          description=""
          count={FM}
        />
        <DashCards
          title="Employees"
          icon={<LuUsers className=" text-3xl" />}
          description=""
          count={user}
        />
      </div>
    </div>
  );
};

type BookingsProp = {
  allBookings: number;
  confirmed: number;
  pending: number;
  cancelled: number;
};

export const BookingsCard = ({
  allBookings,
  confirmed,
  pending,
  cancelled,
}: BookingsProp) => {
  return (
    <div className="flex flex-col gap-2 mt-10 ">
      <h2 className=" text-2xl font-bold">Bookings</h2>
      <div className="flex flex-wrap gap-16 justify-center">
      <DashCards
          title="Total"
          icon={<BsFillBoxFill className=" text-3xl text-green-600" />}
          description=""
          count={allBookings}
        />
        <DashCards
          title="Confirmed"
          icon={<BsFillBoxFill className=" text-3xl text-green-600" />}
          description=""
          count={confirmed}
        />
        <DashCards
          title="Pending "
          icon={<BsFillBoxFill className=" text-3xl text-yellow-600" />}
          description=""
          count={pending}
        />
        <DashCards
          title="Cancelled"
          icon={<BsFillBoxFill className=" text-3xl text-red-600" />}
          description=""
          count={cancelled}
        />
      </div>
    </div>
  );
};

type DesksProp = {
  desks: number
  available: number
  unavailable: number
}

export const DesksCard = ({desks, available, unavailable}:DesksProp) => {
  return (
    <div className="flex flex-col gap-2 mt-10">
      <h2 className=" text-2xl font-bold">Desks</h2>
      <div className="flex flex-wrap gap-16 justify-center">
      <DashCards
          title="Total"
          icon={<GoGraph className=" text-3xl font-semibold text-green-600" />}
          description=""
          count={desks}
        />
        <DashCards
          title="Occupied"
          icon={<GoGraph className=" text-3xl font-semibold text-green-600" />}
          description=""
          count={8}
        />
        <DashCards
          title="Unoccupied"
          icon={<GoGraph className=" text-3xl font-semibold text-yellow-600" />}
          description=""
          count={available}
        />
        <DashCards
          title="Dissabled"
          icon={<GoGraph className=" text-3xl font-semibold text-red-600" />}
          description=""
          count={unavailable}
        />
      </div>
    </div>
  );
};

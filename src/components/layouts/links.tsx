"use client";
import { LuLayoutDashboard, LuFolderOpen } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";



export const admin = [
    {
      link: "/dashboard",
      label: "Dashboard",
      icon: <LuLayoutDashboard className="text-[#324054] text-2xl" />,
    },
    {
      link: "/dashboard/bookings",
      label: "Bookings",
      icon: <LuFolderOpen className="text-[#324054] text-2xl" />,
    },
    {
      link: "/dashboard/users",
      label: "Manage User",
      icon: <MdOutlineManageAccounts className="text-[#324054] text-2xl" />,
    },
    {
      link: "/dashboard/desks",
      label: "Desks",
      icon: <GrMapLocation className="text-[#324054] text-2xl" />,
    },
  ];
  
  export const user = [
    {
      link: "/user/dashboard",
      label: "Dashboard",
      icon: <LuLayoutDashboard className="text-[#324054] text-2xl" />,
    },
    {
      link: "/user/dashboard/bookings",
      label: "Bookings",
      icon: <LuFolderOpen className="text-[#324054] text-2xl" />,
    },
    {
      link: "/user/dashboard/desks",
      label: "Desks",
      icon: <GrMapLocation className="text-[#324054] text-2xl" />,
    },
  ];
  
   export const bottomFunctions = [
    {
      link: "#",
      label: "Settings",
      icon: <IoSettingsOutline className="text-[#324054] text-2xl" />,
    },
  
  ];
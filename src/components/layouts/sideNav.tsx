
"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { LuLayoutDashboard, LuFolderOpen } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { useState } from "react";

const menuItems = [
  {
    link: "/dashboard",
    label: "Dashboard",
    icon: <LuLayoutDashboard className="text-[#324054] text-2xl" />,
  },
  {
    link: "/bookings",
    label: "Bookings",
    icon: <LuFolderOpen className="text-[#324054] text-2xl" />,
  },
  {
    link: "/manageUser",
    label: "Manage User",
    icon: <MdOutlineManageAccounts className="text-[#324054] text-2xl" />,
  },
  {
    link: "/desks",
    label: "Desks",
    icon: <GrMapLocation className="text-[#324054] text-2xl" />,
  },
];

const bottomFunctions = [
  {
    link: "/settings",
    label: "Settings",
    icon: <IoSettingsOutline className="text-[#324054] text-2xl" />,
  },
  {
    link: "/logout",
    label: "Logout",
    icon: <IoLogOutOutline className="text-[#324054] text-2xl" />,
  },
];

export const SideNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <aside
      className={`left-0 z-10 hidden ${
        toggle ? "w-72 duration-150" : "w-20 "
      } flex-col border-r bg-background  duration-150 sm:flex`}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col items-center my-5">
          <button
            onClick={handleClick}
            className={`flex  items-center w-full ${
              toggle ? " px-5" : "justify-center "
            }`}
          >
            <Image src={Logo} alt="logo" width={40} height={40} />
            <h2
              className={`text-2xl  text-blue-700 font-bold ${
                toggle ? "" : "hidden"
              } origin-left `}
            >
              Desk<span className="text-blue-500">Flow</span>{" "}
            </h2>
          </button>
        </div>
        <div className={`flex-grow py-5 ${toggle && "p-5"}`}>
          <ul
            className={`flex flex-col space-y-5 ${
              toggle ? "items-start justify-center" : "items-center"
            }`}
          >
            {menuItems.map((items, index) => (
              <li
                key={index}
                className={`rounded-lg hover:bg-[#E0E2FF] p-2 ${
                  toggle && "w-full"
                }`}
              >
                <Link href={items.link} className="flex items-start space-x-2">
                  {items.icon}
                  <span
                    className={`text-md text-black ${
                      !toggle && "sm:hidden"
                    } origin-left`}
                  >
                    {items.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`my-5 py-5 ${toggle && "p-5"}`}>
          <ul
            className={`flex flex-col space-y-5 ${
              toggle ? "items-start justify-center" : "items-center"
            }`}
          >
            {bottomFunctions.map((items, index) => (
              <li
                key={index}
                className={`rounded-lg hover:bg-[#E0E2FF] p-2 ${
                  toggle && "w-full"
                }`}
              >
                <Link href={items.link} className="flex items-start space-x-2">
                  {items.icon}
                  <span
                    className={`text-md text-black duration-300 ${
                      !toggle && "hidden"
                    } origin-left duration-1000`}
                  >
                    {items.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};
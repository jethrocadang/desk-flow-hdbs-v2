"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { useState } from "react";
import { useCurrentRole } from "@/hooks/useCurrentUser";
import { admin, user, bottomFunctions } from "./links";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { logout } from "@/actions/authentication/logout";

interface Props {
  link: string;
  label: string;
  icon: JSX.Element;
}
export const SideNav = () => {
  const [toggle, setToggle] = useState(false);

  const role = useCurrentRole();

  const handleClick = () => {
    setToggle(!toggle);
  };

  const onClick = () => {
    logout();
  };

  let links: Props[];
  switch (role) {
    case "ADMIN":
      links = admin;
      break;

    case "USER":
    case "FM":
      links = user;
      break;
    default:
      links = [];
  }
  return (
    <aside
      className={`left-0 fixed h-full z-50 hidden ${
        toggle ? "w-72 duration-150" : "w-20 "
      } flex-col  bg-background  duration-150 sm:flex dark:bg-slate-900`}
    >
      <div className="flex flex-col h-full px-[17px] border-r dark:border-slate-400">
        <div className="flex flex-col my-5">
          <button
            onClick={handleClick}
            className={`flex   items-center w-full ${
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
            {links.map((items, index) => (
              <li
                key={index}
                className={`rounded-lg hover:bg-[#E0E2FF] dark:hover:bg-black p-2 ${
                  toggle && "w-full"
                }`}
              >
                <Link href={items.link} className="flex items-start space-x-2">
                  {items.icon}
                  <span
                    className={`text-md text-black dark:text-white ${
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
            <li
              className={`rounded-lg hover:bg-[#E0E2FF] dark:hover:bg-black p-2 ${
                toggle && "w-full"
              }`}
            >
              <Link href="#" className="flex items-start space-x-2">
                <IoSettingsOutline className="text-[#324054] text-2xl dark:text-white" />
                <span
                  className={`text-md text-black dark:text-white duration-300 ${
                    !toggle && "hidden"
                  } origin-left duration-1000`}
                >
                  Settings
                </span>
              </Link>
            </li>
            <li
              className={`rounded-lg hover:bg-[#E0E2FF] dark:hover:bg-black p-2 ${
                toggle && "w-full"
              }`}
            >
              <button className="flex items-start space-x-2" onClick={onClick}>
                <IoLogOutOutline className="text-[#324054] text-2xl dark:text-white" />
                <span
                  className={`text-md text-black dark:text-white duration-300 ${
                    !toggle && "hidden"
                  } origin-left duration-1000`}
                >
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

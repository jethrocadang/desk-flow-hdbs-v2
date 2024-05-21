"use client"

import React from "react";
import profile from "@/public/img/profile/profile.svg";

import Image from "next/image";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Link from "next/link";


export default function Header() {
  const user = useCurrentUser();
  
  return (
    <header className=" w-full h-16 border-gray-300 bg-white top-0 left-0 right-0 drop-shadow-md flex flex-row justify-end items-center px-3">
      <Link href={"/dashboard/profile"} className="flex items-start space-x-2 cursor-pointer">
        <div className="flex flex-row gap-3 items-center pr-3">
          <h4 className="text-sm  flex self-center ">{user?.firstName} {user?.lastName}</h4>
          <div className=" w-[40px] h-[40px] border border-blue-900 rounded-full">
            <Image src={user?.image} width={50} height={50} className=" w-full bg-cover bg-center rounded-full" alt="" />
          </div>
        </div>
      </Link>
    </header> 
  );
}
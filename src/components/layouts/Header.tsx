import React from "react";
import profile from "@/public/img/profile/profile.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className=" w-full h-16 border-gray-300 bg-white top-0 left-0 right-0 drop-shadow-md flex flex-row justify-end items-center px-3">
      <div className="flex flex-row gap-3 items-center pr-3">
        <h4 className="text-sm font-semibold flex self-center "> John Doe</h4>
        <div className=" w-[40px] h-[40px] border border-blue-900 rounded-full">
          <Image src={profile} className=" w-full bg-cover bg-center" alt="" />
        </div>
      </div>
    </header>
  );
}

"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import React from "react";


export default function Main({ children }: { children: React.ReactNode }) {
  const user = useCurrentUser();

  return (
    <div className="h-full container">
      <div className="h-full px-16 py-10 rounded-md mt-14">
        <h1 className=" dark:text-blue-600 font-bold text-4xl tracking-widest text-[#2B3674]">
          Hello, {user?.firstName}!
        </h1>
        <p className="text-xl text-[#545eb9] ">What can I do for you today?</p>
        {/* cards(user/dashboard/_components/cards.tsx) */}
        <div className="container mt-10">{children}</div>
      </div>
    </div>
  );
}

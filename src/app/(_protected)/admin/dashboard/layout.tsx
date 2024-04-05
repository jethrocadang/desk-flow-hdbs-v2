import React from "react";
import Header from "@/components/layouts/header";
import { SideNav } from "@/components/layouts/sideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen">
      <SideNav />
      <div className="w-full h-screen">
        <Header />
        <main className=" h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  );
}

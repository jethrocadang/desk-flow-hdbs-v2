import React from "react";
import Header from "@/components/layouts/Header";
import { SideNav } from "@/components/layouts/sideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen">
      <SideNav/>
      <div className="w-full h-full">
        <Header />
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
}

import React from "react";
import Header from "@/components/layouts/header";
import { SideNav } from "@/components/layouts/sideNav";
import { ThemeProvider } from "@/components/themeProvider/theme-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
    <div className="flex flex-row h-screen w-[calc(100%-4rem)">
      <SideNav />
      <div className="w-full h-screen">
        <Header />
        <main className=" h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
    </ThemeProvider>
  );
}

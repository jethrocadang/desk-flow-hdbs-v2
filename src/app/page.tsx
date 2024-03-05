"use client";
import Image from "next/image";
import React from "react";
import Button from "./ui/toplevelComponents/Button";
import TopNav from "./ui/toplevelComponents/TopNav";
import Footer from "./ui/toplevelComponents/Footer";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Footer />
    </div>
  );
}

"use client";
import Image from "next/image";
import React from "react";
import TopNav from "@/components/layouts/TopNav";
import Header from "@/components/ui/home/header";
import WebDetails from "@/components/ui/home/webDetails";
import Amenities from "@/components/ui/home/amenities";
import Tutorial from "@/components/ui/home/tutorial";
import Benifits from "@/components/ui/home/benifits";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div>
      {/* top Nav */}
      <TopNav/>

      {/* header */}
      <Header />

      {/* webdetails */}
      <WebDetails />

      {/* Amenities */}
      <Amenities />

      {/* tutorial */}
      <Tutorial />

      {/* Benifits */}
      <Benifits />

      {/* footer */}
      <Footer />
    </div>
  );
}

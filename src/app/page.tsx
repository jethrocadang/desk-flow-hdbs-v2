"use client";
import Image from "next/image";
import React from "react";
import TopNav from "@/components/utils-ui/TopNav";
import Header from "@/components/home/header";
import WebDetails from "@/components/home/webDetails";
import Amenities from "@/components/home/amenities";
import Tutorial from "@/components/home/tutorial";
import Benifits from "@/components/home/benifits";
import Footer from "@/components/utils-ui/Footer";

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

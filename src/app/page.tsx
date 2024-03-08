"use client";
import Image from "next/image";
import React from "react";
import TopNav from "@/app/ui/toplevelComponents/TopNav";
import Header from "@/app/ui/segments/segmentsForHomePage/header";
import WebDetails from "@/app/ui/segments/segmentsForHomePage/webDetails";
import Amenities from "@/app/ui/segments/segmentsForHomePage/amenities";
import Tutorial from "@/app/ui/segments/segmentsForHomePage/tutorial";
import Benifits from "@/app/ui/segments/segmentsForHomePage/benifits";
import Footer from "@/app/ui/toplevelComponents/Footer";

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

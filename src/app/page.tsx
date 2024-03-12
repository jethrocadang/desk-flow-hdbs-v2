"use client";
import Image from "next/image";
import React from "react";
import TopNav from "@/components/ui/toplevelComponents/TopNav";
import Header from "@/components/ui/segments/segmentsForHomePage/header";
import WebDetails from "@/components/ui/segments/segmentsForHomePage/webDetails";
import Amenities from "@/components/ui/segments/segmentsForHomePage/amenities";
import Tutorial from "@/components/ui/segments/segmentsForHomePage/tutorial";
import Benifits from "@/components/ui/segments/segmentsForHomePage/benifits";
import Footer from "@/components/ui/toplevelComponents/Footer";

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

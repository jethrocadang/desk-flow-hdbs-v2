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
      <div className=" mt-28 flex flex-col">
        <div>
        <Button size='small' variant="light"  onClick={() => alert('Primary button clicked')}>
          Sign Up
        </Button>
        </div>
        <div>
        <Button size='small' variant="primary"  onClick={() => alert('Primary button clicked')}>
          Sign In
        </Button>
        </div>
        <Button size='small' variant="danger"  onClick={() => alert('Primary button clicked')}>
          Sign In
        </Button>
        <Button size='small' variant="light"  onClick={() => alert('Primary button clicked')}>
          Sign In
        </Button>
      </div>
     <Footer />
    </div>
  );
}

"use client";
import Image from "next/image";
import React from "react";
import Button from "./ui/toplevelComponents/Button";

export default function Home() {
  return (
    <div>
      <Button size='small' variant="secondary"  onClick={() => alert('Primary button clicked')}>
        Sign In
      </Button>
      <Button size='small' variant="primary"  onClick={() => alert('Primary button clicked')}>
        Sign In
      </Button>
      <Button size='small' variant="danger"  onClick={() => alert('Primary button clicked')}>
        Sign In
      </Button>
      <Button size='small' variant="light"  onClick={() => alert('Primary button clicked')}>
        Sign In
      </Button>
      
    </div>
  );
}

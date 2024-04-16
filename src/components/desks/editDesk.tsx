"use client";

import React, { useState, useEffect } from "react";
import ImageMapper, { MapAreas } from "react-img-mapper";
import MapImage from "@/public/floormap.png";
import { Desk } from "@prisma/client";
import { DeskForm } from "./deskForm";

export const DeskEditor = ({ desks }: { desks: Desk[] }) => {
  const [parentWidth, setParentWidth] = useState(0);

  const areas: MapAreas[] = desks
    ? desks.map((desk) => ({
        shape: "rect",
        coords: desk.coords,
        preFillColor: "#eab54d4d",
        strokeColor: "gray",
      }))
    : [];

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = document.querySelector(".container")?.clientWidth;
      if (containerWidth) {
        const scaled = containerWidth * 0.7;

        setParentWidth(scaled);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-pink-100 ">
      <div className="container flex justify-center items-center  w-full h-full bg-green-200">
        <ImageMapper
          src={MapImage.src}
          parentWidth={parentWidth}
          responsive={true}
          map={{ name: "map", areas: areas }}
        />
      </div>
      <div className="bg-blue-200">
        <DeskForm />
      </div>
    </div>
  );
};

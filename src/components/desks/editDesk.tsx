"use client";

import React, { useState, useEffect } from "react";
import ImageMapper, { MapAreas } from "react-img-mapper";
import MapImage from "@/public/floormap.png";
import { Desk } from "@prisma/client";
import { DeskForm } from "./deskForm";
import { useResize } from "@/hooks/resize";

export const DeskEditor = ({ desks }: { desks: Desk[] }) => {
  const parentWidth = useResize();

  const [selectedDesk, setSelectedDesk] = useState<Desk | null>(null);

  const handleDeskSelect = (desk: Desk) => {
    setSelectedDesk(desk);
    console.log("Selected Desk ID:", desk.id);
  };

  const areas: MapAreas[] = [];

  desks.forEach((item, index) => {
    areas[index] = {
      id: item.id,
      shape: "rect",
      coords: item.coords,
      preFillColor: "#eab54d4d",
      strokeColor: "gray",
    };
  });

  return (
    <div className="flex justify-center items-center bg-pink-100 ">
      <div className="container flex justify-center items-center  w-full h-full bg-green-200">
        <ImageMapper
          src={MapImage.src}
          parentWidth={parentWidth}
          responsive={true}
          onClick={(e) => {
            const clickedDesk = desks.find((desk) => desk.id === e.id);
            if (clickedDesk) {
              setSelectedDesk(clickedDesk);
              console.log(clickedDesk.id)
            }
          }}
          map={{ name: "map", areas: areas }}
        />
      </div>
      <div className="bg-blue-200">
        {selectedDesk && <DeskForm id={selectedDesk.id} />}
      </div>
    </div>
  );
};

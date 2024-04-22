"use client";

import React, { useState, useEffect } from "react";
import ImageMapper, { MapAreas } from "react-img-mapper";
import MapImage from "@/public/floormap.png";
import { Amenity, Desk } from "@prisma/client";
import { DeskForm } from "./deskForm";
import { useResize } from "@/hooks/resize";

export const DeskEditor = ({
  desks,
  amenities,
}: {
  desks: Desk[];
  amenities: Amenity[];
}) => {
  const parentWidth = useResize();

  const [selectedDesk, setSelectedDesk] = useState<Desk | null>(null);

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
    <div className="flex justify-center items-center  ">
      <div className="container flex justify-center items-center  w-full h-full">
        <ImageMapper
          src={MapImage.src}
          parentWidth={parentWidth}
          responsive={true}
          onImageClick={(e) => {
            setSelectedDesk(null);
          }}
          onClick={(e) => {
            const clickedDesk = desks.find((desk) => desk.id === e.id);
            if (clickedDesk) {
              setSelectedDesk(clickedDesk);
            }
          }}
          map={{ name: "map", areas: areas }}
        />
      </div>
      <div className="bg-blue-200">
        {selectedDesk && <DeskForm desk={selectedDesk} amenities={amenities} />}
      </div>
    </div>
  );
};
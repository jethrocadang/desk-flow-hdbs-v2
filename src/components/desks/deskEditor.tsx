"use client";

import React, { useState } from "react";
import ImageMapper, { MapAreas } from "react-img-mapper";
import MapImage from "@/public/floormap.png";
import { Amenity, Desk } from "@prisma/client";
import { DeskForm } from "./deskForm";
import { useResize } from "@/hooks/resize";

interface Props {
  desks: Desk[];
  amenities: Amenity[];
}

export const DeskEditor = ({ desks, amenities }: Props) => {
  const parentWidth = useResize();

  const [selectedDesk, setSelectedDesk] = useState<Desk | null>(null);

  const areas: MapAreas[] = [];

  desks.forEach((item, index) => {
    areas[index] = {
      id: item.id,
      shape: "rect",
      coords: item.coords,
      preFillColor:
        selectedDesk && selectedDesk.id === item.id
          ? "rgba(234, 181, 77, 0.5)"
          : "rgba(234, 181, 77, 0.3)", // Change color if selected
      strokeColor: "gray",
    };
  });

  return (
    <div className="container my-auto ">
      <div className=" flex justify-center items-center  ">
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
          {selectedDesk && (
            <DeskForm
              desk={selectedDesk}
              amenities={amenities}
              onCancel={(e) => {
                setSelectedDesk(null);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

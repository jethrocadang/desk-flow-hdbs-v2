"use client";

import React, { useState, useEffect } from "react";
import ImageMapper, { AreaEvent, MapAreas } from "react-img-mapper";
import MapImage from "@/public/floormap.png";
import { Desk } from "@prisma/client";

import { useResize } from "@/hooks/resize";
import useDesk from "@/hooks/useDesk";

interface Props {
  desks: Desk[];
  onMouseEnter?: (e: any) => void;
  onMouseLeave?: () => void;
  onDeskSelect?: (e: any) => void;
  onImageClick?: (e: any) => void;
  selectedDesk?: Desk;
}

export const Map: React.FC<Props> = ({
  desks,
  onDeskSelect,
  onMouseEnter,
  onMouseLeave,
  onImageClick,
  selectedDesk,
}) => {
  const parentWidth = useResize();

  const areas: MapAreas[] = [];

  desks.forEach((item, index) => {
    areas[index] = {
      id: item.id,
      shape: "rect",
      coords: item.coords,
      preFillColor:
        selectedDesk && selectedDesk.id === item.id
          ? "rgba(234, 181, 77, 0.6)"
          : "rgba(234, 181, 77, 0.3)", // Change color if the desk is selected
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
          onImageClick={onImageClick}
          onClick={onDeskSelect}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          map={{ name: "map", areas: areas }}
        />
      </div>
    </div>
  );
};

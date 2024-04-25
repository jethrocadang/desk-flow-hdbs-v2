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
}

export const Map: React.FC<Props> = ({
  desks,
  onDeskSelect,
  onMouseEnter,
  onMouseLeave,
}) => {
  const parentWidth = useResize();
  const { selectDesk, selectedDesk, deselectDesk } = useDesk();

  useEffect(() => {
    if (typeof onDeskSelect === 'function') {
        onDeskSelect(selectedDesk);
      }  }, [selectedDesk, onDeskSelect]);

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
            deselectDesk(null);
          }}
          onClick={(e) => {
            const clickedDesk = desks.find((desk) => desk.id === e.id);
            if (clickedDesk) {
              selectDesk(clickedDesk);
            }
          }}
          map={{ name: "map", areas: areas }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>
    </div>
  );
};

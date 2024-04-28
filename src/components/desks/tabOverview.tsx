"use client";

import { Map } from "./map.";
import { Amenity, Desk } from "@prisma/client";
import { useState } from "react";
import useDesk from "@/hooks/useDesk";
import { DeskInfoCard } from "./deskInfo";
import { Calendar } from "../ui/calendar";

export const Overview = ({
  desks,
  amenities,
}: {
  desks: Desk[];
  amenities: Amenity[];
}) => {
  const [isMouseOnMap, setIsMouseOnMap] = useState(false);
  const { selectDesk, selectedDesk } = useDesk();

  const handleMouseEnter = (e: any) => {
    setIsMouseOnMap(true);
    const clickedDesk = desks.find((desk) => desk.id === e.id);
    if (clickedDesk) {
      selectDesk(clickedDesk);
    }
  };

  console.log("Mouse Entered: ", isMouseOnMap);

  const handleMouseLeave = () => {
    setIsMouseOnMap(false);
    selectDesk(null);
  };

  const handleDeskSelect = (e: any) => {
    const clickedDesk = desks.find((desk) => desk.id === e.id);
    if (clickedDesk) {
      selectDesk(clickedDesk);
    }
  };

  return (
    <div className="h-full p-5">
      <div className="  flex lg:flex-row flex-col">
        <div className="container flex bg-pink-400">
          <Map
            desks={desks}
            onDeskSelect={handleDeskSelect}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          />
          {selectedDesk && (
            <DeskInfoCard desk={selectedDesk} amenities={amenities} />
          )}
        </div>
      </div>
    </div>
  );
};

"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Map } from "./map.";
import { Amenity, Desk } from "@prisma/client";
import { useState } from "react";
import useDesk from "@/hooks/useDesk";
import { DeskInfoCard } from "./deskInfo";

export const Overview = ({ desks, amenities }: { desks: Desk[], amenities: Amenity[] }) => {
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

  return (
    <div className="h-full p-5">
      <div className="  flex lg:flex-row flex-col">
        <div className="container flex">
          <Map
            desks={desks}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {isMouseOnMap && selectedDesk && <DeskInfoCard desk={selectedDesk}  amenities={amenities}/>}
        </div>
      </div>
    </div>
  );
};

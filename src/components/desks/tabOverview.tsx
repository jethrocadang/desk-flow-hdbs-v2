"use client";

import { Map } from "./map.";
import { Amenity, Desk } from "@prisma/client";
import { useState } from "react";
import useDesk from "@/hooks/useDesk";
import { DeskInfoCard } from "./deskInfo";

export const Overview = ({
  desks,
  amenities,
}: {
  desks: Desk[];
  amenities: Amenity[];
}) => {
  const { selectDesk, selectedDesk } = useDesk();

  const handleDeskSelect = (e: any) => {
    const clickedDesk = desks.find((desk) => desk.id === e.id);
    if (clickedDesk) {
      selectDesk(clickedDesk);
    }
  };

  return (
    <div className="h-full p-5 dark:bg-slate-900">
      <div className="  flex lg:flex-row flex-col">
        <div className="container flex">
          <Map
            desks={desks}
            onDeskSelect={handleDeskSelect}
          />
          {selectedDesk && (
            <DeskInfoCard desk={selectedDesk} amenities={amenities} />
          )}
        </div>
      </div>
    </div>
  );
};

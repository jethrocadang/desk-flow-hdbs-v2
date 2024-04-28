"use client";

import { Map } from "./map.";
import { Amenity, Desk } from "@prisma/client";
import { useState } from "react";
import useDesk from "@/hooks/useDesk";
import { DeskInfoCard } from "./deskInfo";
import { BookingForm } from "./bookingForm";

export const Booking = ({
  desks,
  amenities,
}: {
  desks: Desk[];
  amenities: Amenity[];
}) => {
  const { selectDesk, selectedDesk, deselectDesk } = useDesk();

  const handleDeskSelect = (e: any) => {
    const clickedDesk = desks.find((desk) => desk.id === e.id);
    if (clickedDesk) {
      selectDesk(clickedDesk);
    }
  };

  const handleImageClick = () => {
    selectDesk(null);
  };

  return (
    <div className="h-full p-5">
      <div className="  flex lg:flex-row flex-col">
        <div className="container flex">
          <Map
            desks={desks}
            onDeskSelect={handleDeskSelect}
            onImageClick={handleImageClick}
            selectedDesk={selectedDesk}
          />
          {selectedDesk && (
            <BookingForm
              desk={selectedDesk}
              amenities={amenities}
              onCancel={(e) => {
                selectDesk(null);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

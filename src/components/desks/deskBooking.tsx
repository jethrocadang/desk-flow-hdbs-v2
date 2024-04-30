"use client";

import { Map } from "./map.";
import type { Amenity, Booking, Desk } from "@prisma/client";
import useDesk from "@/hooks/useDesk";
import { BookingForm } from "./bookingForm";
import { UserBookingCard } from "./userBookingCard";

interface Props {
  desks: Desk[];
  amenities: Amenity[];
  bookings: Booking[];
};

export const BookingTab = ({ desks, amenities, bookings }: Props) => {
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
        <div className="container flex flex-col md:flex-row">
          <Map
            desks={desks}
            onDeskSelect={handleDeskSelect}
            onImageClick={handleImageClick}
            selectedDesk={selectedDesk}
          />
          {selectedDesk ? (
            <BookingForm
              desk={selectedDesk}
              amenities={amenities}
              bookings={bookings}
              onCancel={(e) => {
                selectDesk(null);
              }}
            />
          ):(
           <UserBookingCard desks={desks} bookings={bookings}/>
          )}
        </div>
      </div>
    </div>
  );
};

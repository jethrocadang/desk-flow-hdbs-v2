import Map from "@/public/floormap.png";

import React from 'react';
import { ImageMapper, Area } from 'react-image-mapper';

interface Desk {
  id: number;
  x: number;
  y: number;
  name: string;
  description: string;
  amenities: string;
  department: string;
}

interface DeskMapProps {
  desks: Desk[];
  onDeskClick: (desk: Desk) => void;
  onDeskHover: (desk: Desk, isHovered: boolean) => void;
}

const DeskMap: React.FC<DeskMapProps> = ({ desks, onDeskClick, onDeskHover }) => {
  // Define areas for each desk
  const areas: Area[] = desks.map((desk) => ({
    name: desk.id.toString(),
    shape: 'circle', // or any other shape supported by react-image-mapper
    coords: [desk.x, desk.y, 10], // x, y, and radius of the circle
    fillColor: 'rgba(0, 255, 0, 0.5)', // fill color of the clickable area
    onMouseEnter: () => onDeskHover(desk, true), // Event handler for mouse enter
    onMouseLeave: () => onDeskHover(desk, false), // Event handler for mouse leave
    // You can add more properties here if needed
  }));

  // Event handler for desk click
  const handleDeskClick = (area: Area) => {
    // Find the clicked desk based on its ID
    const clickedDesk = desks.find((desk) => desk.id.toString() === area.name);
    // Call the callback function with the clicked desk
    if (clickedDesk) {
      onDeskClick(clickedDesk);
    }
  };

  return (
    <ImageMapper
      src="/path/to/your/image.jpg"
      map={{
        name: 'desksMap',
        areas: areas,
      }}
      width={800} // Set the width of the image
      imgWidth={800} // Set the original width of the image
      onClick={handleDeskClick} // Event handler for click events on areas
      responsive // Make the map responsive
    />
  );
};

export default DeskMap;

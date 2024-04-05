import { useState } from "react";
import Draggable from "react-draggable";
import { GiDesk } from "react-icons/gi";
import Image from "next/image";
import { Button } from "../shadcn/button";

interface DeskPosition {
  id: number;
  x: number;
  y: number;
}

interface AddDeskProps {
  floorImageUrl: string;
}

export default function AddDesk({ floorImageUrl }: any) {
  const [deskPositions, setDeskPositions] = useState<DeskPosition[]>([]);

  const handleStop = (id: number, e: any, data: any) => {
    const updatedPositions = deskPositions.map((desk) =>
      desk.id === id ? { ...desk, x: data.x, y: data.y } : desk
    );
    setDeskPositions(updatedPositions);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newDesk = { id: Date.now(), x, y };
    setDeskPositions([...deskPositions, newDesk]);
  };

  return (
    <div className="relative">
      <Button>Create Desk</Button>
      <Image
        src={floorImageUrl}
        alt="Floor Plan"
        height={1000}
        width={1000}
        className="rounded-lg"
        onClick={handleImageClick}
      />
      {deskPositions.map((desk) => (
        <Draggable
          key={desk.id}
          onStop={(e, data) => handleStop(desk.id, e, data)}
          defaultPosition={{ x: desk.x, y: desk.y }}
          bounds="parent"
        >
          <div
            className="absolute w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
          >
            <GiDesk className="text-white" />
          </div>
        </Draggable>
      ))}
    </div>
  );
}

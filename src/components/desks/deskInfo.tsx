"use client";

import { Desk, Amenity } from "@prisma/client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { getAllDesks, getDeskById } from "@/data/desk";

export const DeskInfoCard = ({
  desk,
  amenities,
}: {
  desk: Desk;
  amenities: Amenity[];
}) => {
  const data = amenities.filter((amenity) => amenity.deskId === desk.id);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{desk.deskName}</CardTitle>
        <CardDescription>{desk.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>Desk Amenities</p>
        <ul>
          {data.map((amenity) => (
            <li key={amenity.id}>{amenity.amenityName}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

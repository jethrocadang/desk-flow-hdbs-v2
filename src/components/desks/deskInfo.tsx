"use client";

import { Desk, Amenity } from "@prisma/client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Badge } from "../ui/badge";

export const DeskInfoCard = ({
  desk,
  amenities,
}: {
  desk: Desk;
  amenities: Amenity[];
}) => {
  // const data = amenities.filter((amenity) => amenity.deskId === desk.id);
  return (
    <Card className="w-full my-auto px-5">
      <CardHeader className="px-0">
        <CardTitle>{desk.deskName}</CardTitle>
        <CardDescription>{desk.description}</CardDescription>
      </CardHeader>
      <CardContent
        className={`${
          desk.status === "AVAILABLE" ? "bg-green-300" : "bg-red-300"
        } p-5 py-3 text-center rounded`}
      >
        <p className="my-auto font-semibold tracking-widest text-sm">

        {desk.status}
        </p>
      </CardContent>

      <CardContent className="px-0 pt-5">
        <h1 className="font-semibold mb-4">Desk Ammenities</h1>
        <ul>
          {/* {data.map((amenity) => (
            <Badge key={amenity.id}>
              <li key={amenity.id}>{amenity.amenityName}</li>
            </Badge>
          ))} */}
        </ul>
      </CardContent>
    </Card>
  );
};

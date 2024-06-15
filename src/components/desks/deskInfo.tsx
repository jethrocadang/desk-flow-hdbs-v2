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
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";

type Props = {
  desk: Desk;
  amenities: Amenity[];
  calendar?: "hidden" | undefined;
  className?: string;
};

export const DeskInfoCard = ({
  desk,
  amenities,
  calendar,
  className,
}: Props) => {
  const data = amenities.filter((amenity) =>
    desk.amentyIDs.includes(amenity.id)
  );

  return (
    <Card className={cn("w-full my-auto px-5", className)}>
      <CardHeader className=" px-3">
        <CardTitle>{desk.deskName}</CardTitle>
        <CardDescription>{desk.description}</CardDescription>
      </CardHeader>
      {/* <CardContent
        className={`${
          desk.status === "AVAILABLE" ? "bg-green-300" : "bg-red-300"
        } p-5 py-3 text-center rounded`}
      >
        <p className="my-auto font-semibold tracking-widest text-sm">

        {desk.status}
        </p>
      </CardContent> */}

      <CardContent className=" px-3 ">
        <h1 className="font-semibold mb-4">Desk Ammenities</h1>
        <ul>
          {data.map((amenity) => (
            <Badge key={amenity.id}>
              <li key={amenity.id}>{amenity.amenityName}</li>
            </Badge>
          ))}
        </ul>
      </CardContent>
      {calendar !== "hidden" && <Calendar />}
    </Card>
  );
};

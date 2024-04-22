"use client";

import Image from "next/image";
import Map from "@/public/floormap.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DeskForm } from "./deskForm";
import { DepartmentForm } from "./departmentForm";
import { AmenitiesForm } from "./amenitiesForm";
import { AddFloorButton } from "./addFloorButton";
import { UploadDropzone, UploadButton } from "@/utils/uploadthing";
import "@uploadthing/react/styles.css";
import { Floor, User, Desk, Amenity } from "@prisma/client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Layers3 } from "lucide-react";
import { floorSchema } from "@/schemas/floorSchema";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { DeskEditor } from "./editDesk";
import { addImage } from "@/actions/floor/floor";

export const Editor = ({
  users,
  floors,
  desks,
  amenities,
}: {
  users: User[];
  floors: Floor[];
  desks: Desk[];
  amenities: Amenity[];
}) => {
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);

  const form = useForm<z.infer<typeof floorSchema>>({
    resolver: zodResolver(floorSchema),
    defaultValues: {
      floorName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof floorSchema>) => {
    console.log(values);
  };

  const handleFloorSelect = (value: string) => {
    const selected = floors.find((floor) => floor.id === value);
    setSelectedFloor(selected || null);
  };
  return (
    <div className="container p-0">
      <div className=" w-full">Top</div>
      <DeskEditor desks={desks} amenities={amenities} />
      
    </div>
  );
};

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
import { Floor, User } from "@prisma/client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Layers3 } from "lucide-react";
import { floorSchema } from "@/schemas/floorSchema";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export const Editor = ({
  users,
  floors,
}: {
  users: User[];
  floors: Floor[];
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
    <div className="h-full p-5">
      <div className=" w-full h-full  flex flex-col">
        <div className=" flex p-2 gap-5">
          <Select onValueChange={(value) => handleFloorSelect(value)}>
            <SelectTrigger className="w-[180px] border border-black">
              <SelectValue placeholder="Choose Floor" />
            </SelectTrigger>
            <SelectContent>
              {floors.map((floor) => (
                <SelectItem key={floor.id} value={floor.id}>
                  {floor.floorName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <AddFloorButton users={users} />
        </div>
        <div className=" w-full h-full  flex lg:flex-row flex-col">
          <div className="flex items-end justify-center h-full">
            <div>
              {selectedFloor ? (
                selectedFloor.imageUrl ? (
                  <Image
                    src={selectedFloor.imageUrl}
                    width={1000}
                    alt="Floor Map"
                    className="rounded-lg"
                  />
                ) : (
                  <UploadDropzone
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      console.log("Files: ", res);
                      alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                    appearance={{
                      button({ ready, isUploading }) {
                        return `bg-purple-btn ${
                          ready
                            ? "custom-button-ready"
                            : "custom-button-not-ready"
                        } ${isUploading ? "custom-button-uploading" : ""}`;
                      },
                      container: "custom-container",
                      allowedContent: "custom-allowed-content",
                      label: "text-purple"
                    }}
                  />
                )
              ) : (
                <p>Please Select a Floor</p>
              )}
            </div>
          </div>
          <div className="h-full flex flex-col grow p-5 justify-center"></div>
        </div>
      </div>
    </div>
  );
};

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
import { User } from "@prisma/client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Layers3 } from "lucide-react";
import { floorSchema } from "@/schemas/floorSchema";
import { Button } from "@/components/ui/button";

export const Editor = ({ users }: { users: User[] }) => {
  const form = useForm<z.infer<typeof floorSchema>>({
    resolver: zodResolver(floorSchema),
    defaultValues: {
      floorName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof floorSchema>) => {
    console.log("workingasdasda");
    console.log(values);
  };
  return (
    <div className="h-full p-5">
      <div className=" w-full h-full  flex flex-col">
        <div className=" flex p-2 gap-5">
          {/* <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose Floor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Floor 1</SelectItem>
              <SelectItem value="dark">Floor 2</SelectItem>
              <SelectItem value="system">Floor 3</SelectItem>
            </SelectContent>
          </Select> */}
          <AddFloorButton users={users} />
        </div>
        <div className=" w-full h-full  flex lg:flex-row flex-col">
          <div className="flex items-end justify-center h-full">
            {/* <div className=" ">
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
                  button:
                    "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-purple-btn bg-none after:bg-orange-400",
                  allowedContent:
                    "flex h-8 flex-col items-center justify-center px-2 text-purple-btn",
                  label: "text-purple-btn ",
                }}
              />
            </div> */}
            <Image
              src={Map}
              width={1000}
              alt="Floor Map"
              className="rounded-lg hidden"
            />
          </div>
          <div className="h-full flex flex-col grow p-5 justify-center"></div>
        </div>
      </div>
    </div>
  );
};

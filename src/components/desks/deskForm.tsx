"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "../ui/badge";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

import { Amenity, Desk } from "@prisma/client";
import { deskSchema } from "@/schemas/deskSchema";
import { updateDesk } from "@/actions/desk/desk";

export const DeskForm = ({
  desk,
  amenities,
}: {
  desk: Desk;
  amenities: Amenity[];
}) => {

  
  const Amenity: Option[] = amenities.map(
    (amenity): Option => ({
      value: amenity.id,
      label: amenity.amenityName,
    })
  );

 
  const form = useForm<z.infer<typeof deskSchema>>({
    resolver: zodResolver(deskSchema),
    defaultValues: {
      ...(desk.id && {deskId: desk.id}),
      deskName: "",
      ...(desk.status && {status: desk.status}),
      description: "",
      amenities: [],
    },
  });


  function onSubmit(values: z.infer<typeof deskSchema>) {
    updateDesk(values)
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 p-7 bg-white border border-black rounded-md "
      >
        <div>
          <h1 className="text-xl  font-bold tracking-wide">Desk Editor</h1>
        </div>
        <FormField
          control={form.control}
          name="deskId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input value={desk.id} {...field} type="hidden" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/**Desk Name */}
        <FormField
          control={form.control}
          name="deskName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desk Name</FormLabel>
              <FormControl>
                <Input placeholder={desk.deskName} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/**Desk Name */}

        {/**Availabilty */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <RadioGroup
              defaultValue={desk.status}
              onValueChange={field.onChange}
            >
              <div className=" flex justify-between px-7">
                <Badge variant="secondary" className="bg-green-400 hover:bg-green-400/80">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="AVAILABLE" id="Available"/>
                    <Label>Available</Label>
                  </div>
                </Badge>
                <Badge variant="secondary" className="bg-red-400 hover:bg-red-400/80">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="UNAVAILABLE" id="Unavailable" />
                    <Label>Unavailable</Label>
                  </div>
                </Badge>
              </div>
            </RadioGroup>
          )}
        />
        {/**Availabilty */}

        {/**Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Description</Label>
              <Textarea
                placeholder={desk.description || "Desk Description"}
                {...field}
              />
            </div>
          )}
        />
        {/**Description */}

        {/**Ammenities */}
        <FormField
          control={form.control}
          name="amenities"
          render={({ field }) => (
            <div className="grid w-full gap-1.5">
              <Label>Ammenities</Label>
              <MultipleSelector
                className="bg-white"
                value={field.value}
                onChange={field.onChange}
                defaultOptions={Amenity}
                selectFirstItem={false}
                placeholder="Add Amenities..."
                emptyIndicator={
                  <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                    no results found.
                  </p>
                }
              />
            </div>
          )}
        />
        {/**Ammenities */}

        <div className="flex justify-center space-x-5">
          <Button className="w-[90px]" type="submit">
            Save
          </Button>
          <Button variant="destructive" className="w-[90px]">
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

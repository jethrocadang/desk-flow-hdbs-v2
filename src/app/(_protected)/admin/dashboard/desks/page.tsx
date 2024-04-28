import { DeskEditor } from "@/components/desks/deskEditor";
import { Overview } from "@/components/desks/tabOverview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllAmenities } from "@/data/amenity";
import { getAllBookings } from "@/data/booking";
import { getAllDesks } from "@/data/desk";

export default async function DesksPage() {
  const amenities = await getAllAmenities();
  const desks = await getAllDesks();
  const bookings = await getAllBookings();


  return (
    <div className=" p-5 h-full">
      <Tabs defaultValue="Overview" className="w-full h-full  ">
        <TabsList className="">
          <TabsTrigger value="Overview">Desk Overview</TabsTrigger>
          <TabsTrigger value="Editor">Desk Editor </TabsTrigger>
        </TabsList>
        <TabsContent value="Overview">
          <Overview desks={desks} amenities={amenities} />
        </TabsContent>
        <TabsContent value="Editor" className="flex">
          <DeskEditor desks={desks} amenities={amenities} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

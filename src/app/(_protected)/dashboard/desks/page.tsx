import { DeskEditor } from "@/components/desks/deskEditor";
import { Overview } from "@/components/desks/tabOverview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllAmenities } from "@/data/amenity";
import { getAllDesks } from "@/data/desk";
import { Suspense } from "react";
import Loading from "./loading";
import { BookingTab } from "@/components/desks/deskBooking";
import { getAllBookings } from "@/data/booking";
import { currentRole } from "@/lib/auth";

export default async function DesksPage() {
  const bookings = await getAllBookings();
  const amenities = await getAllAmenities();
  const desks = await getAllDesks();
  const { ADMIN, FLOOR_MANAGER, USER } = await currentRole();

  return (
    <>
      {(ADMIN || FLOOR_MANAGER) && (
        <div className=" p-5 h-full pl-24 mt-16">
          <Suspense fallback={<Loading />}>
            <Tabs defaultValue="Overview" className="w-full h-full  ">
              <TabsList className="">
                <TabsTrigger value="Overview" className="dark:text-white dark:bg-slate-900">Desk Overview</TabsTrigger>
                <TabsTrigger value="Editor" className="dark:text-white dark:bg-slate-700">Desk Editor </TabsTrigger>
              </TabsList>
              <TabsContent value="Overview" className="flex">
                <Overview desks={desks} amenities={amenities} />
              </TabsContent>
              <TabsContent value="Editor" className="flex ">
                <DeskEditor desks={desks} amenities={amenities} />
              </TabsContent>
            </Tabs>
          </Suspense>
        </div>
      )}
      {USER && (
        <div className=" p-5 h-full pl-24 mt-16">
          <Suspense fallback={<Loading />}>
            <Tabs defaultValue="Overview" className="w-full h-full   ">
              <TabsList className=" dark:bg-slate-900">
                <TabsTrigger value="Overview" className="dark:text-white dark:bg-slate-900">Desk Overview</TabsTrigger>
                <TabsTrigger value="Bookings" className="dark:text-white dark:bg-slate-700">Desk Bookings </TabsTrigger>
              </TabsList>
              <TabsContent value="Overview">
                <Overview desks={desks} amenities={amenities} />
              </TabsContent>
              <TabsContent value="Bookings" className="flex ">
                <BookingTab
                  desks={desks}
                  amenities={amenities}
                  bookings={bookings}
                />
              </TabsContent>
            </Tabs>
          </Suspense>
        </div>
      )}
    </>
  );
}

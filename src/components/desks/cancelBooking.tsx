"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { cancelBooking } from "@/actions/bookings/booking";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

export const CancelBooking = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleCancel = () => {
    cancelBooking(id).then((data) => {
      if (data.success) {
        toast({
          title: "Success!",
          description: "Booking Cancelled!",
        });
      }
      router.refresh();
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full text-xs h-8 bg-red-200 dark:bg-slate-600 text-black tracking-wide hover:bg-red-300 dark:text-white dark:hover:bg-slate-900">
          Cancel Booking
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure, You want to cancel?</DialogTitle>
          <DialogDescription>
            By ticking YES, your Booking will be Cancelled
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2"></div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="bg-amber-300"
              onClick={handleCancel}
            >
              YES
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

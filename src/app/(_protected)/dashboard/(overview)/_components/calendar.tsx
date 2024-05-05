import { Calendar } from "@/components/ui/calendar";

export const DashCalendar = () => {
  return (
    <div className=" flex items-center justify-center self-center">
      <Calendar
        classNames={{
          months: " space-y-6 sm:space-x-6 ",
          month: "space-y-0",
          caption: "flex justify-center pt-2 relative items-center bg-red-300 py-5",
          caption_label: "text-base font-medium",
          nav: "space-x-2 flex items-center",
          nav_button: "h-9 w-9 bg-transparent p-0 opacity-50 hover:opacity-100",
          nav_button_previous: "absolute left-2",
          nav_button_next: "absolute right-2",
          head_cell:
            "text-muted-foreground w-24 font-normal text-[0.9rem] bg-red-300",
          cell: "h-24 w-24 text-left text-sm border border-input p-1 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: "h-12 w-12 p-0 font-normal aria-selected:opacity-100",
        }}
      />
    </div>
  );
};

import { bookingDataTable } from "@/data/booking";
import { columns } from "./_components/column";
import { DataTable } from "./_components/data-table";

export default async function BookingsPage(){

    const bookings = await bookingDataTable();

    return(
        <div className=" px-32 pt-32">
            <DataTable columns={columns} data={bookings}/>
        </div>
    )
}
import { UserBookingCard } from "@/components/desks/userBookingCard"
import { Booking, Desk } from "@prisma/client";


type Props = {
    desks: Desk[];
    bookings: Booking[];
}

export const History = ({desks, bookings}: Props) =>{
    return (
        <div>
            <UserBookingCard desks={desks} bookings={bookings}/>
        </div>
    )
}
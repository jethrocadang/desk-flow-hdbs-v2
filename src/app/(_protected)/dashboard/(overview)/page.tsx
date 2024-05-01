"use server";

import { getAllDesks, getDeskCount } from "@/data/desk";
import { getBookingsCount } from "@/data/booking";
import { getUserCount } from "@/data/user";
import { currentUser } from "@/lib/auth";
import Main from "./_components/main";
import { BookingsCard, DesksCard, UserCards } from "./_components/cards";

export default async function Page() {
  const { desks, available, unavailable } = await getDeskCount();
  const { user, admin, allUsers, FM } = await getUserCount();
  const { allBookings, confirmed, pending, cancelled } = await getBookingsCount();

  console.log(desks);
  console.log(allBookings, confirmed, pending, cancelled);
  console.log(user, admin, allUsers, FM);

  const data = await currentUser();

  return (
    <Main>
      <UserCards allUsers={allUsers} user={user} admin={admin} FM={FM} />
      <BookingsCard allBookings={allBookings} confirmed={confirmed} pending={pending} cancelled={cancelled}/>
      <DesksCard desks={desks} available={available} unavailable={unavailable}/>
    </Main>
  );
}

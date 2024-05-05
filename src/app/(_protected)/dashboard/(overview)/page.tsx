"use server";

import { getAllDesks, getDeskCount } from "@/data/desk";
import { getBookingsCount } from "@/data/booking";
import { getUserCount } from "@/data/user";
import { currentRole, currentUser } from "@/lib/auth";
import Main from "./_components/main";
import { BookingsCard, DesksCard, UserCards } from "./_components/cards";
import { DashCalendar } from "./_components/calendar";

export default async function Dashboard() {
  const { desks, available, unavailable } = await getDeskCount();
  const { user, admin, allUsers, FM } = await getUserCount();
  const { allBookings, confirmed, pending, cancelled } =
    await getBookingsCount();

  const { ADMIN, FLOOR_MANAGER, USER} = await currentRole();

  return (
    <>
      {(ADMIN || FLOOR_MANAGER) && (
        <Main>
          {ADMIN && (
            <UserCards allUsers={allUsers} user={user} admin={admin} FM={FM} />
          )}
          <BookingsCard
            allBookings={allBookings}
            confirmed={confirmed}
            pending={pending}
            cancelled={cancelled}
          />
          <DesksCard
            desks={desks}
            available={available}
            unavailable={unavailable}
          />
        </Main>
      )}
      {USER && (
        <Main>
          <BookingsCard
            allBookings={allBookings}
            confirmed={confirmed}
            pending={pending}
            cancelled={cancelled}
          />
          <DashCalendar/>
        </Main>
      )}
    </>
  );
}

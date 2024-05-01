"use client"

import { useCurrentUser } from "@/hooks/useCurrentUser"
import Cards from "./cards"


export default function UserDashboard () {
    const user = useCurrentUser()

    return (
        <div className="h-full">
            <div className="h-full p-5 rounded-md">
                <h1 className="font-bold text-4xl tracking-widest text-[#2B3674]">Hello, {user?.firstName}!</h1>
                <p className="text-xl text-[#3F4AA8] ">What can I do for you today?</p>
                {/* cards(user/dashboard/_components/cards.tsx) */}
                <Cards />
            </div>
        </div>
    )
}
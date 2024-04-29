"use client"

import { useCurrentUser } from "@/hooks/useCurrentUser"


export default function UserDashboard () {
    const user = useCurrentUser()

    return (
        <div className="h-full p-5">
            <div className="bg-purple-bg h-full p-5 rounded-md">
                <h1 className="font-bold text-4xl tracking-widest">Hello, {user?.firstName}!</h1>
            </div>
        </div>
    )
}
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Profile from "@/components/profile/profile";
import EditProfile from "./edit";
import { User } from "@prisma/client";

export default function ProfileIndex({user}:{user: User} ) {
  const [edit, setEdit] = useState(false);

  const handleEditProfile = () => {
    setEdit(true);
  };

  return (
    <div className="container">
      {!edit ? (
        <>
          <Profile data={user}/>
          <div className="w-full px-16 flex justify-end">
            <Button onClick={handleEditProfile} className="text-white dark:text-white">Edit Profile</Button>
          </div>
        </>
      ) : (
        <> 
        <EditProfile data={user} onCancelEdit={(e) => {
          setEdit(false)
        }}/>
        </>
      )}
    </div>
  );
}

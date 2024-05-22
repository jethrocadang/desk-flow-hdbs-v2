import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { signIn } from "next-auth/react";
import { User } from "@prisma/client";

export default function editProfile({ data }: { data: User }) {
  const user = useCurrentUser();
  const [showPass, setShowPass] = useState(false);

  const isPasswordNull = data.password === null ? true : false;

  console.log(isPasswordNull)

  return (
    <div className="container pt-7">
      <div>
        <div className="w-full flex items-center justify-center">
          <div className=" w-40 h-40 border border-black bg-slate-500 rounded-full flex justify-center items-center">
            <Image
              src={user?.image}
              width={40}
              height={40}
              className=" w-full bg-cover bg-center rounded-full"
              alt=""
            />
          </div>
        </div>
        {/* form for */}
        <div className=" container py-8 px-10 flex flex-col gap-8">
          {/* last name & first Name */}
          <div className="flex flex-row gap-14">
            <div className="w-full flex flex-col">
              <label htmlFor="firstName" className=" text-base font-semibold">
                First Name
              </label>
              <input
                type="text"
                disabled
                name="firstName"
                value={user?.firstName}
                className="border bg-sky-50 border-violet-900 rounded-md w-full p-3"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="lastName" className=" text-base font-semibold">
                Last Name
              </label>
              <input
                type="text"
                disabled
                name="lastName"
                value={user?.lastName}
                className="border bg-sky-50 border-violet-900 rounded-md w-full p-3"
              />
            </div>
          </div>

          {/* email */}
          <div className="w-full flex flex-col">
            <label htmlFor="email" className=" text-base font-semibold">
              Email
            </label>
            <input
              type="email"
              disabled
              name="email"
              value={user?.email}
              className="border bg-sky-50 border-violet-900 rounded-md w-full p-3"
            />
          </div>

          {/* Password */}
          {}
          <div className={`w-full flex flex-col ${isPasswordNull ? "hidden" : ""}`}>
            <label htmlFor="Password" className=" text-base font-semibold">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={showPass ? "text" : "password"}
                disabled
                name="password"
                value="heelo143"
                className="border bg-sky-50 border-violet-900 rounded-md w-full p-4"
              />
              <div className="absolute right-0 top-4 pr-4 cursor-pointer">
                {showPass ? (
                  <FaEye
                    onClick={() => setShowPass(false)}
                    className="text-black text-2xl select-none"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setShowPass(true)}
                    className="text-black text-2xl select-none"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

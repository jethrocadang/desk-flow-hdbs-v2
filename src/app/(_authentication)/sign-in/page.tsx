import React from "react";
import Image from "next/image";
import bgImagaAuth from "@/public/img/authImage/bgAuthentication.png";
import hotDog from "@/public/img/authImage/hotdog.png";
import ImageAuth from "@/public/img/authImage/authimage.png";
import SignInForm from "@/components/auth/signinForm";
import frameSignup from "@/public/img/authImage/frameSignup.png";
import Link from "next/link";
import { GoogleButton } from "@/components/auth/googleButton";


export default function Page() {
  return (
    <div>
      <div className="max-md:relative h-screen w-full ">
        {/* background Image */}
        <Image
          src={frameSignup}
          className="max-md:hidden dark:hidden md:absolute md:right-0 md:top-0 md:z-0 w-72"
          height={400}
          alt=""
        />
        <Image
          src={hotDog}
          className="md:hidden absolute -z-0 bottom-0 left-0"
          alt=""
        />

        <div className=" max-md:mx-8 md:absolute md:top-0 md:h-full md:w-full z-10">
          <div className="md:absolute h-full w-full md:flex">
            {/* First half */}
            <div className=" w-full h-full md:w-1/2 pt-7 md:ml-5 md:flex md:items-start">
              <div className=" w-full md:mx-10 z-10">
                <div className="flex flex-col gap-5 mb-5">
                  <Link href="/">
                    <h2 className="text-2xl text-blue-700 font-bold ">
                      Desk<span className="text-blue-500">Flow</span>{" "}
                    </h2>
                  </Link>
                  <div className="md:hidden">
                    <hr className="border border-gray-200" />
                  </div>
                </div>
                {/* Header */}
                <div className="flex gap-5">
                  <div className="flex flex-col gap-5">
                    <h2 className="dark:text-white text-4xl text-blue-900 font-bold ">
                      Welcome back!
                    </h2>
                    <p className="text-xs text-slate-400 dark:text-slate-300">
                      If you are already a user, you can login with your email
                      and password.
                    </p>
                  </div>
                  <div className="md:hidden -mt-8">
                    {/* picture */}
                    <Image
                      src={ImageAuth}
                      alt="image-webDetails"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <GoogleButton/>
                </div>
                {/* devider */}
                <div className=" flex w-full justify-center mt-4">
                  <div className="w-1/3 pt-2.5">
                    <hr className="dark:text-slate-200 border border-gray-300" />
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <p className="dark:text-slate-200 text-slate-700 text-sm">
                      or Login with Email
                    </p>
                  </div>
                  <div className="w-1/3 pt-2.5 ">
                    <hr className="dark:text-slate-200 border border-gray-300" />
                  </div>
                </div>

                {/* inputs segments folder */}
                <div className="w-full flex flex-col">
                  {/* Segments Folder */}
                  <SignInForm/>
                </div>

                <div className="mt-5 flex justify-center">
                  <span className="text-black text-xs dark:text-slate-200">
                    Not registered yet?
                  </span>
                  <Link
                    href={"/sign-up"}
                    className="text-xs text-blue-900 hover:text-blue-500 font-semibold dark:text-sky-500"
                  >
                    Create an account
                  </Link>
                </div>
              </div>
            </div>

            {/* Second half */}
            <div className="hidden md:w-1/2 md:flex justify-center items-center ">
              <div className="">
                {/* picture */}
                <Image
                  src={ImageAuth}
                  alt="image-webDetails"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

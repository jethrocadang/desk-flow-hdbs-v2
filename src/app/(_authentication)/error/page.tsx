import React from "react";
import Image from "next/image";
import bgImagaAuth from "@/public/img/authImage/bgAuthentication.png";
import hotDog from "@/public/img/authImage/hotdog.png";
import ImageAuth from "@/public/img/authImage/authimage.png";
import SignInForm from "@/components/auth/signinForm";
import Link from "next/link";
import { GoogleButton } from "@/components/auth/googleButton";

export default function Page() {
  return (
    <div>
      <div className="max-md:relative bg-white h-screen w-full ">
        {/* background Image */}
        <Image
          src={bgImagaAuth}
          className="hidden md:flex md:h-screen md:w-full md:bg-cover md:bg-center md:relative"
          alt=""
        />
        <Image
          src={hotDog}
          className="md:hidden absolute -z-0 bottom-0 left-0"
          alt=""
        />

        <div className="max-md:mx-8 md:absolute md:top-0 md:h-full md:w-full z-10">
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
                <div className="flex gap-5 mt-14">
                  <div className="flex flex-col gap-5">
                    <h2 className="text-4xl text-blue-900 font-bold ">
                        Ooops! Something went Wrong!
                    </h2>
                    <p className="text-xs text-slate-400">
                      Please try again later, or contact your administrator.
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
                {/* devider */}
                <div className=" flex w-full justify-center mt-4">
                  <div className="w-1/3 pt-2.5">
                    <hr className=" border border-gray-300" />
                  </div>
                  <div className="w-1/3 pt-2.5 ">
                    <hr className=" border border-gray-300" />
                  </div>
                  <div className="w-1/3 pt-2.5 ">
                    <hr className=" border border-gray-300" />
                  </div>
                </div>

                {/* inputs segments folder */}
                <div className="w-full flex flex-col">
                  {/* Segments Folder */}
                </div>

                <div className="mt-5 flex justify-center">
                  <span className="text-black text-xs">
                    Go to &nbsp;
                  </span>
                  
                  <Link
                    href={"/"}
                    className="text-xs text-blue-900 hover:text-blue-500 font-semibold"
                  >
                    Home
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

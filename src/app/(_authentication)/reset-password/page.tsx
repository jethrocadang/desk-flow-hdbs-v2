import React from "react";
import Image from "next/image";
import frameSignup from "@/public/img/authImage/frameSignup.png";
import hotDog from "@/public/img/authImage/hotdog.png";
import ImageSignup from "@/public/img/authImage/imgSignup.png";
import ResetPasswordForm from "@/components/ui/segments/auth/resetPasswordForm";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <div className="md:relative bg-white w-full ">
        {/* background Image */}
        <Image
          src={frameSignup}
          className="max-md:hidden md:absolute md:right-0 md:top-0 md:z-0 w-96"
          height={900}
          alt=""
        />
        <Image
          src={hotDog}
          className="md:hidden absolute -z-0 bottom-0 left-0"
          alt=""
        />

        <div className="max-md:mx-8  md:h-full md:w-full z-10">
          <div className="md:flex md:flex-col gap-2">
            {/* Header */}
            <div className=" mt-6 md:mt-9 md:ml-16">
              <Link href="/">
                <h2 className="text-2xl text-blue-700 font-bold ">
                  Desk<span className="text-blue-500">Flow</span>{" "}
                </h2>
              </Link>
            </div>
            <div className="md:hidden mt-4">
              <hr className="border border-gray-200" />
            </div>
            <div className="h-full w-full md:flex">
              {/* First half */}
              <div className=" w-full h-full md:w-1/2 pt-5 md:ml-5 md:flex md:items-start">
                <div className=" w-full md:mx-10 z-10">
                  {/* Header */}
                  <div className="flex justify-between gap-5">
                    <div className="flex flex-col gap-5">
                      <h2 className="text-4xl text-blue-900 font-bold ">
                        Let&apos;s reset your password!
                      </h2>
                      <p className="text-xs text-slate-400">
                        Please enter your new password below to reset your
                        password.
                      </p>
                    </div>
                    <div className="md:hidden -mt-8">
                      {/* picture */}
                      <Image
                        src={ImageSignup}
                        alt="image-webDetails"
                        width={200}
                        height={250}
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
                  <br />

                  {/* inputs segments folder */}
                  <div className="mt-3 w-full flex flex-col">
                    {/* Segments Folder */}
                    <Suspense>
                      <ResetPasswordForm />
                    </Suspense>
                  </div>
                  <br />
                </div>
                <br />
              </div>

              {/* Second half */}
              <div className="hidden md:w-1/2 md:flex justify-center items-center z-50">
                <div className="">
                  {/* picture */}
                  <Image
                    src={ImageSignup}
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
    </div>
  );
}

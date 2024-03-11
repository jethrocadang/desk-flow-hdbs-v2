"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function TopNav() {
  // for burger Navigation
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      {/* nav container */}
      <nav className="w-full border-b-2 border-slate-400 bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO or NAME  */}
              <Link href="#">
                <h2 className="text-2xl text-blue-700 font-bold ">
                  Desk<span className="text-blue-500">Flow</span>{" "}
                </h2>
              </Link>
              {/* BURGERNAV FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border duration-300"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    // close nav
                    <div>
                      <IoClose className="text-2xl font-extrabold duration-300" />
                    </div>
                  ) : (
                    // open nav
                    <div>
                      <GiHamburgerMenu className="duration-300 text-2xl font-extrabold" />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* Sign in & Sign up button */}

            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                // checking if navburger is true or false
                navbar
                  ? "w-full md:p-0 flex justify-center duration-500 bg-transparent"
                  : "hidden"
              }`}
            >
              <div className="h-screen max-md:mx-5 md:pr-5 md:h-auto items-center justify-center md:flex w-full duration-300">
                <div className="md:pb-6 w-full text-base md:text-sm font-semibold pt-4 md:px-2 text-center md:hover:bg-transparent">
                  <div className="w-full h-14 md:w-28 md:h-9">
                    <Link href={"/signup"}>
                      <Button size="custom" variant="secondary">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="md:pb-6 w-full  text-base md:text-sm font-semibold py-4 md:px-2 text-center md:hover:bg-transparent">
                  <div className="w-full h-14 md:w-28 md:h-9">
                    <Link href={"/signin"}>
                      <Button size="custom" variant="primary">
                        Sign In
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

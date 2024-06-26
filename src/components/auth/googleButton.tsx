"use client";

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useState} from "react";
import Spinner from "../utils-ui/Spinner";

export function GoogleButton() {
   const [isActive, setIsActive] = useState(false);
    const onClick = (provider: "google") => {
        setIsActive(true)
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }
    
  return (
    <div>
      {/* Button for google */}
      <Button
        variant="outline"
        className="w-full h-12 drop-shadow l rounded-xl border border-slate-400"
        onClick={() => onClick("google")}
        disabled={isActive}
      >
        {isActive ? 
            <Spinner />
                  :
            <>
            <FcGoogle className="text-3xl " />
            &nbsp;&nbsp;Continue with Google
            </>
        }
      </Button>
    </div>
  );
}

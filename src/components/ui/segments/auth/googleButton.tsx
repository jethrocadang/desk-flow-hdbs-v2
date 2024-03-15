"use client";

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/shadcn/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export function GoogleButton() {
    const onClick = (provider: "google") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }
  return (
    <div>
      {/* Button for google */}
      <Button
        variant="outline"
        className="w-full h-12 drop-shadow l rounded-xl border border-slate-400"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="text-3xl " />
        &nbsp;&nbsp;Continue with Google
      </Button>
    </div>
  );
}

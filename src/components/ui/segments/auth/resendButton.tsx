"use client";

import { resendOtp } from "@/actions/authentication/resendOtp";
import { FormEvent, startTransition, useEffect, useState } from "react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/shadcn/alert";
import { AlertCircle } from "lucide-react";

export default function ResendButton({ id }: { id: string }) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMinutes(0);
    setSeconds(3);

    startTransition(() => {
      resendOtp(id).then((data) => {});
    });
  };

  const remainingTime = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Alert variant="destructive" className="mt-5">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {error && (
        <Alert variant="destructive" className="mt-5">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="text-black text-xs flex justify-center font-semibold">
        {minutes === 0 && seconds === 0 ? "Time's Up!" : remainingTime}
      </div>
      <div>
        <span className="text-black text-xs">Didn&apos;t get a code?</span>{" "}
        <button
          type="submit"
          className={`text-xs text-blue-900 hover:text-blue-500 font-semibold select-none ${
            seconds > 0 || minutes > 0
              ? "pointer-events-none"
              : "hover:text-blue-500"
          }`}
          disabled={seconds > 0 || minutes > 0}
        >
          Resend
        </button>
      </div>
    </form>
  );
}

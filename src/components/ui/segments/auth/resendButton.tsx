"use client";

import { resendOtp } from "@/actions/authentication/resendOtp";
import { FormEvent, startTransition, useEffect, useState } from "react";

import { Alert, AlertDescription } from "@/components/ui/shadcn/alert";
import { AlertCircle } from "lucide-react";

export default function ResendButton({ email }: { email: string }) {
  // Timer
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  // Erro Handling
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      // Minus one if the seconds is not 0
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      // If seconds turns to 0 minus 1 for minutes && if minutes is 0 set to 59 seconds
      if (seconds === 0) {
        if (minutes === 0) {
          // Stops countdown of minutes and seconds turns to zero
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval); // Stops interval whenever the component unmounts
    };
  }, [seconds]); // Re-run everytime seconds changes;

  //Submit button
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Reset Error handling
    setSuccess("");
    setError("");
    // Reset timer when clicked
    setMinutes(1);
    setSeconds(30);

    // Logics goes here: Go to actions
    startTransition(() => {
      resendOtp(email).then((data) => {
        setSuccess(data.success);
        setError(data.error);
      });
    });
  };

  // Combined minutes & seconds
  const remainingTime = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return (
    <form onSubmit={handleSubmit}>
     {/** Error UIs */}
      {error && (
        <Alert variant="destructive" className="mt-5">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert variant="success" className="mt-5">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      {/** CountDown */}
      <div className="text-black text-xs flex justify-center font-semibold">
        {minutes === 0 && seconds === 0 ? "Time's Up!" : remainingTime}
      </div>

      {/**Text && Button */}
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

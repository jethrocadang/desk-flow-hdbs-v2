"use client";

import React, {
  useRef,
  useState,
  useTransition,
  ChangeEvent,
  FormEvent,
} from "react";
import Button from "@/components/ui/toplevelComponents/Button";
import { verification } from "@/actions/authentication/verification";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/shadcn/use-toast";
import Spinner from "@/components/ui/toplevelComponents/Spinner";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/shadcn/alert";
import { AlertCircle } from "lucide-react";

const otpSchema = z
  .array(z.string().regex(/^\d$/, "OTP must be a number"))
  .length(6);

export default function OtpForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  // useRef for input elements
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (otp.some((value) => !value)) {
      setError("All fields are required.");
      return;
    }

    try {
      otpSchema.parse(otp);
    } catch (validationError) {
      setError("OTP must contain 6 numeric digits.");
      return;
    }

    startTransition(() => {
      const enteredOtp = otp.join("");
      verification(enteredOtp).then((data) => {
        if (data.success) {
          toast({
            title: "Email Verified!",
            description: "You can now Login",
          });
          router.push("/signin");
        } else {
          setError(data.error || "Verification failed. Please try again.");
        }
      });
    });
  };

  return (
    <div className="flex justify-center items-center max-md:z-40">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex space-x-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              ref={(input) =>
                (inputRefs.current[index] = input as HTMLInputElement)
              }
              maxLength={1}
              className="w-12 h-12 md:w-14 md:h-14 text-center text-2xl border bg-sky-50 border-violet-900 rounded focus:outline-none focus:border-blue-500 focus:bg-white focus:border-2 duration-200"
            />
          ))}
        </div>
        <div className="w-full flex justify-center">
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full md:w-72 h-12 text-sm">
            <Button
              variant="primary"
              size="custom"
              type="submit"
              disabled={isPending}
            >
              {isPending ? <Spinner /> : "Verify"}
            </Button>
          </div>
        </div>
        {error && (
            <Alert variant="destructive" className="mt-5">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
      </form>
    </div>
  );
}

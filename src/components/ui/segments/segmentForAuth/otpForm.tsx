"use client";

import { useRef, useState } from "react";
import Button from "../../toplevelComponents/Button";
import { verification } from "@/actions/authentication/verification";
import * as z from "zod";

const otpSchema = z.array(z.string().regex(/^\d$/, "OTP must be a number")).length(6);


export default function OtpForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef(
    Array(6)
      .fill(null)
      .map(() => useRef(null))
  );

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].current.focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1].current.focus();
    }
  };

  
  // Passing credential into server
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check for empty inputs
    // TODO Add toast for handling error
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

    const enteredOtp = otp.join("");



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
              ref={inputRefs.current[index]}
              maxLength={1}
              className="w-12 h-12 md:w-14 md:h-14 text-center text-2xl border bg-sky-50 border-violet-900 rounded focus:outline-none focus:border-blue-500 focus:bg-white focus:border-2 duration-200"
            />
          ))}
        </div>
        {/* error */}
        <div className="w-full flex justify-center">
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full md:w-72 h-12 text-sm">
            <Button
              variant="primary"
              size="custom"
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            >
              Verify
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

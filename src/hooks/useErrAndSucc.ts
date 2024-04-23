"use client";

import { useState } from "react";

const useErrAndSucc = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const clearError = () => {
    setError("");
  };

  const clearSuccess = () => {
    setSuccess("");
  };

  return {
    error,
    setError,
    clearError,
    success,
    setSuccess,
    clearSuccess,
  };
};

export default useErrAndSucc
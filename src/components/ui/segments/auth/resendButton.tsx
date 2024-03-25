"use client";

import { FormEvent } from "react";

export default function ResendButton({ id }: { id: string }) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="text-xs text-blue-900 hover:text-blue-500 font-semibold"
    >
      <button type="submit">Resend</button>
    </form>
  );
}

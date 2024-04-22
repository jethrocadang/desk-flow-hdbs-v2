"use client";

import { Desk } from "@prisma/client";
import { useState } from "react";

const useDesk = () => {
  const [selectedDesk, setSelectedDesk] = useState<Desk | null>(null);

  const selectDesk = (desk: Desk) => setSelectedDesk(desk);

  const deselectDesk = (desk: Desk) => setSelectedDesk(null);

  return {
    selectedDesk,
    selectDesk,
    deselectDesk,
  };
};

export default useDesk
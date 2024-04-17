import { useEffect, useState } from "react";

export const useResize = () => {
  const [parentWidth, setParentWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = document.querySelector(".container")?.clientWidth;
      if (containerWidth) {
        const scaled = containerWidth * 0.7;

        setParentWidth(scaled);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return parentWidth;
};


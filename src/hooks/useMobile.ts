"use client";

import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH = 768;
const checkIsMobile = (): boolean => window.innerWidth <= MOBILE_MAX_WIDTH;

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
};

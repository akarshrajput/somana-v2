"use client";
import { useEffect, useState } from "react";
import { Progress } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const ScrollProgress = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const pathname = usePathname(); // This hook gets the current URL path

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollValue(scrollPercent);
  };

  useEffect(() => {
    // Reset scroll progress when URL changes (when `pathname` changes)
    setScrollValue(0);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]); // Re-run effect when the pathname changes

  return (
    <Progress
      value={scrollValue}
      size="xs"
      colorScheme="red"
      position="fixed"
      width="100%"
      zIndex="1000"
    />
  );
};

export default ScrollProgress;

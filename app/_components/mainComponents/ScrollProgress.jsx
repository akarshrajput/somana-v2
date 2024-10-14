"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // Use next-themes for theme management
import { usePathname } from "next/navigation";

const ScrollProgress = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const { resolvedTheme } = useTheme(); // Detects if it's dark or light mode
  const pathname = usePathname();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollValue(scrollPercent);
  };

  useEffect(() => {
    setScrollValue(0); // Reset scroll progress when URL changes
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Styles for the progress bar
  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "3px",
    backgroundColor: resolvedTheme === "dark" ? "black" : "white", // Adjust background color
    zIndex: 1000,
  };

  const progressStyle = {
    height: "100%",
    width: `${scrollValue}%`,
    backgroundColor: resolvedTheme === "dark" ? "red" : "red", // Adjust progress color
    // transition: "width 0.25s ease-out", // Smooth transition
  };

  return (
    <div style={containerStyle}>
      <div style={progressStyle}></div>
    </div>
  );
};

export default ScrollProgress;

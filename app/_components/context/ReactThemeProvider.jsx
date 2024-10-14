"use client";

import { ThemeProvider } from "next-themes";

export function ReactThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

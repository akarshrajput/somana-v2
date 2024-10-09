"use client";
import Link from "next/link";
import ReturnHome from "./_components/buttons/ReturnHome";
import ReturnBack from "./_components/buttons/ReturnBack";
import { Warning } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center gap-2 mt-10">
      <Warning weight="bold" className="size-6" />
      <p>404 Not found</p>
      <p>{pathname}</p>
      <div className="flex items-center gap-2">
        <ReturnHome />
        <ReturnBack />
      </div>
    </div>
  );
}

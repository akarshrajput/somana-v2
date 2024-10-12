import React from "react";
import { SignOut } from "@phosphor-icons/react/dist/ssr";
import { signOutAction } from "@/app/_lib/actions";
import { Button } from "@chakra-ui/react";

const LogoutBtn = () => {
  return (
    <form action={signOutAction}>
      <button className="flex items-center gap-1 py-1 px-2 font-medium rounded-md bg-red-600 text-stone-50">
        <SignOut />
        Log Out
      </button>
    </form>
  );
};

export default LogoutBtn;

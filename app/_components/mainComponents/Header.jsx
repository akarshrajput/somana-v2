import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  ArrowUp,
  CaretDown,
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";
import Search from "./Search";
import LoginBtn from "../buttons/LoginBtn";
import { auth } from "@/app/_lib/auth";

const Header = async () => {
  const session = await auth();
  return (
    <div className="flex w-full items-center bg-stone-50 py-1 px-2">
      <Logo />

      <div className="ml-auto">
        <div className="flex items-center gap-2">
          <Search />
          {/* <Link
            href="/upload"
            className="font-semibold bg-yellow-400 rounded-md py-1 px-2 flex items-center gap-1"
          >
            Premium
            <Sparkle weight="fill" className="size-3" />
          </Link> */}
          <Link
            href="/upload"
            className="font-semibold bg-green-400 rounded-md py-1 px-2 flex items-center gap-1"
          >
            Upload
            <ArrowUp weight="bold" className="size-3" />
          </Link>
          <Menu>
            <MenuButton className="font-semibold bg-green-400 rounded-md py-1 px-2 flex items-center gap-1">
              <div className="flex items-center gap-2">
                Services
                <CaretDown weight="bold" className="size-3" />
              </div>
            </MenuButton>
            <MenuList className="font-medium">
              <MenuItem>College Notes</MenuItem>
              <MenuItem>Somana AI</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Policy</MenuItem>
            </MenuList>
          </Menu>

          <div className="flex items-center gap-2">
            <GithubLogo
              weight="fill"
              className="bg-green-400 rounded-md p-1.5 size-8"
            />
            <InstagramLogo
              weight="fill"
              className="bg-green-400 rounded-md p-1.5 size-8"
            />
            <TwitterLogo
              weight="fill"
              className="bg-green-400 rounded-md p-1.5 size-8"
            />
          </div>
          {session ? (
            <Link href="/me" className="flex items-center gap-2">
              <img src={session?.user?.image} className="size-9 rounded-full" />
            </Link>
          ) : (
            <LoginBtn />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

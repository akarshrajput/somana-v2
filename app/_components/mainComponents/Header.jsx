import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import {
  ArrowUp,
  Book,
  Books,
  Bug,
  CaretDown,
  Database,
  Detective,
  Gear,
  GithubLogo,
  InstagramLogo,
  Key,
  Note,
  Question,
  TwitterLogo,
  UserCheck,
  UserCircle,
  Warning,
} from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";
import Search from "./Search";
import LoginBtn from "../buttons/LoginBtn";
import { auth } from "@/app/_lib/auth";
import ScrollProgress from "./ScrollProgress";
import LogoutBtn from "../buttons/LogoutBtn";
import ThemeSwitchBtn from "../buttons/ThemeSwitchBtn";
import { useTheme } from "next-themes";
import UserOptions from "./UserOptions";

const Header = async () => {
  const session = await auth();

  return (
    <div className="w-full">
      <ScrollProgress />
      <div className="flex w-full items-center bg-white dark:bg-black dark:text-stone-50 py-1 px-2">
        <Logo />

        <div className="ml-auto">
          <div className="flex items-center gap-2">
            <Search />

            <Link
              href="/upload"
              className="font-semibold bg-green-400 dark:bg-green-800 rounded-md py-1 px-2 flex items-center gap-1"
            >
              Upload
              <ArrowUp weight="bold" className="size-3" />
            </Link>
            <ThemeSwitchBtn />
            <Menu>
              <MenuButton className="font-semibold bg-green-400 dark:bg-green-800 rounded-md py-1 px-2 flex items-center gap-1">
                <div className="flex items-center gap-2">
                  Services
                  <CaretDown weight="bold" className="size-3" />
                </div>
              </MenuButton>
              <MenuList className="font-medium">
                <MenuItem>
                  <Note weight="bold" className="mr-2" />
                  Notes Hub
                </MenuItem>
                <MenuItem>
                  <Key weight="bold" className="mr-2" />
                  API key
                </MenuItem>
                <MenuItem>Somana AI</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Policy</MenuItem>
              </MenuList>
            </Menu>

            <div className="flex items-center gap-2">
              <GithubLogo
                weight="fill"
                className="bg-green-400 dark:bg-green-800 rounded-md p-1.5 size-8"
              />
              <InstagramLogo
                weight="fill"
                className="bg-green-400 dark:bg-green-800 rounded-md p-1.5 size-8"
              />
              <TwitterLogo
                weight="fill"
                className="bg-green-400 dark:bg-green-800 rounded-md p-1.5 size-8"
              />
            </div>
            <div className="flex items-center">
              <UserOptions session={session} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

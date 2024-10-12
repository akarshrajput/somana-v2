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

const Header = async () => {
  const session = await auth();
  return (
    <div className="w-full">
      <ScrollProgress />
      <div className="flex w-full items-center bg-white py-1 px-2">
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
              <Menu>
                <MenuButton>
                  <img
                    src={session?.user?.image}
                    className="size-9 rounded-full"
                  />
                </MenuButton>
                <MenuList>
                  <Link href="/me">
                    <MenuItem>
                      <UserCircle weight="bold" className="mr-2" />
                      Profile
                    </MenuItem>{" "}
                  </Link>

                  <MenuItem>
                    <Book weight="bold" className="mr-2" />
                    Stories
                  </MenuItem>
                  <MenuItem>
                    <Books weight="bold" className="mr-2" />
                    Library
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <Gear weight="bold" className="mr-2" />
                    Settings
                  </MenuItem>
                  <MenuItem>
                    <Question weight="bold" className="mr-2" />
                    Help
                  </MenuItem>
                  <MenuItem>
                    <Warning weight="bold" className="mr-2" />
                    Report
                  </MenuItem>
                  <MenuItem>
                    <Bug weight="bold" className="mr-2" />
                    Bug Report
                  </MenuItem>
                  <Link href="/policy">
                    <MenuItem>
                      <Detective weight="bold" className="mr-2" />
                      Policy
                    </MenuItem>
                  </Link>
                  <Divider />
                  <MenuItem>
                    <UserCheck weight="bold" className="mr-2" />
                    Subscription
                  </MenuItem>
                  <MenuItem>
                    <Key weight="bold" className="mr-2" />
                    API key
                  </MenuItem>

                  <Divider />
                  <div className="mx-2 mt-2">
                    <LogoutBtn />
                  </div>
                </MenuList>
              </Menu>
            ) : (
              <LoginBtn />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

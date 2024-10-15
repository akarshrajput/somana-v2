"use client";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Divider,
} from "@chakra-ui/react";
import {
  Book,
  Books,
  Bug,
  Detective,
  Gear,
  Key,
  Question,
  UserCheck,
  UserCircle,
  Warning,
} from "@phosphor-icons/react";
import Link from "next/link";
import LogoutBtn from "../buttons/LogoutBtn";
import LoginBtn from "../buttons/LoginBtn";
import { useTheme } from "next-themes";
const UserOptions = ({ session }) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center">
      {session ? (
        <Menu>
          <MenuButton>
            <img src={session?.user?.image} className="size-9 rounded-full" />
          </MenuButton>
          <MenuList>
            <Link href="/me">
              <MenuItem>
                <UserCircle weight="bold" className="mr-2" />
                Profile
              </MenuItem>
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
  );
};
export default UserOptions;

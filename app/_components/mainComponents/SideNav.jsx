import Link from "next/link";
import TrendingBlogs from "../blogComponents/TrendingBlogs";
import {
  DeviceMobileSpeaker,
  Headphones,
  Phone,
  Play,
} from "@phosphor-icons/react/dist/ssr";
import DailyQuote from "./DailyQuote";
import TrendingTopics from "../blogComponents/TrendingTopics";

const SideNav = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm flex flex-wrap gap-2">
        <button className="font-semibold flex items-center gap-1 text-stone-50 bg-red-600 rounded-md p-1 px-2">
          <Play weight="fill" />
          Videos
        </button>
        <button className="font-semibold flex items-center gap-1 text-stone-50 bg-pink-600 rounded-md p-1 px-2">
          <Headphones weight="fill" />
          Music
        </button>
      </div>
      <TrendingBlogs />
      <div className="bg-sky-200 dark:bg-sky-900 p-2 rounded-md flex flex-col gap-20">
        <p className="font-semibold">Write on Somana</p>
        <Link
          href="/"
          className="bg-stone-800 w-fit p-1 px-2 text-sm rounded-full text-stone-50"
        >
          Write
        </Link>
      </div>
      <DailyQuote />
      <TrendingTopics />
    </div>
  );
};
export default SideNav;

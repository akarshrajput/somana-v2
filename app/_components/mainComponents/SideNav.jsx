import Link from "next/link";
import TrendingBlogs from "../blogComponents/TrendingBlogs";

const SideNav = () => {
  return (
    <div className="flex flex-col gap-2">
      <TrendingBlogs />
      <div className="bg-sky-200 p-2 rounded-md flex flex-col gap-20">
        <p className="font-semibold">Write on Somana</p>
        <Link
          href="/"
          className="bg-stone-800 w-fit p-1 px-2 text-sm rounded-full text-stone-50"
        >
          Write
        </Link>
      </div>
    </div>
  );
};
export default SideNav;

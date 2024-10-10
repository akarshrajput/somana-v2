import { Rubik } from "next/font/google";
import Link from "next/link";
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const TrendingBlogs = () => {
  return (
    <div className="flex flex-col  gap-2 p-2 rounded-md">
      <p className="font-bold">Trending</p>
      <div className="text-sm">
        <div className="relative flex items-center gap-x-2">
          {/* <img
                alt="Authors"
                src={post.author.photo}
                className="h-6 w-6 rounded-full bg-gray-50"
              /> */}
          <div className="text-sm flex font-medium text-gray-900 items-center gap-1">
            <Link className="hover:underline" href="/">
              Akarsh Rajput
            </Link>
            in
            <Link href="/" className="hover:underline">
              Tech
            </Link>
          </div>
        </div>
        <p className={`${rubik.className} font-semibold`}>How to make a pie?</p>
      </div>
      <div className="text-sm">
        <div className="relative flex items-center gap-x-2">
          {/* <img
                alt="Authors"
                src={post.author.photo}
                className="h-6 w-6 rounded-full bg-gray-50"
              /> */}
          <div className="text-sm flex font-medium text-gray-900 items-center gap-1">
            <Link className="hover:underline" href="/">
              Akarsh Rajput
            </Link>
            in
            <Link href="/" className="hover:underline">
              Tech
            </Link>
          </div>
        </div>
        <p className={`${rubik.className} font-semibold`}>How to make a pie?</p>
      </div>
      <div className="text-sm">
        <div className="relative flex items-center gap-x-2">
          {/* <img
                alt="Authors"
                src={post.author.photo}
                className="h-6 w-6 rounded-full bg-gray-50"
              /> */}
          <div className="text-sm flex font-medium text-gray-900 items-center gap-1">
            <Link className="hover:underline" href="/">
              Akarsh Rajput
            </Link>
            in
            <Link href="/" className="hover:underline">
              Tech
            </Link>
          </div>
        </div>
        <p className={`${rubik.className} font-semibold`}>How to make a pie?</p>
      </div>
    </div>
  );
};
export default TrendingBlogs;

import { TrendUp } from "@phosphor-icons/react/dist/ssr";

const TrendingTopics = () => {
  return (
    <div className="p-2">
      <p className="font-bold mb-2 flex items-center gap-1">
        <TrendUp weight="bold" /> Trend right now!
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <p className="hover:underline bg-stone-100 p-1 px-2 rounded-full text-sm">
          Technology
        </p>
        <p className="hover:underline text-sm bg-stone-100 p-1 px-2 rounded-full ">
          Quotes
        </p>

        <p className="hover:underline text-sm bg-stone-100 p-1 px-2 rounded-full">
          Sustainable
        </p>

        <p className="hover:underline text-sm bg-stone-100 p-1 px-2 rounded-full">
          Blog
        </p>

        <p className="hover:underline text-sm bg-stone-100 p-1 px-2 rounded-full">
          Biographies
        </p>

        <p className="hover:underline text-sm bg-stone-100 p-1 px-2 rounded-full">
          War in Israel
        </p>
      </div>
    </div>
  );
};
export default TrendingTopics;

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="font-semibold flex items-center gap-1">
      <img src="/somana-logo.png" className="h-10 brightness-125" />
    </Link>
  );
};
export default Logo;

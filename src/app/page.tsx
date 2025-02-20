import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-[54px] pl-10">
      <h1 className="text-xl hover:text-primary underline">
        <Link href="/products/1">Check out our first products here.</Link>
      </h1>
    </div>
  );
}

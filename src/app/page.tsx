import Link from "next/link";

export default function Home() {
  return (
    <div className="px-10">
      <h1 className="text-xl transition-colors hover:text-primary underline">
        <Link href="/products/1">Check out our first product here.</Link>
      </h1>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>
        <Link href="/products/1">Check out our products here.</Link>
      </h1>
    </div>
  );
}

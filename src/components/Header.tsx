import Link from "next/link";
import { FC } from "react";
import { navigationItems } from "./constants";
import { IconMenu4, IconSearch, IconShoppingCart } from "@tabler/icons-react";

export const Header: FC = () => (
  <header className="border-b border-french-gray">
    <div className="flex min-h-[81px] h-full max-w-[1440px] w-full mx-auto">
      <nav className="flex flex-1 justify-between items-center text-sm font-semibold px-10">
        <Link href="/" className="cursor-pointer">
          <span className="text-2xl">Cozy®</span>
        </Link>
        <ul className="flex gap-10 text-label-small font-semibold">
          {navigationItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-primary transition-colors uppercase"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-10">
          <li className="hover:text-primary transition-colors cursor-pointer">
            <Link href="/">
              <IconMenu4 />
            </Link>
          </li>
          <li className="hover:text-primary transition-colors cursor-pointer">
            <Link href="/">
              <IconSearch />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hover:text-primary transition-colors border-l border-french-gray cursor-pointer flex items-center px-10">
        <IconShoppingCart />
      </div>
    </div>
  </header>
);

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../app/globals.css";

type NavLink = { label: string; href: string };
type Props = { navLinks: NavLink[] };

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

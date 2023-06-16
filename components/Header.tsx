import Link from "next/link";
import "../app/globals.css";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
}

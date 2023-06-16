import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link href="/about/team">team</Link>
        </li>
        <li>
          <Link href="/about/contacts">contacts</Link>
        </li>
      </ul>
      {children}
    </>
  );
}

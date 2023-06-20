import Navigation from "./Navigation";
import "../app/globals.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="header">
      <Navigation navLinks={navLinks} />
    </header>
  );
}

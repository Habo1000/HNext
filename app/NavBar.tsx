import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import StickyOnScroll from "@/components/general/StickyOnScroll";
import Link from "next/link";

export default function NavBar() {
  const navItems = [
    {
      name: "Présentation",
      id: "presentation",
    },
    {
      name: "Services",
      id: "services",
    },
    {
      name: "Réalisations",
      id: "realisations",
    },
  ];

  return (
    <StickyOnScroll className="w-full">
      <nav className="flex items-center justify-between px-12 py-6">
        <div className="flex items-center">
          <Image
            src="/logo/logo_h_navbar.png"
            alt="Logo HNext"
            width="40"
            height="40"
            className="bg-transparent"
          />
          <span className="text-3xl font-title font-semibold text-primary transition animate-slide-in-left">
            Next
          </span>
        </div>

        <ul className="hidden md:flex flex-1 items-center justify-center gap-6 text-lg font-semibold font-title">
          {navItems.map(({ name, id }) => (
            <li key={id}>
              <Link href={`/#${id}`}>{name}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block px-3 py-1.5 bg-primary rounded-full text-white font-semibold whitespace-nowrap">
          <Link href="/#contact">Contact</Link>
        </div>

        <HamburgerMenu />
      </nav>
    </StickyOnScroll>
  );
}

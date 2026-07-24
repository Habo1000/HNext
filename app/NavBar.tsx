import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar() {
  return (
    <nav className="w-full border-b border-muted-foreground/30 bg-[#e8f0f2]">
      <div className="grid grid-cols-2 items-center justify-center px-12 py-6 ">
        <div className="flex items-center">
          <Image
            src="/logo/logo_h_navbar.png"
            alt=""
            width="40"
            height="40"
            className="bg-transparent"
          />
          <span className="text-3xl font-title font-semibold text-primary transition animate-slide-in-left">
            Next
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-lg font-semibold font-title">
            <li>Présentation</li>
            <li>Services</li>
            <li>Projets</li>
            <li className="ms-auto px-3 py-1.5 bg-primary rounded-full text-white">
              Contact
            </li>
          </ul>
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
}

import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import StickyOnScroll from "@/components/general/StickyOnScroll";

export default function NavBar() {
  return (
    <StickyOnScroll className="w-full">
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
            <li>
              <a href="#presentation">Présentation</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#realisations">Réalisations</a>
            </li>
            <li className="ms-auto px-3 py-1.5 bg-primary rounded-full text-white">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <HamburgerMenu />
      </div>
    </StickyOnScroll>
  );
}

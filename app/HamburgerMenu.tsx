import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function HamburgerMenu() {
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
    <div className="md:hidden ms-auto flex items-center">
      <Sheet>
        <SheetTrigger aria-label="Ouvrir le menu">
          <Menu />
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-4 mt-8 p-4 text-xl">
            {navItems.map(({ name, id }) => (
              <SheetClose key={id} className="text-left">
                <Link href={`/#${id}`}>{name}</Link>
              </SheetClose>
            ))}
            <SheetClose className="w-fit text-left px-3 py-1.5 bg-primary rounded-full text-white">
              <Link href="/#contact">Contact</Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

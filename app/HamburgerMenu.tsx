import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
              <SheetClose className="text-left">
                <a href={`#${id}`}>{name}</a>
              </SheetClose>
            ))}
            <SheetClose className="w-fit text-left px-3 py-1.5 bg-primary rounded-full text-white">
              <a href="#contact">Contact</a>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

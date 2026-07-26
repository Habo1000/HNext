import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function HamburgerMenu() {
  return (
    <div className="md:hidden ms-auto flex items-center">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col gap-4 mt-8 p-4 text-xl">
            <a href="#presentation">Présentation</a>
            <a href="#services">Services</a>
            <a href="#realisations">Réalisations</a>
            <a href="#contact">Contact</a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

import { MapPinned } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mx-auto mt-50">
      <MapPinned size={48} />
      <h1 className="text-3xl text-primary">Page introuvable !</h1>
      <Link href="/">Retour à la page principale</Link>
    </div>
  );
}

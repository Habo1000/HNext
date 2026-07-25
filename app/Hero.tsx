import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <header className="h-[calc(100dvh-88px)] ">
      <div className="flex flex-col md:flex-row items-center justify-center relative mx-8 md:mx-12 pt-12">
        <div className="absolute left-1/4 top-3/8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl bg-primary/20 h-60 w-screen md:h-160 md:w-160 rounded-full"></div>
        <div className="flex flex-col justify-baseline gap-3 md:gap-1 max-w-170 ">
          <span className="w-fit text-primary font-mono font-bold px-2.5 py-1.5 rounded-full border ">
            Solutions web
          </span>
          <hgroup>
            <h1 className="text-4xl md:text-6xl">
              Faites passer votre présence en ligne au{" "}
              <span className="font-medium">niveau supérieur.</span>
            </h1>
            <p className="text-xl mt-1 text-muted-foreground ">
              Je conçois des sites web modernes, performants et sur mesure pour
              donner à votre activité l'image qu'elle mérite.
            </p>
          </hgroup>
          <div className="flex gap-2 md:mt-1">
            <Button size="lg">Votre projet</Button>
            <Button size="lg" variant="outline">
              Mes réalisations
            </Button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/hero/hero-1.png"
            alt="Aperçu du site Villa Serena réalisé par HNext"
            height={1000}
            width={1000}
            priority
          />
        </div>
      </div>
    </header>
  );
}

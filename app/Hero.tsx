import Image from "next/image";

export default function Hero() {
  return (
    <header>
      <div className="flex items-center justify-center mx-12 my-24">
        <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl bg-primary/10 h-160 w-160 rounded-full"></div>
        <div className="flex flex-col justify-baseline gap-1 max-w-170 ">
          <span className="w-fit text-primary font-mono font-bold px-2.5 py-1.5 rounded-full border ">
            Solutions web
          </span>
          <hgroup>
            <h1 className="text-6xl">
              Faites passer votre présence en ligne au{" "}
              <span className="font-medium">niveau supérieur.</span>
            </h1>
            <p className="text-xl mt-1 text-muted-foreground ">
              Je conçois des sites web modernes, performants et sur mesure pour
              donner à votre activité l'image qu'elle mérite.
            </p>
          </hgroup>
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

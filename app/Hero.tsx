import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative min-h-[90dvh] md:flex md:items-center mt-28">
      <div className="flex flex-col md:flex-row items-center justify-center mx-8 md:mx-12 my-12">
        <div className="absolute left-1/4 top-3/8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl bg-primary/20 h-60 w-screen md:h-120 md:w-160 rounded-full pointer-events-none"></div>
        <div className="flex flex-col justify-baseline gap-3 md:gap-1 max-w-170 ">
          <span className="w-fit text-primary font-mono font-bold px-2.5 py-1.5 rounded-full border ">
            Solutions web
          </span>
          <hgroup className="cursor-default">
            <h1 className="text-3xl md:text-6xl">
              Faites passer votre présence en ligne au{" "}
              <span className="font-medium">niveau supérieur.</span>
            </h1>
            <p className="text-xl mt-1 text-muted-foreground ">
              Je conçois des sites web modernes, performants et sur mesure pour
              donner à votre activité l'image qu'elle mérite.
            </p>
          </hgroup>
          <div className="flex gap-2 md:mt-1">
            <a
              className="flex justify-center items-center font-semibold px-2.5 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 cursor-pointer"
              href="#contact"
            >
              Votre projet
            </a>
            <a
              className="flex justify-center items-center font-semibold px-2.5 py-2 border border-border rounded-lg  text-foreground hover:text-foreground/80 hover:bg-primary/20 cursor-pointer"
              href="#realisations"
            >
              Mes réalisations
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-1">
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

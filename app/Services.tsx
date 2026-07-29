import ScrollColorSection from "@/components/general/ScrollColorSection";
import { CalendarCheck, Globe, Lightbulb, RefreshCw } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Sites vitrines & institutionnels",
      description: "Votre présence en ligne, de A à Z",
      content:
        "Design sur-mesure sans template, structure pensée pour le référencement et un rendu responsive sur tous les écrans. Livraison en 3 à 6 semaines selon la complexité.",
    },
    {
      icon: CalendarCheck,
      title: "Réservation & paiement en ligne",
      description: "Des sites qui vendent, pas juste qui informent",
      content:
        "Gestion des disponibilités, paiement sécurisé via Stripe et emails automatiques de confirmation. Un tableau de bord admin vous permet de tout piloter facilement.",
    },
    {
      icon: RefreshCw,
      title: "Refonte & optimisation",
      description: "Votre site existant, remis à niveau",
      content:
        "Audit design et technique complet, amélioration des performances et optimisation SEO. La migration se fait sans perte de contenu ni d'historique.",
    },
    {
      icon: Lightbulb,
      title: "Conseil technique",
      description: "Les bonnes décisions dès le départ",
      content:
        "Choix des technologies adaptées à votre projet, architecture pensée pour durer et priorisation des fonctionnalités. Un accompagnement tout au long du développement.",
    },
  ];

  return (
    <ScrollColorSection id="services">
      <div className="grid grid-rows-1 md:grid-cols-2 px-8 md:px-12 md:pt-32 py-12">
        <div className="md:sticky md:top-32 md:self-start md:pb-32">
          <hgroup className="max-w-80 pt-12 ">
            <span className="w-fit font-mono text-primary font-bold px-2.5 py-1.5 rounded-full border border-foreground/20">
              Services
            </span>
            <h2 className="text-3xl mt-2">Nos services</h2>
            <p className="text-xl mt-1 mb-12 text-muted-foreground">
              Du site vitrine à la plateforme de réservation avec paiement en
              ligne, chaque projet est pensé sur-mesure — pas de template, pas
              de solution générique.
            </p>
          </hgroup>
        </div>
        <div className="flex flex-col gap-3">
          {services.map((service, index) => (
            <ServiceCard
              title={service.title}
              description={service.description}
              logo={service.icon}
              content={service.content}
              key={service.title}
              className={`max-w-80 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
            />
          ))}
        </div>
      </div>
    </ScrollColorSection>
  );
}

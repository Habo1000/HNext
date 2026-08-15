import Badge from "@/components/general/Badge";
import ScrollColorSection from "@/components/general/ScrollColorSection";

export default function Presentation() {
  return (
    <ScrollColorSection id="presentation">
      <div className="px-8 md:px-12 md:pt-32 py-24">
        <hgroup className="max-w-80">
          <span className="w-fit font-mono text-primary font-bold px-2.5 py-1.5 rounded-full border border-foreground/20">
            Présentation
          </span>
          <h2 className="text-3xl mt-2">Qui je suis</h2>
        </hgroup>
        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-semibold">Haroune</h3>
          <p className="text-lg md:text-xl text-primary font-semibold">
            Développeur web
          </p>
          <p className="mt-1 md:text-lg">
            Passionné de développement web depuis les études, apprentissage
            porté par la pratique plutôt que la théorie. Développement complet
            de Villa Serena, plateforme de réservation avec paiement en ligne
            pour un client à Sharm el-Sheikh : conception, base de données,
            paiement Stripe, mise en production.
          </p>
          <div className="mt-4 space-x-1 space-y-1 ">
            {["React/Next.js", "TypeScript", "SEO", "Responsive"].map(
              (elem) => (
                <Badge key={elem}>{elem}</Badge>
              ),
            )}
          </div>
        </div>
      </div>
    </ScrollColorSection>
  );
}

import { DialogDescription } from "@base-ui/react";

// data/projects.ts
export const projects = [
  {
    title: "Villa Serena",
    image: "/realisations/villa-serena.png",
    alt: "Aperçu du site Villa Serena réalisé par HNext",
    tags: ["Next.js 15", "TypeScript", "Stripe"],
    description:
      "Réservation et paiement en ligne pour une villa de luxe à Sharm el-Sheikh.",
    dialogDescription:
      "Développement full-stack d'une plateforme de réservation pour un client réel. Gestion des réservations avec transactions Prisma sécurisées (isolation Serializable) évitant les conflits de dates. Paiement en ligne via Stripe avec capture manuelle des transactions. Emails automatisés (confirmation, refus) via Resend. Authentification admin sécurisée par JWT. Optimisation des performances mobiles (LCP réduit de 8s à 3.6s).",
  },
];

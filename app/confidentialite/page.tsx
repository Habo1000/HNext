export default function PolitiqueDeConfidentialite() {
  return (
    <main className="mx-auto mt-20 max-w-3xl px-6 py-16 text-slate-800">
      <h1 className="text-3xl font-bold mb-2">Politique de confidentialité</h1>
      <p className="text-sm text-slate-500 mb-10">
        Dernière mise à jour : 28/8/26
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          1. Responsable du traitement
        </h2>
        <p>
          Ce site est édité par HNext, représenté par Haroune, contact :{" "}
          <a
            href="mailto:contact@hnext-dev.com"
            className="text-blue-600 underline"
          >
            contact@hnext-dev.com
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Données collectées</h2>
        <p className="mb-4">
          Ce site est un site vitrine ne comportant aucun formulaire de collecte
          de données et n&apos;utilisant aucun cookie de suivi ajouté par nos
          soins (pas d&apos;outil d&apos;analyse d&apos;audience, pas de pixel
          publicitaire, pas de bouton de partage réseaux sociaux).
        </p>
        <p className="mb-4">
          Le site propose toutefois des liens de contact direct (lien WhatsApp
          et lien mailto) permettant de nous contacter volontairement. Aucune
          donnée n&apos;est collectée par le site lui-même via ces liens : ils
          ouvrent simplement l&apos;application WhatsApp ou le client mail de
          l&apos;utilisateur. Les échanges qui en résultent sont ensuite traités
          directement dans WhatsApp et dans notre messagerie professionnelle
          (voir ci-dessous).
        </p>
        <p className="mb-4">
          Seules des données techniques sont par ailleurs susceptibles
          d&apos;être collectées automatiquement dans le cadre du fonctionnement
          normal du site :
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Adresse IP et logs de connexion</strong>, collectés et
            conservés par notre hébergeur, Squarespace, à des fins de sécurité
            et de bon fonctionnement du service.
          </li>
        </ul>
        <p className="mb-4">
          À noter que Squarespace peut déposer certains cookies techniques
          nécessaires au fonctionnement du site (répartition de charge,
          sécurité), même en l&apos;absence d&apos;outil d&apos;analyse
          d&apos;audience ajouté par nos soins.
        </p>
        <p>
          Ces données ne sont ni exploitées, ni cédées à des tiers à des fins
          commerciales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Outils tiers utilisés pour la correspondance
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Google Workspace</strong> : notre messagerie professionnelle
            (contact@hnext-dev.com) est hébergée via Google Workspace. Les
            emails que vous nous envoyez sont donc traités par Google, dans le
            cadre de son propre traitement de données (voir la politique de
            confidentialité de Google).
          </li>
          <li>
            <strong>WhatsApp (Meta)</strong> : si vous nous contactez via le
            lien WhatsApp, les échanges sont traités selon la politique de
            confidentialité de WhatsApp/Meta, en dehors de notre site.
          </li>
        </ul>
        <p>
          Nous ne sommes pas responsables des traitements de données effectués
          par ces plateformes tierces une fois que vous les utilisez pour nous
          contacter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Base légale</h2>
        <p>
          Le traitement des données techniques mentionnées ci-dessus repose sur
          l&apos;intérêt légitime de l&apos;éditeur du site à assurer la
          sécurité, la disponibilité et le bon fonctionnement du site (article
          6.1.f du RGPD). Les échanges initiés volontairement par WhatsApp ou
          par email reposent sur votre consentement à nous contacter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Durée de conservation</h2>
        <p>
          Les logs de connexion sont conservés par l&apos;hébergeur selon sa
          propre politique, généralement pour une durée n&apos;excédant pas 12
          mois, conformément aux obligations légales en matière de conservation
          des données de connexion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement et de limitation concernant vos
          données personnelles. Vous pouvez exercer ces droits en nous
          contactant à l&apos;adresse :{" "}
          <a
            href="mailto:contact@hnext-dev.com"
            className="text-blue-600 underline"
          >
            contact@hnext-dev.com
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Hébergement</h2>
        <p>
          Ce site est hébergé par Squarespace, Inc., 225 Varick Street, New
          York, NY 10014, États-Unis. Squarespace étant une société américaine,
          les données techniques mentionnées ci-dessus peuvent faire
          l&apos;objet d&apos;un transfert hors de l&apos;Union européenne,
          encadré par les clauses contractuelles types de la Commission
          européenne ou un mécanisme équivalent mis en place par Squarespace.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          8. Modification de la présente politique
        </h2>
        <p>
          Cette politique de confidentialité peut être mise à jour à tout
          moment, notamment en cas d&apos;ajout de nouvelles fonctionnalités au
          site (formulaire de contact, outils d&apos;analyse, etc.). Nous vous
          invitons à la consulter régulièrement.
        </p>
      </section>
    </main>
  );
}

export default function MentionsLegales() {
  return (
    <main className="max-w-2xl mx-auto mt-12 px-6 py-16 flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Mentions légales</h1>

      <section className="flex flex-col gap-1">
        <h2 className="text-lg font-medium">Éditeur du site</h2>
        <p className="text-muted-foreground">
          Haroune BOUDELAL, entrepreneur individuel
        </p>
        <p className="text-muted-foreground">
          Adresse : 78 rue de Mulhouse, Saint-Louis
        </p>
        <p className="text-muted-foreground">
          Email :{" "}
          <a
            href="mailto:contact@hnext-dev.com"
            className="text-primary hover:underline"
          >
            contact@hnext-dev.com
          </a>
        </p>
        <p className="text-muted-foreground">
          Directeur de la publication : Haroune BOUDELAL
        </p>
      </section>

      <section className="flex flex-col gap-1">
        <h2 className="text-lg font-medium">Hébergement</h2>
        <p className="text-muted-foreground">Vercel Inc.</p>
        <p className="text-muted-foreground">
          440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
        </p>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          vercel.com
        </a>
      </section>

      <section className="flex flex-col gap-1">
        <h2 className="text-lg font-medium">Propriété intellectuelle</h2>
        <p className="text-muted-foreground">
          L'ensemble des contenus de ce site (textes, visuels, code) est la
          propriété de Haroune BOUDELAL / HNext, sauf mention contraire. Toute
          reproduction sans autorisation est interdite.
        </p>
      </section>
    </main>
  );
}

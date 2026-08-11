import ScrollColorSection from "@/components/general/ScrollColorSection";

export default function Contact() {
  return (
    <ScrollColorSection id="contact" className="h-screen">
      <div className="px-8 md:px-12 py-12">
        <hgroup className="max-w-80 md:max-w-120 pt-12 ">
          <span className="w-fit font-mono text-primary font-bold px-2.5 py-1.5 rounded-full border border-foreground/20">
            Contact
          </span>
          <h2 className="text-3xl mt-2">Discutons de votre projet</h2>
          <p className="text-xl mt-1 mb-12 text-muted-foreground">
            Basé en Alsace, disponible pour un appel ou un échange par mail sous
            24h. Parlons de votre projet, sans engagement de votre part.
          </p>
        </hgroup>
      </div>
    </ScrollColorSection>
  );
}

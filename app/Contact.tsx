import ScrollColorSection from "@/components/general/ScrollColorSection";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <ScrollColorSection id="contact">
      <div className="px-8 md:px-12 pt-12 pb-24">
        <hgroup className="max-w-80 md:max-w-120 pt-12 ">
          <span className="w-fit font-mono text-primary font-bold px-2.5 py-1.5 rounded-full border border-foreground/20">
            Contact
          </span>
          <h2 className="text-3xl mt-2">Discutons de votre projet</h2>
          <p className="text-xl mt-1 mb-12 text-muted-foreground">
            Basé en Alsace, réponse rapide et échanges humains garantis. Parlons
            de votre projet, sans engagement de votre part.
          </p>
        </hgroup>
        <div className="flex flex-col gap-10 md:flex-row  md:justify-around items-center mt-24 text-center">
          <a
            href="https://wa.me/33767899736?text=Bonjour%2C%20je%20souhaiterais%20discuter%20d%27un%20projet%20de%20site%20web."
            target="_blank"
            className="flex flex-col items-center gap-2"
          >
            <Phone size={55} />
            <p className="md:text-2xl text-xl">
              Discutons sur <span className="text-[#25D366]">WhatsApp</span>
            </p>
            <p className="md:text-lg text-foreground">+33 7 67 89 97 36</p>
          </a>
          <a
            href="mailto:contact@hnext-dev.com"
            className="flex flex-col items-center gap-2"
          >
            <Mail size={55} />
            <p className="md:text-2xl text-xl ">
              Envoyez-nous un <span className="text-primary">mail</span>
            </p>
            <p className="md:text-lg text-foreground">contact@hnext-dev.com</p>
          </a>
        </div>
      </div>
    </ScrollColorSection>
  );
}

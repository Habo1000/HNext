import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-8 md:px-12 pt-12 md:pt-28">
      <div className="flex md:flex-row flex-col items-start justify-around gap-8 flex-wrap">
        <div className="max-w-84">
          <div className="flex items-center">
            <Image
              src="/logo/logo_h_navbar.png"
              alt="Logo du site"
              width="40"
              height="40"
            />
            <p className="text-3xl font-title font-semibold text-primary ">
              Next
            </p>
          </div>
          <p className="text-foreground mt-2">
            Sites web sur-mesure pour indépendants et entreprises en Alsace.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:mt-4">
          <p>Plan</p>
          <a
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Accueil
          </a>
          <a
            href="#services"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </a>
          <a
            href="#projets"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projets
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-2 sm:mt-4">
          <p className="text-foreground">Contact et Réseaux</p>
          <a
            href="mailto:contact@hnext-dev.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            contact@hnext-dev.com
          </a>
          <a
            href="https://wa.me/33767899736?text=Bonjour%2C%20je%20souhaiterais%20discuter%20d%27un%20projet%20de%20site%20web."
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>

          <div className="flex gap-2">
            <a
              href="https://linkedin.com/in/haroune-boudelal"
              target="_blank"
              className="text-primary hover:text-foreground"
              aria-label="Lien vers mon profil LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Habo1000"
              target="_blank"
              className="text-primary hover:text-foreground"
              aria-label="Lien vers mon profil GitHub"
            >
              <BsGithub size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-foreground/10 mt-10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 mx-auto">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HNext. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground">
            Développé avec Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

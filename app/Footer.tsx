import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-8 md:px-12 py-8 md:py-12 bg-primary/10">
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
          <p className="text-foreground font-semibold">Plan</p>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/#services"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#projets"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projets
          </Link>
          <Link
            href="/#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-2 sm:mt-4">
          <p className="text-foreground font-semibold">Contact et Réseaux</p>
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
            <a
              href="https://www.instagram.com/hnextdev/"
              target="_blank"
              className="text-primary hover:text-foreground"
              aria-label="Lien vers mon profil Instagram"
            >
              <BsInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-foreground/10  mt-10 pt-6 flex flex-col md:items-center md:justify-center gap-2 mx-auto">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} HNext. Tous droits réservés. Développé
          avec Next.js
        </p>
        <div className="flex gap-12">
          <Link
            href="/mentions-legales"
            className="text-sm text-muted-foreground block"
          >
            Mentions légales
          </Link>
          <Link
            href="/confidentialite"
            className="text-sm text-muted-foreground block"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}

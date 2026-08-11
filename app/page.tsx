import Contact from "./Contact";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Realisations from "./Realisations";
import Services from "./Services";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Services />
      <Realisations />
      <Contact />
    </main>
  );
}

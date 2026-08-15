import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Presentation from "./Presentation";
import Realisations from "./Realisations";
import Services from "./Services";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Presentation />
      <Services />
      <Realisations />
      <Contact />
      <Footer />
    </main>
  );
}

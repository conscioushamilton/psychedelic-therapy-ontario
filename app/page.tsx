import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowIWork from "@/components/HowIWork";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Journey from "@/components/Journey";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <HowIWork />
        <Services />
        <Approach />
        <Journey />
        <Location />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

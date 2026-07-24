import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DemoBadge from "@/components/DemoBadge";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <DemoBadge />
      <Navbar />
      <main id="top" className="relative isolate overflow-hidden">
        <Hero />
        <Marquee />
        <Services />
        <Works />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
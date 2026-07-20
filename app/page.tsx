import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Works />
        <Process />
        <Contact />
      </main>
    </div>
  );
}
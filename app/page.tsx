import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Goals from "@/components/Goals";
import Advantages from "@/components/Advantages";
import Tools from "@/components/Tools";
import Differentiators from "@/components/Differentiators";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Goals />
        <Advantages />
        <Tools />
        <Differentiators />
        <Team />
      </main>
      <Footer />
    </>
  );
}


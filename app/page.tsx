import Navbar from "@/components/navbar";
import Hero from "@/components/landing-page/hero";
import Features from "@/components/landing-page/features";
import About from "@/components/landing-page/about";
import Contact from "@/components/landing-page/contact";
import Footer from "@/components/footer";
import AboutAlternatives from "@/components/landing-page/about-alternatives";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <div className="scanlines"></div>
      {/* <div className="noise"></div> */}
      <Navbar />
      <Hero />
      <Features />
      <About />
      <AboutAlternatives />
      <Contact />
      <Footer />
    </main>
  );
}

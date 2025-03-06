import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <div className="scanlines"></div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}


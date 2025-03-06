import Navbar from "@/yo/components/navbar"
import Hero from "@/yo/components/hero"
import Features from "@/yo/components/features"
import About from "@/yo/components/about"
import Contact from "@/yo/components/contact"
import Footer from "@/yo/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}


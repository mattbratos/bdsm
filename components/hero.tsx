import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center bg-background overflow-hidden grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background backdrop-blur-[2px]"></div>
      <div className="max-w-7xl mx-auto relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="relative text-5xl md:text-7xl lg:text-9xl font-pixel-heading text-foreground leading-tight tracking-tighter">
              <span 
                className="inline-block mb-4 text-primary glitch-hero" 
                data-text="DOMINATE" 
                style={{ 
                  textShadow: "0 0 30px rgba(255, 20, 147, 0.3), 0 0 60px rgba(255, 20, 147, 0.1)",
                  letterSpacing: "-0.02em"
                }}
              >
                DOMINATE
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl opacity-90">Your Business</span>
            </h1>
          </div>
          
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground font-pixel-body max-w-3xl mx-auto">
            We specialize in creating intuitive, engaging user experiences and implementing cutting-edge AI
            solutions that transform your business.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/siopa"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-lg font-pixel-body text-primary-foreground bg-primary hover:bg-primary/90 transition-colors pixel-corners"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-lg font-pixel-body text-primary border border-primary hover:bg-primary/10 transition-colors pixel-corners"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


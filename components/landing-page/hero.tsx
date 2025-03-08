import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative bg-background overflow-hidden grid-pattern min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl tracking-tight font-pixel-heading text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            <span 
              className="block text-primary glitch mb-4 transform hover:scale-105 transition-transform" 
              data-text="DOMINATE"
              style={{ textShadow: '0 0 10px rgba(255, 0, 0, 0.5)' }}
            >
              DOMINATE
            </span>
            <span className="block text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl">your business</span>
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-xl sm:text-2xl text-muted-foreground font-pixel-body leading-relaxed">
            Take control of your digital presence with our exceptional UX design and cutting-edge AI solutions.
          </p>
          <div className="mt-12 sm:flex sm:justify-center sm:gap-6">
            <Link
              href="/sugar-mommy"
              className="w-full sm:w-auto flex items-center justify-center px-10 py-5 border border-transparent text-lg sm:text-xl font-pixel-body rounded-none text-primary-foreground bg-primary hover:bg-primary/90 md:px-12 pixel-corners transform hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
            <Link
              href="#contact"
              className="mt-4 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-10 py-5 border border-primary text-lg sm:text-xl font-pixel-body rounded-none text-primary bg-transparent hover:bg-primary/10 md:px-12 pixel-corners transform hover:scale-105 transition-transform"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 z-[-1] opacity-10">
        <div className="absolute inset-0 bg-primary pattern-grid-lg"></div>
      </div>
    </div>
  )
}


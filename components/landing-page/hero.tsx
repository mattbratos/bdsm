import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative bg-background overflow-hidden grid-pattern min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-pixel-heading text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-primary glitch mb-2" data-text="Dominate">
              Dominate
            </span>
            <span className="block text-foreground">your business</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground font-pixel-body">
            Take control of your digital presence with our exceptional UX design and cutting-edge AI solutions.
          </p>
          <div className="mt-10 sm:flex sm:justify-center sm:gap-4">
            <Link
              href="/siopa"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-pixel-body rounded-none text-primary-foreground bg-primary hover:bg-primary/90 md:text-lg md:px-10 pixel-corners"
            >
              Get Started
            </Link>
            <Link
              href="#contact"
              className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-primary text-base font-pixel-body rounded-none text-primary bg-transparent hover:bg-primary/10 md:text-lg md:px-10 pixel-corners"
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


import Link from "next/link"
import Hero3DText from "./hero-3d-text"

export default function Hero() {
  return (
    <div className="relative bg-background overflow-hidden grid-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-background/80 backdrop-blur-sm sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-pixel-heading text-foreground sm:text-4xl md:text-5xl">
                <span className="block xl:inline">Exceptional</span>{" "}
                <span className="block text-primary xl:inline glitch" data-text="User Experiences">
                  User Experiences
                </span>
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl font-pixel-body">
                We specialize in creating intuitive, engaging user experiences and implementing cutting-edge AI
                solutions that transform your business.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <Link
                    href="/siopa"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-pixel-body rounded-none text-primary-foreground bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10 pixel-corners"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-primary text-base font-pixel-body rounded-none text-primary bg-transparent hover:bg-primary/10 md:py-4 md:text-lg md:px-10 pixel-corners"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center">
        <div className="w-full h-[400px] md:h-[500px] lg:h-full lg:max-h-[600px]">
          <Hero3DText />
        </div>
      </div>
    </div>
  )
}


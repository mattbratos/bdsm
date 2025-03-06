export default function About() {
  return (
    <div id="about" className="bg-secondary py-16 sm:py-24 grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-2xl font-pixel-heading text-foreground sm:text-3xl">About BDSM Software</h2>
            <p className="mt-3 max-w-3xl text-lg text-muted-foreground font-pixel-body">
              At BDSM Software, we're passionate about creating exceptional digital experiences that drive business
              growth. Our team of experts combines technical expertise with creative thinking to deliver solutions that
              exceed expectations.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-pixel-body rounded-none text-primary-foreground bg-primary hover:bg-primary/90 pixel-corners"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-background/80 backdrop-blur-sm pixel-corners">
              <p className="text-center text-muted-foreground font-pixel-body">
                <span className="block text-foreground text-lg font-pixel-heading">50+</span>
                Projects Completed
              </p>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-background/80 backdrop-blur-sm pixel-corners">
              <p className="text-center text-muted-foreground font-pixel-body">
                <span className="block text-foreground text-lg font-pixel-heading">95%</span>
                Client Satisfaction
              </p>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-background/80 backdrop-blur-sm pixel-corners">
              <p className="text-center text-muted-foreground font-pixel-body">
                <span className="block text-foreground text-lg font-pixel-heading">10+</span>
                Years Experience
              </p>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-background/80 backdrop-blur-sm pixel-corners">
              <p className="text-center text-muted-foreground font-pixel-body">
                <span className="block text-foreground text-lg font-pixel-heading">24/7</span>
                Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




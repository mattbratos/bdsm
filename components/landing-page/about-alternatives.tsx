"use client"

import { useState } from "react"
import { Code, Rocket, Brain, Palette, ChevronRight, Terminal, Zap, Sparkles } from "lucide-react"

export default function AboutAlternatives() {
  return (
    <div className="py-16 bg-background">
      <h2 className="text-3xl font-pixel-heading text-center mb-16 text-foreground">
        About Us <span className="text-primary">Alternatives</span>
      </h2>

      {/* Version 1: Terminal Style */}
      <section className="min-h-screen flex items-center py-16 border-t border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-pixel-heading text-primary mb-8 flex items-center">
            <Terminal className="mr-2 h-6 w-6" /> Terminal Style
          </h3>

          <div className="bg-secondary/50 border border-primary/20 p-6 rounded-none pixel-corners font-pixel-body text-foreground">
            <div className="flex items-center mb-4 text-primary">
              <span className="mr-2">$</span>
              <span className="typing-animation">cat about_bdsm.txt</span>
            </div>

            <div className="space-y-4">
              <p>
                <span className="text-primary">&gt;</span> BDSM Software is a premium boutique software house based in
                Warsaw.
              </p>
              <p>
                <span className="text-primary">&gt;</span> Started by hackers who love startups, design and AI.
              </p>

              <div className="pl-4 border-l-2 border-primary/30 mt-4">
                <p className="mb-2">
                  <span className="text-primary font-bold">$ ls specialties/</span>
                </p>
                <p>
                  <span className="text-primary">01.</span> MVP for startups - because we love hacking traditional
                  markets
                </p>
                <p>
                  <span className="text-primary">02.</span> Custom powerful AI implementation for your business -
                  because AI is awesome
                </p>
                <p>
                  <span className="text-primary">03.</span> Collaborating with local artists - just for fun
                </p>
              </div>

              <div className="typing-cursor mt-4">_</div>
            </div>
          </div>
        </div>
      </section>

      {/* Version 2: Glitch Cards */}
      <section className="min-h-screen flex items-center py-16 border-t border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-pixel-heading text-primary mb-8 flex items-center">
            <Zap className="mr-2 h-6 w-6" /> Glitch Cards
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background/80 border border-primary/20 p-8 pixel-corners relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-pixel-heading text-foreground mb-4 glitch" data-text="Who We Are">
                  Who We Are
                </h4>
                <p className="text-muted-foreground font-pixel-body">
                  BDSM Software is a premium boutique software house based in Warsaw. Started by hackers who love
                  startups, design and AI.
                </p>
              </div>
              <div className="absolute top-4 right-4">
                <Code className="h-8 w-8 text-primary opacity-50" />
              </div>
            </div>

            <div className="bg-background/80 border border-primary/20 p-8 pixel-corners relative overflow-hidden">
              <h4 className="text-xl font-pixel-heading text-foreground mb-4">Our Specialties</h4>
              <ul className="space-y-4 text-muted-foreground font-pixel-body">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Rocket className="h-5 w-5 text-primary mr-3" />
                  </div>
                  <p>
                    <span className="text-foreground">MVP for startups</span> - because we love hacking traditional
                    markets
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Brain className="h-5 w-5 text-primary mr-3" />
                  </div>
                  <p>
                    <span className="text-foreground">Custom powerful AI implementation</span> - because AI is awesome
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Palette className="h-5 w-5 text-primary mr-3" />
                  </div>
                  <p>
                    <span className="text-foreground">Collaborating with local artists</span> - just for fun
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Version 3: Interactive Tabs */}
      <section className="min-h-screen flex items-center py-16 border-t border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-pixel-heading text-primary mb-8 flex items-center">
            <Sparkles className="mr-2 h-6 w-6" /> Interactive Tabs
          </h3>

          <InteractiveTabs />
        </div>
      </section>

      {/* Version 4: Pixelated Timeline */}
      <section className="min-h-screen flex items-center py-16 border-t border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-pixel-heading text-primary mb-8 flex items-center">
            <ChevronRight className="mr-2 h-6 w-6" /> Pixelated Timeline
          </h3>

          <div className="relative">
            {/* Main content */}
            <div className="bg-background/80 border border-primary/20 p-8 pixel-corners mb-12">
              <h4 className="text-xl font-pixel-heading text-primary mb-4">BDSM Software</h4>
              <p className="text-foreground font-pixel-body mb-4">
                A premium boutique software house based in Warsaw. Started by hackers who love startups, design and AI.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-16">
              <div className="relative">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-background border-2 border-primary flex items-center justify-center pixel-corners">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div className="bg-background/80 border border-primary/20 p-6 pixel-corners ml-8">
                  <h5 className="text-lg font-pixel-heading text-foreground mb-2">MVP for startups</h5>
                  <p className="text-muted-foreground font-pixel-body">
                    Because we love hacking traditional markets. We build minimal viable products that disrupt
                    industries.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-background border-2 border-primary flex items-center justify-center pixel-corners">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="bg-background/80 border border-primary/20 p-6 pixel-corners ml-8">
                  <h5 className="text-lg font-pixel-heading text-foreground mb-2">Custom AI implementation</h5>
                  <p className="text-muted-foreground font-pixel-body">
                    Because AI is awesome. We create powerful artificial intelligence solutions tailored to your
                    business needs.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-background border-2 border-primary flex items-center justify-center pixel-corners">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div className="bg-background/80 border border-primary/20 p-6 pixel-corners ml-8">
                  <h5 className="text-lg font-pixel-heading text-foreground mb-2">Collaborating with local artists</h5>
                  <p className="text-muted-foreground font-pixel-body">
                    Just for fun. We believe in the power of creativity and enjoy working with artists to create unique
                    digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version 5: Glitch Panels */}
      <section className="min-h-screen flex items-center py-16 border-t border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-pixel-heading text-primary mb-8 flex items-center">
            <Code className="mr-2 h-6 w-6" /> Glitch Panels
          </h3>

          <div className="grid grid-cols-1 gap-1 bg-primary/20 p-1 pixel-corners">
            <div className="bg-background p-8">
              <div className="max-w-3xl mx-auto">
                <h4 className="text-2xl font-pixel-heading text-primary glitch mb-6" data-text="BDSM Software">
                  BDSM Software
                </h4>
                <p className="text-foreground font-pixel-body text-lg mb-4">
                  A premium boutique software house based in Warsaw.
                </p>
                <p className="text-muted-foreground font-pixel-body mb-8">
                  Started by hackers who love startups, design and AI.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-secondary/30 p-6 pixel-corners border border-primary/10 hover:border-primary/30 transition-colors">
                    <Rocket className="h-8 w-8 text-primary mb-4" />
                    <h5 className="text-lg font-pixel-heading text-foreground mb-2">MVP for startups</h5>
                    <p className="text-muted-foreground font-pixel-body text-sm">
                      Because we love hacking traditional markets
                    </p>
                  </div>

                  <div className="bg-secondary/30 p-6 pixel-corners border border-primary/10 hover:border-primary/30 transition-colors">
                    <Brain className="h-8 w-8 text-primary mb-4" />
                    <h5 className="text-lg font-pixel-heading text-foreground mb-2">AI implementation</h5>
                    <p className="text-muted-foreground font-pixel-body text-sm">Because AI is awesome</p>
                  </div>

                  <div className="bg-secondary/30 p-6 pixel-corners border border-primary/10 hover:border-primary/30 transition-colors">
                    <Palette className="h-8 w-8 text-primary mb-4" />
                    <h5 className="text-lg font-pixel-heading text-foreground mb-2">Artist collaboration</h5>
                    <p className="text-muted-foreground font-pixel-body text-sm">Just for fun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Interactive Tabs Component
function InteractiveTabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { name: "About", icon: <Code className="h-5 w-5" /> },
    { name: "MVP", icon: <Rocket className="h-5 w-5" /> },
    { name: "AI", icon: <Brain className="h-5 w-5" /> },
    { name: "Art", icon: <Palette className="h-5 w-5" /> },
  ]

  const tabContent = [
    <div key="about" className="p-6">
      <h4 className="text-xl font-pixel-heading text-primary mb-4">BDSM Software</h4>
      <p className="text-foreground font-pixel-body mb-4">
        A premium boutique software house based in Warsaw. Started by hackers who love startups, design and AI.
      </p>
      <p className="text-muted-foreground font-pixel-body">
        We combine technical expertise with creative thinking to deliver exceptional digital solutions.
      </p>
    </div>,
    <div key="mvp" className="p-6">
      <h4 className="text-xl font-pixel-heading text-primary mb-4">MVP for Startups</h4>
      <p className="text-foreground font-pixel-body mb-4">
        We specialize in building Minimum Viable Products that help startups validate their ideas quickly and
        efficiently.
      </p>
      <p className="text-muted-foreground font-pixel-body">
        Because we love hacking traditional markets and disrupting industries with innovative solutions.
      </p>
    </div>,
    <div key="ai" className="p-6">
      <h4 className="text-xl font-pixel-heading text-primary mb-4">AI Implementation</h4>
      <p className="text-foreground font-pixel-body mb-4">
        We create custom, powerful AI solutions that transform businesses and enhance user experiences.
      </p>
      <p className="text-muted-foreground font-pixel-body">
        Because AI is awesome and we're passionate about pushing the boundaries of what's possible.
      </p>
    </div>,
    <div key="art" className="p-6">
      <h4 className="text-xl font-pixel-heading text-primary mb-4">Artist Collaboration</h4>
      <p className="text-foreground font-pixel-body mb-4">
        We collaborate with local artists to create unique digital experiences that blend technology and creativity.
      </p>
      <p className="text-muted-foreground font-pixel-body">
        Just for fun - because we believe that the intersection of art and technology leads to the most innovative
        solutions.
      </p>
    </div>,
  ]

  return (
    <div className="bg-background/80 border border-primary/20 pixel-corners overflow-hidden">
      <div className="flex border-b border-primary/20">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center px-4 py-3 font-pixel-body text-sm transition-colors ${
              activeTab === index ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>

      <div className="min-h-[300px]">{tabContent[activeTab]}</div>
    </div>
  )
}


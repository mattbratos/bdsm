"use client"

import React from "react"
import { Bug } from "lucide-react"
import Section from "@/components/section"

const Manifesto: React.FC = () => {
  return (
    <Section
      heading="Our Manifesto"
      subheading="The principles that drive us forward"
    >
      <div className="bg-black/90 p-10 rounded-lg relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-lg"></div>
        
        <div className="relative z-10">
          <div className="mb-10">
            <p className="text-primary text-base font-geist-mono mb-2">#!/usr/bin/env bash</p>
            <p className="text-neutral-200 text-base font-geist-mono mb-5"># BDSM Software Manifesto v2.0</p>
            <div className="h-px bg-primary/20 my-5"></div>
          </div>

          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-pixel-heading text-primary mb-5"># WHO WE ARE</h4>
              <p className="leading-relaxed text-neutral-200 text-lg font-geist-mono">
                BDSM Software (Bratos Design Studio Mokotow)<br />
                A collective of hackers, startup veterans, and AI enthusiasts<br />
                Born from passion, not necessity
              </p>
            </div>

            <div>
              <h4 className="text-xl font-pixel-heading text-primary mb-5"># ORIGIN_STORY</h4>
              <p className="leading-relaxed text-neutral-200 text-lg font-geist-mono">
                Years in IT. Six-figure salaries. Comfortable lives.<br />
                But comfort wasn't what we were after.<br />
                We chose to build something different.<br />
                Something purely for the joy of creation.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-pixel-heading text-primary mb-5"># CORE_PRINCIPLES</h4>
              <p className="leading-relaxed text-neutral-200 text-lg font-geist-mono">
                Premium pricing because we're worth it<br />
                Selective collaboration because we can be<br />
                Building cool shit because that's what we love<br />
                No compromises, just pure fucking joy
              </p>
            </div>

            <div>
              <h4 className="text-xl font-pixel-heading text-primary mb-5"># SYSTEM_REQUIREMENTS</h4>
              <div className="space-y-3 text-neutral-200 font-geist-mono text-lg">
                <p>{"if (project != exciting) return false;"}</p>
                <p>{"if (client != vibing) return false;"}</p>
                <p>{"if (budget < premium) return false;"}</p>
                <p>{"return buildCoolShit();"}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-primary/20">
            <p className="text-primary text-base font-geist-mono">EOF</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Manifesto 
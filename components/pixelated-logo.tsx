"use client"

import { useEffect, useState } from "react"

export default function PixelatedLogo() {
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitching(true)
      setTimeout(() => setGlitching(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className="flex items-center">
      <div className={`text-primary font-pixel-heading text-xl ${glitching ? "glitch" : ""}`} data-text="BDSM">
        BDSM
      </div>
      <div className="ml-1 text-foreground font-pixel-body text-xl">Software</div>
    </div>
  )
}


"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import PixelatedLogo from "./pixelated-logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <PixelatedLogo />
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link href="#features" className="text-foreground hover:text-primary px-3 py-2 text-sm font-pixel-body">
              Services
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary px-3 py-2 text-sm font-pixel-body">
              About
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary px-3 py-2 text-sm font-pixel-body">
              Contact
            </Link>
            <Link
              href="/sugar-mommy"
              className="bg-primary text-primary-foreground px-4 py-2 text-sm font-pixel-body pixel-corners"
            >
              Get a Quote
            </Link>
            <ThemeToggle />
          </div>

          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#features"
              className="text-foreground hover:text-primary block px-3 py-2 text-base font-pixel-body"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-foreground hover:text-primary block px-3 py-2 text-base font-pixel-body"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-foreground hover:text-primary block px-3 py-2 text-base font-pixel-body"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/siopa"
              className="bg-primary text-primary-foreground block px-3 py-2 text-base font-pixel-body pixel-corners mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}


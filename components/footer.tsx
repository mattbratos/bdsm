import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import PixelatedLogo from "./pixelated-logo"

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <PixelatedLogo />
            <p className="text-muted-foreground text-base font-pixel-body">
              Transforming businesses with exceptional user experiences and AI solutions.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-pixel-heading text-foreground tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary font-pixel-body">
                      AI Integration
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary font-pixel-body">
                      UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary font-pixel-body">
                      User Research
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary font-pixel-body">
                      Data Analytics
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-pixel-heading text-foreground tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#about" className="text-base text-muted-foreground hover:text-primary font-pixel-body">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary font-pixel-body">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary font-pixel-body">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-base text-muted-foreground hover:text-primary font-pixel-body"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-pixel-heading text-foreground tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary font-pixel-body">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary font-pixel-body">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-pixel-heading text-foreground tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary font-pixel-body">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary font-pixel-body">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary/20 pt-8">
          <p className="text-base text-muted-foreground xl:text-center font-pixel-body">
            &copy; {new Date().getFullYear()} BDSM Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


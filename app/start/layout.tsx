import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P, VT323 } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const pixelHeading = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel-heading",
})

const pixelBody = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel-body",
})

export const metadata: Metadata = {
  title: "BDSM Software | Exceptional UX & AI Solutions",
  description: "We specialize in providing exceptional User Experiences and implementing AI in your business.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pixelHeading.variable} ${pixelBody.variable} font-pixel-body`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


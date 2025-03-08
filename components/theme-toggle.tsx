"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 flex items-center justify-center rounded-md bg-background border border-primary/20 hover:bg-primary/10 transition-colors pixel-corners"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] absolute transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="h-[1.2rem] w-[1.2rem] absolute transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}


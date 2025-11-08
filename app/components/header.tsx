"use client"

import Link from "next/link"
import { useTheme } from "@/app/theme-provider"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const { isDarkMode, setIsDarkMode } = useTheme()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Features", href: "/features" },
    { label: "Modules", href: "/modules" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ]

  const isAuthPage = pathname === "/login" || pathname === "/signup"
  const isDashboardPage = pathname?.startsWith("/dashboard")

  if (isAuthPage || isDashboardPage) return null

  return (
    <nav className="fixed top-0 w-full bg-background/30 backdrop-blur-2xl border-b border-border/20 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MA%20logo-oatFWaarmhgjUWB1nXJZot5j3iJfb6.png"
              alt="MARKET-AI Logo"
              className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-bold text-lg gradient-text-animated hidden sm:inline">MARKET-AI</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 hover:bg-muted rounded-lg transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link href="/signup">
              <Button className="hidden md:inline-flex bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 text-primary-foreground">
                Get Started
              </Button>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/signup" className="block">
              <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

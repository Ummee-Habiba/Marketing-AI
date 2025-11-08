"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const testimonials = [
    {
      name: "Ayesha Khan",
      role: "Founder, Digital Solutions Pakistan",
      company: "Digital Solutions",
      content:
        "MARKET-AI transformed how we manage marketing. We saved 20 hours per week and increased engagement by 60%. Highly recommended!",
      location: "Karachi, Pakistan",
      rating: 5,
      metrics: "60% engagement increase",
    },
    {
      name: "Hassan Ahmed",
      role: "Marketing Director, TechStartup Inc",
      company: "TechStartup Inc",
      content:
        "The automation features are incredible. Our campaigns now run themselves while we focus on strategy. Best investment for our business.",
      location: "Islamabad, Pakistan",
      rating: 5,
      metrics: "80% time saved",
    },
    {
      name: "Maria Rodriguez",
      role: "E-commerce Owner, StyleHub",
      company: "StyleHub",
      content:
        "Finally, a platform that understands small business needs. The pricing is fair and the results are phenomenal.",
      location: "Barcelona, Spain",
      rating: 5,
      metrics: "3x ROI improvement",
    },
    {
      name: "Fatima Ali",
      role: "Social Media Manager, BrandWorks",
      company: "BrandWorks",
      content:
        "The AI content generator saves me hours every day. The quality is impressive and it really understands our brand voice.",
      location: "Dubai, UAE",
      rating: 5,
      metrics: "15 hours saved weekly",
    },
    {
      name: "Ahmed Hassan",
      role: "CEO, GrowthHub Marketing",
      company: "GrowthHub Marketing",
      content:
        "We've scaled our client base by 200% using MARKET-AI. The ROI tracking is phenomenal and clients love the results.",
      location: "Lahore, Pakistan",
      rating: 5,
      metrics: "200% client growth",
    },
    {
      name: "Sofia Chen",
      role: "Founder, TechFemme",
      company: "TechFemme",
      content:
        "As a startup founder, MARKET-AI is a game-changer. We get enterprise-level marketing without the enterprise-level costs.",
      location: "Singapore",
      rating: 5,
      metrics: "$150K revenue in 6 months",
    },
  ]

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} min-h-screen bg-background text-foreground transition-colors duration-500`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/30 backdrop-blur-2xl border-b border-border/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MA%20logo-oatFWaarmhgjUWB1nXJZot5j3iJfb6.png"
                alt="MARKET-AI"
                className="w-10 h-10"
              />
              <span className="font-bold text-xl">MARKET-AI</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2.5 hover:bg-muted rounded-lg">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link href="/">
                <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground">Back Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Testimonials</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real success stories from teams using MARKET-AI worldwide
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-accent text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm mb-4 text-muted-foreground italic leading-relaxed">"{testimonial.content}"</p>
                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-accent font-semibold mt-2">{testimonial.metrics}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="text-lg font-semibold text-foreground mb-2">✨ Automate Everything, Focus on Growth ✨</p>
          <p>&copy; 2025 MARKET-AI. Empowering marketers worldwide.</p>
        </div>
      </footer>
    </div>
  )
}

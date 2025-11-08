"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon, Brain, Zap, Users, BarChart3, Settings, Gauge, TrendingUp, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const features = [
    {
      icon: Brain,
      title: "AI Content Generators",
      description: "PostGPT, AdGPT, BlogGPT, EmailGPT, and OutreachGPT create compelling content automatically",
      details: [
        "Generate 100+ pieces of content daily",
        "Maintains brand voice consistency",
        "SEO-optimized by default",
        "Multi-language support",
      ],
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Auto-post to multiple platforms and let engagement bots handle interactions 24/7",
      details: [
        "Schedule posts across 10+ platforms",
        "Automatic engagement bot responses",
        "Optimal posting time calculation",
        "Campaign workflow automation",
      ],
    },
    {
      icon: Users,
      title: "Lead Management",
      description: "Scrape leads from social platforms and organize them in our integrated CRM",
      details: [
        "LinkedIn & Twitter lead scraping",
        "Automated lead scoring",
        "CRM integration",
        "Follow-up automation",
      ],
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor campaign performance with comprehensive dashboards and insights",
      details: [
        "Real-time performance tracking",
        "ROI calculation & reporting",
        "Competitor analysis",
        "Custom report generation",
      ],
    },
    {
      icon: Settings,
      title: "User Control & Toggle System",
      description: "Enable/disable modules ON/OFF and customize your brand tone",
      details: [
        "Toggle features individually",
        "Brand tone customization",
        "Campaign preferences",
        "Integration controls",
      ],
    },
    {
      icon: Gauge,
      title: "Competitor Insights",
      description: "Track competitor campaigns and engagement patterns automatically",
      details: [
        "Competitor tracking dashboard",
        "Engagement pattern analysis",
        "Content strategy comparison",
        "Market intelligence reports",
      ],
    },
    {
      icon: TrendingUp,
      title: "AI Trend Analyzer",
      description: "Continuously learns from new marketing trends to improve content",
      details: [
        "Real-time trend detection",
        "Trending topic integration",
        "Hashtag recommendations",
        "Viral content prediction",
      ],
    },
    {
      icon: Rocket,
      title: "GPT Retraining",
      description: "System automatically retrains and adapts models based on performance",
      details: [
        "Continuous model optimization",
        "Performance-based learning",
        "Custom model training",
        "A/B testing capabilities",
      ],
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Powerful Features</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools designed to automate your entire marketing workflow
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                      <Icon className="text-accent" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.details.map((detail, didx) => (
                      <li key={didx} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
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

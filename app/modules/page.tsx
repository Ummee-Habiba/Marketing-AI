"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon, Sparkles, Zap, TrendingUp, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ModulesPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const modules = [
    {
      title: "Content Generator",
      description: "Generate customized posts, ads, blogs, emails, and DMs ready for publishing",
      icon: Sparkles,
      color: "from-blue-500/20 to-cyan-500/20",
      features: ["5 AI Models", "Custom Tone", "Multi-Platform", "Instant Publication"],
    },
    {
      title: "Automation System",
      description: "Post at optimal times and increase engagement through automated conversations",
      icon: Zap,
      color: "from-purple-500/20 to-pink-500/20",
      features: ["Smart Scheduler", "Auto Engagement", "24/7 Operation", "Platform Sync"],
    },
    {
      title: "Lead Manager",
      description: "Gather and organize leads into a CRM for effortless follow-up",
      icon: TrendingUp,
      color: "from-blue-500/20 to-indigo-500/20",
      features: ["Lead Scoring", "CRM Integration", "Auto Follow-up", "Export Ready"],
    },
    {
      title: "Analytics Dashboard",
      description: "Monitor campaign performance and track competitor actions in real-time",
      icon: BarChart3,
      color: "from-cyan-500/20 to-blue-500/20",
      features: ["Real-time Reports", "ROI Tracking", "Competitor Analysis", "Custom Metrics"],
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Core Modules</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four powerful systems working together to automate your entire marketing workflow
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, idx) => {
              const Icon = module.icon
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl border border-border/50 bg-gradient-to-br ${module.color} backdrop-blur-sm hover:border-accent/50 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10">
                      <Icon className="text-accent" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                      <p className="text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {module.features.map((feature, fidx) => (
                      <div key={fidx} className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
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

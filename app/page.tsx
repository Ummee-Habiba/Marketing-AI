"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  Sun,
  Moon,
  Zap,
  BarChart3,
  Brain,
  Users,
  ArrowRight,
  Check,
  Sparkles,
  TrendingUp,
  Rocket,
  Settings,
  Gauge,
  Globe,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
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
      image: "/ai-content-generation-interface-with-colorful-text.jpg",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Auto-post to multiple platforms and let engagement bots handle interactions 24/7",
      image: "/automation-workflow-dashboard-with-arrows-and-icon.jpg",
    },
    {
      icon: Users,
      title: "Lead Management",
      description: "Scrape leads from social platforms and organize them in our integrated CRM",
      image: "/crm-interface-showing-lead-management-system.jpg",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor campaign performance with comprehensive dashboards and insights",
      image: "/analytics-dashboard.png",
    },
    {
      icon: Settings,
      title: "User Control & Toggle System",
      description: "Enable/disable modules ON/OFF and customize your brand tone (Formal, Casual, Humorous)",
      image: "/settings-panel-with-toggles-and-controls.jpg",
    },
    {
      icon: Gauge,
      title: "Competitor Insights",
      description: "Track competitor campaigns and engagement patterns automatically for strategic advantage",
      image: "/competitor-analysis-dashboard-with-metrics.jpg",
    },
    {
      icon: TrendingUp,
      title: "AI Trend Analyzer",
      description: "Continuously learns from new marketing trends to improve content results and stay ahead",
      image: "/trend-analysis-with-market-indicators.jpg",
    },
    {
      icon: Rocket,
      title: "GPT Retraining",
      description: "System automatically retrains and adapts models based on campaign performance",
      image: "/machine-learning-training-model-visualization.jpg",
    },
  ]

  const modules = [
    {
      title: "Content Generator",
      description: "Generate customized posts, ads, blogs, emails, and DMs ready for publishing",
      icon: Sparkles,
      color: "from-blue-500/20 to-cyan-500/20",
      image: "/content-creation-ai-interface.jpg",
    },
    {
      title: "Automation System",
      description: "Post at optimal times and increase engagement through automated conversations",
      icon: Zap,
      color: "from-purple-500/20 to-pink-500/20",
      image: "/automated-scheduling-calendar-system.jpg",
    },
    {
      title: "Lead Manager",
      description: "Gather and organize leads into a CRM for effortless follow-up",
      icon: TrendingUp,
      color: "from-blue-500/20 to-indigo-500/20",
      image: "/crm-lead-management-interface.jpg",
    },
    {
      title: "Analytics Dashboard",
      description: "Monitor campaign performance and track competitor actions in real-time",
      icon: BarChart3,
      color: "from-cyan-500/20 to-blue-500/20",
      image: "/real-time-analytics-dashboard.png",
    },
  ]

  const techStack = [
    {
      model: "GPT-4",
      description: "Content Generation",
      detail: "Writes all posts, ads, emails, and blogs with human-like quality",
    },
    {
      model: "DistilBERT",
      description: "Brand Tone Analysis",
      detail: "Checks and maintains consistency with your brand voice and tone",
    },
    {
      model: "XGBoost",
      description: "Lead Scoring",
      detail: "Ranks leads as Hot/Warm/Cold for intelligent outreach prioritization",
    },
    {
      model: "Smart Scheduler",
      description: "Optimal Post Timing",
      detail: "Posts content at the perfect times for maximum audience engagement",
    },
  ]

  const sdgGoals = [
    {
      icon: Rocket,
      sdg: "SDG 8",
      title: "Decent Work & Economic Growth",
      description: "Helps startups and small businesses grow through accessible AI marketing tools",
    },
    {
      icon: Leaf,
      sdg: "SDG 9",
      title: "Industry, Innovation & Infrastructure",
      description: "Promotes innovation in digital marketing technology and automation",
    },
    {
      icon: Globe,
      sdg: "SDG 4",
      title: "Quality Education",
      description: "Educates marketers and business owners on AI-powered marketing automation",
    },
  ]

  const blogs = [
    {
      id: 1,
      title: "26 Best AI Marketing Tools I'm Using to Get Ahead in 2025",
      excerpt:
        "Discover the most powerful AI marketing tools transforming how businesses reach their customers and drive results.",
      category: "AI Tools",
      date: "2025",
      readTime: "8 min read",
      link: "https://www.marketermilk.com/blog/ai-marketing-tools",
      image: "/ai-marketing-trends-futuristic-dashboard.jpg",
      author: "Marketer Milk",
    },
    {
      id: 2,
      title: "5 AI Marketing Trends to Watch in 2025",
      excerpt:
        "Learn about hyper-personalization, AI-powered content creation, and how these trends will impact your marketing strategy.",
      category: "Trends",
      date: "2025",
      readTime: "6 min read",
      link: "https://www.wordstream.com/blog/ai-marketing-trends-2025",
      image: "/marketing-roi-automation-analytics.jpg",
      author: "WordStream",
    },
    {
      id: 3,
      title: "AI Marketing Automation: The Future of Conversion Marketing",
      excerpt:
        "Explore how AI automation is revolutionizing lead generation, conversion optimization, and customer engagement.",
      category: "Automation",
      date: "2025",
      readTime: "7 min read",
      link: "https://www.leadpages.com/blog/ai-marketing-automation",
      image: "/lead-generation-funnel-conversion.jpg",
      author: "Leadpages",
    },
    {
      id: 4,
      title: "10 Marketing Automation Trends To Learn in 2025",
      excerpt:
        "Master the essential marketing automation trends that will help you stay competitive and scale your business.",
      category: "Strategy",
      date: "2025",
      readTime: "9 min read",
      link: "https://www.factors.ai/blog/10-marketing-automation-trends-to-learn-and-copy-in-2024",
      image: "/social-media-calendar.png",
      author: "Factors.ai",
    },
  ]

  const testimonials = [
    {
      name: "Ayesha Khan",
      role: "Founder, Digital Solutions Pakistan",
      company: "Digital Solutions",
      content:
        "MARKET-AI transformed how we manage marketing. We saved 20 hours per week and increased engagement by 60%. Highly recommended!",
      location: "Karachi, Pakistan",
      avatar: "/professional-woman-business-owner.png",
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
      avatar: "/professional-marketing-director.png",
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
      avatar: "/professional-woman-entrepreneur.png",
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
      avatar: "/professional-woman-business-owner.png",
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
      avatar: "/professional-marketing-director.png",
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
      avatar: "/professional-woman-entrepreneur.png",
      rating: 5,
      metrics: "$150K revenue in 6 months",
    },
  ]

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Modules", href: "#modules" },
    { label: "Technology", href: "#technology" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} min-h-screen bg-background text-foreground transition-colors duration-500`}
    >
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-5 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <nav className="fixed top-0 w-full bg-background/30 backdrop-blur-2xl border-b border-border/20 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MA%20logo-oatFWaarmhgjUWB1nXJZot5j3iJfb6.png"
                alt="MARKET-AI Logo"
                className="w-10 h-10"
              />
              <span className="font-bold text-xl gradient-text-animated">MARKET-AI</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200 relative group cursor-pointer"
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault()
                      const element = document.querySelector(item.href)
                      element?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </a>
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
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors cursor-pointer"
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault()
                      const element = document.querySelector(item.href)
                      element?.scrollIntoView({ behavior: "smooth" })
                    }
                    setIsMenuOpen(false)
                  }}
                >
                  {item.label}
                </a>
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

      <section className="relative pt-32 pb-20 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm">
                <Sparkles size={16} className="text-accent" />
                <span className="text-sm font-semibold text-accent">Powered by Advanced AI Models</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight gradient-text-animated">
                Crafting Experiences, Delivering Success
              </h1>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Transform your marketing with AI-powered automation. From content creation to lead management, MARKET-AI
                handles the complexity while you focus on strategy and growth.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary-foreground flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Quality Assurance</h3>
                    <p className="text-sm text-foreground/60">
                      Every campaign is optimized for maximum performance and ROI
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary-foreground flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Certified Professionals</h3>
                    <p className="text-sm text-foreground/60">Built by marketing experts with proven track records</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary-foreground flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Real Experiences</h3>
                    <p className="text-sm text-foreground/60">
                      Trusted by hundreds of businesses across Pakistan and globally
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button className="h-12 text-base bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 text-primary-foreground">
                    Get Started
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="h-12 text-base border-border/50 hover:bg-muted/50 bg-transparent hover:border-accent/50 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portrait-woman-with-ai-enhanced-body-iu7srRAMHvXE9DH0Sja6yTbm2UPSgi.jpg"
                  alt="AI-Powered Marketing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-8 left-8 bg-accent/95 backdrop-blur-sm rounded-2xl px-6 py-4 text-primary-foreground font-bold text-lg animate-float">
                  Powered by AI
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-2xl font-bold gradient-text">80%</p>
                <p className="text-xs text-foreground/60">Time Saved</p>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="text-2xl font-bold gradient-text">45%</p>
                <p className="text-xs text-foreground/60">More Engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to scale your marketing without complexity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-xl overflow-hidden cursor-pointer animate-slide-in-left"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="h-40 bg-muted overflow-hidden relative">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-accent group-hover:text-primary transition-colors duration-300" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="modules" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Modules</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four powerful systems working together to automate your marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, idx) => {
              const ModuleIcon = module.icon
              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl border border-border/50 bg-gradient-to-br ${module.color} backdrop-blur-sm p-8 hover:border-accent/70 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-module-float`}
                  style={{
                    animationDelay: `${idx * 0.15}s`,
                    animationDuration: `${3 + idx * 0.2}s`,
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl overflow-hidden">
                    <img
                      src={module.image || "/placeholder.svg"}
                      alt={module.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 w-fit mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                        <ModuleIcon
                          className="text-accent group-hover:text-primary transition-colors duration-300"
                          size={32}
                        />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                        {module.title}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                        {module.description}
                      </p>
                    </div>
                    <div className="flex items-center text-accent font-semibold group-hover:text-primary transition-colors duration-300 mt-6">
                      Learn more
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="technology" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced Technology Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built on cutting-edge AI models and machine learning algorithms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-2 text-accent group-hover:text-primary transition-colors duration-300">
                  {tech.model}
                </h3>
                <p className="font-semibold text-foreground mb-3">{tech.description}</p>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  {tech.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contributing to Global Impact</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Supporting UN Sustainable Development Goals through innovative technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sdgGoals.map((goal, idx) => {
              const GoalIcon = goal.icon
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 w-fit mr-4">
                      <GoalIcon
                        className="text-accent group-hover:text-primary transition-colors duration-300"
                        size={32}
                      />
                    </div>
                    <span className="text-3xl font-bold text-accent group-hover:text-primary transition-colors duration-300">
                      {goal.sdg}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                    {goal.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Blog Posts</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert insights on AI-powered marketing and automation strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogs.map((blog, idx) => (
              <a
                key={blog.id}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-xl cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48 bg-muted">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">By {blog.author}</span>
                    <span className="text-xs text-accent">Read →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Marketers Worldwide</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real success stories from teams using MARKET-AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-accent text-sm">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-sm mb-4 text-muted-foreground italic leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground truncate">{testimonial.company}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold text-accent">{testimonial.metrics}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$49",
                description: "Perfect for getting started",
                features: ["5 Content Generators", "Basic Analytics", "Email Support", "Up to 10 Campaigns"],
              },
              {
                name: "Professional",
                price: "$149",
                description: "For growing businesses",
                features: [
                  "Unlimited Content",
                  "Advanced Analytics",
                  "Priority Support",
                  "Unlimited Campaigns",
                  "Lead Management",
                ],
                featured: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large teams",
                features: ["Everything Pro", "Custom Integrations", "24/7 Support", "Dedicated Manager"],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl border transition-all duration-300 animate-fade-in-up ${
                  plan.featured
                    ? "border-accent/50 ring-2 ring-accent/20 scale-105 bg-gradient-to-br from-card to-card/50"
                    : "border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/50 hover:shadow-xl"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-4xl font-bold mb-6 gradient-text-animated">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-sm text-muted-foreground">/mo</span>}
                </div>
                <ul className="space-y-3 mb-8 text-sm text-left">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center">
                      <Check className="text-accent mr-3 flex-shrink-0" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/signup">
                  <Button
                    className={`w-full ${
                      plan.featured ? "bg-gradient-to-r from-primary to-accent" : "bg-primary hover:bg-accent"
                    } text-primary-foreground transition-all duration-300 hover:shadow-lg`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-accent/10 to-transparent rounded-3xl p-12 md:p-16 border border-accent/30 backdrop-blur-sm animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses across Pakistan and worldwide using MARKET-AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button className="h-12 text-base bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 text-primary-foreground">
                Start Your Free Trial
                <Rocket className="ml-2" size={20} />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="h-12 text-base border-border/50 hover:bg-muted/50 bg-transparent hover:border-accent/50 transition-all duration-300"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Rocket size={20} className="text-white" />
                </div>
                <span className="font-bold text-lg">MARKET-AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your AI-powered marketing engine for startups and small businesses.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-accent transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-accent transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#modules" className="hover:text-accent transition-colors">
                    Modules
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#blog" className="hover:text-accent transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p className="text-lg font-semibold text-foreground mb-2">✨ Automate Everything, Focus on Growth ✨</p>
            <p>&copy; 2025 MARKET-AI. Empowering marketers worldwide with AI-powered automation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

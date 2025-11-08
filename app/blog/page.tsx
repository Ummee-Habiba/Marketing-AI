"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

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
      author: "Factors.ai",
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest Blog Posts</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights on AI-powered marketing and automation strategies
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <a
                key={blog.id}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col"
              >
                <div className="relative overflow-hidden h-48 bg-muted">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-accent/40">{blog.id}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{blog.excerpt}</p>
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

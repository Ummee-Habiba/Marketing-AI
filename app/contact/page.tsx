"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setLoading(false)
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about MARKET-AI? We're here to help. Reach out to our team and we'll respond as soon as
              possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "support@market-ai.com",
                desc: "We typically respond within 24 hours",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+92 (300) MARKET-AI",
                desc: "Monday to Friday, 9 AM to 6 PM PKT",
              },
              {
                icon: MapPin,
                title: "Office",
                value: "Islamabad, Pakistan",
                desc: "NUML, Faculty of Engineering & CS",
              },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 w-fit mb-4">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                  <p className="font-semibold text-accent mb-2">{contact.value}</p>
                  <p className="text-sm text-muted-foreground">{contact.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {submitted && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400">
                    Thank you! We've received your message and will get back to you soon.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold h-12 hover:shadow-lg transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How do I get started with MARKET-AI?",
                    a: "Sign up for a free account, and our onboarding guide will walk you through setup. Most users are ready in under 10 minutes.",
                  },
                  {
                    q: "What platforms does MARKET-AI support?",
                    a: "We support Facebook, Instagram, Twitter, LinkedIn, TikTok, and more. Check our documentation for the complete list.",
                  },
                  {
                    q: "Can I cancel my subscription anytime?",
                    a: "Yes! You can cancel your subscription anytime without penalties. No long-term contracts.",
                  },
                  {
                    q: "Is there a free trial available?",
                    a: "Start with our free tier to explore features. Upgrade whenever you're ready.",
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
                  >
                    <h3 className="font-bold mb-2 text-accent">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-border py-16 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="text-lg font-semibold text-foreground mb-2">✨ Automate Everything, Focus on Growth ✨</p>
          <p>&copy; 2025 MARKET-AI. Empowering marketers worldwide.</p>
        </div>
      </footer>
    </div>
  )
}

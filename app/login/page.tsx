"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    if (!formData.email || !formData.password) {
      setMessage({ type: "error", text: "Email and password are required" })
      return
    }

    setLoading(true)
    try {
      const supabase = createClient()
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) {
        setMessage({ type: "error", text: error.message })
      } else {
        setMessage({ type: "success", text: "Login successful! Redirecting..." })
        setTimeout(() => {
          window.location.href = "/dashboard"
        }, 1000)
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred. Please try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-accent via-primary to-blue-600 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>

        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sign-45c6ITRqsOBi8h4BxXzgIn6LNw9MPr.jpg"
          alt="Team collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative z-10 text-center px-8">
          <div className="mb-8 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4 text-slate-900">Welcome Back</h2>
            <p className="text-xl text-slate-800">Access Your Marketing Dashboard & Automate Your Campaigns</p>
          </div>
          <div className="space-y-6 text-left max-w-md">
            {[
              { stat: "500+", label: "Active Users" },
              { stat: "1M+", label: "Posts Scheduled" },
              { stat: "45%", label: "Avg Engagement Lift" },
              { stat: "$2M+", label: "Total ROI Generated" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-slate-900/20 flex items-center justify-center">
                  <span className="font-bold text-lg text-slate-900">{item.stat}</span>
                </div>
                <span className="text-slate-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MA%20logo-oatFWaarmhgjUWB1nXJZot5j3iJfb6.png"
                alt="MARKET-AI Logo"
                className="w-14 h-14"
              />
              <span className="font-bold text-2xl gradient-text">MARKET-AI</span>
            </Link>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">Password</label>
              </div>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {message && (
              <div
                className={`p-4 rounded-lg flex items-center gap-3 animate-fade-in-up ${
                  message.type === "error"
                    ? "bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400"
                    : "bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400"
                }`}
              >
                <AlertCircle size={20} className="flex-shrink-0" />
                <span className="text-sm">{message.text}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 text-primary-foreground font-semibold"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="mr-2 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={20} className="ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:text-accent font-semibold transition-colors">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "./theme-provider"
import { Header } from "./components/header"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MARKET-AI - AI-Powered Marketing Automation Platform",
  description:
    "Automate your entire marketing workflow with AI. Generate content, schedule posts, manage leads, and track analytics all in one platform designed for startups and small businesses in Pakistan and worldwide.",
  keywords: [
    "marketing automation",
    "AI marketing",
    "content generation",
    "social media scheduling",
    "lead management",
    "marketing platform",
    "Pakistan marketing tools",
    "small business marketing",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MARKET-AI",
              description: "AI-powered marketing automation platform",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

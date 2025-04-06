import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tech and Talk - Tech News, Coding, Gadgets & Tutorials",
  description:
    "Join Tech and Talk for the latest in tech news, coding tutorials, gadget reviews, and more. Subscribe for weekly content!",
  keywords: ["tech news", "coding tutorials", "gadget reviews", "tech youtube channel"],
  authors: [{ name: "Tech and Talk" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techandtalk.com",
    title: "Tech and Talk - Tech News, Coding, Gadgets & Tutorials",
    description: "Join Tech and Talk for the latest in tech news, coding tutorials, gadget reviews, and more.",
    siteName: "Tech and Talk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech and Talk - Tech News, Coding, Gadgets & Tutorials",
    description: "Join Tech and Talk for the latest in tech news, coding tutorials, gadget reviews, and more.",
    creator: "@techandtalk",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
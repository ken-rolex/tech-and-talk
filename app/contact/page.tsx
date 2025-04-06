"use client"

import { Button } from "@/components/ui/button"
import { Youtube, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { GlassCard } from "@/components/ui/cards/glass-card"
import { FloatingLabelInput } from "@/components/ui/input/floating-label-input"
import { FloatingLabelTextarea } from "@/components/ui/input/floating-label-textarea"
import { GlowButton } from "@/components/ui/buttons/glow-button"

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">
        <FadeIn className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Have a question or want to collaborate? Get in touch with us.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal direction="left">
            <GlassCard className="space-y-6 p-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Send a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>
              <form className="space-y-4">
                <div className="space-y-2">
                  <FloatingLabelInput id="name" label="Name" />
                </div>
                <div className="space-y-2">
                  <FloatingLabelInput id="email" type="email" label="Email" />
                </div>
                <div className="space-y-2">
                  <FloatingLabelTextarea id="message" label="Message" className="min-h-[150px]" />
                </div>
                <GlowButton type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </GlowButton>
              </form>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <GlassCard className="space-y-6 p-6 h-full">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Connect With Us</h2>
                <p className="text-muted-foreground">Follow us on social media or reach out directly.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@techandtalk.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Social Media</h3>
                <div className="flex gap-4">
                  <Link href="https://youtube.com/@techandtalk" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="YouTube Channel"
                      className="hover:text-primary hover:border-primary transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://twitter.com/techandtalk" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Twitter"
                      className="hover:text-primary hover:border-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://instagram.com/techandtalk" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Instagram"
                      className="hover:text-primary hover:border-primary transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/company/techandtalk" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="LinkedIn"
                      className="hover:text-primary hover:border-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div id="newsletter" className="space-y-4 rounded-lg border p-6 bg-primary/5">
                <h3 className="text-lg font-medium">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-muted-foreground">
                  Get the latest updates, videos, and blog posts delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <FloatingLabelInput label="Your email address" />
                  <GlowButton type="submit">Subscribe</GlowButton>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}


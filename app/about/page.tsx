"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggeredChildren } from "@/components/animations/staggered-children"
import { StaggeredChild } from "@/components/animations/staggered-child"
import { TiltCard } from "@/components/animations/tilt-card"
import { GlassCard } from "@/components/ui/cards/glass-card"
import { BounceButton } from "@/components/ui/buttons/bounce-button"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-12">
        <FadeIn className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Tech and Talk</h1>
          <p className="text-xl text-muted-foreground">Exploring the intersection of technology and conversation</p>
        </FadeIn>

        <ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <TiltCard className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Channel Creator"
                  width={600}
                  height={600}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </TiltCard>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Meet the Creator</h2>
              <p className="text-muted-foreground">
                Hi there! I'm the creator behind Tech and Talk. With over 10 years of experience in the tech industry,
                I've worked as a software developer, product manager, and tech consultant before starting this channel.
              </p>
              <p className="text-muted-foreground">
                My passion is making technology accessible and understandable for everyone, whether you're a seasoned
                developer or just getting started with tech.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">What Tech and Talk is About</h2>
            <StaggeredChildren className="grid gap-6 sm:grid-cols-2">
              <StaggeredChild>
                <GlassCard className="space-y-3 p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold">Tech News</h3>
                  <p className="text-muted-foreground">
                    Stay up-to-date with the latest happenings in the tech world, from product launches to industry
                    trends.
                  </p>
                </GlassCard>
              </StaggeredChild>
              <StaggeredChild>
                <GlassCard className="space-y-3 p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold">Coding Tutorials</h3>
                  <p className="text-muted-foreground">
                    Learn to code with step-by-step tutorials covering web development, mobile apps, and more.
                  </p>
                </GlassCard>
              </StaggeredChild>
              <StaggeredChild>
                <GlassCard className="space-y-3 p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold">Gadget Reviews</h3>
                  <p className="text-muted-foreground">
                    Honest reviews of the latest smartphones, laptops, smart home devices, and other tech gadgets.
                  </p>
                </GlassCard>
              </StaggeredChild>
              <StaggeredChild>
                <GlassCard className="space-y-3 p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold">Tech Tips</h3>
                  <p className="text-muted-foreground">
                    Practical advice and tips to help you get the most out of your devices and software.
                  </p>
                </GlassCard>
              </StaggeredChild>
            </StaggeredChildren>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              At Tech and Talk, our mission is to demystify technology and make it accessible to everyone. We believe
              that understanding technology is essential in today's digital world, and we're committed to creating
              content that educates, informs, and entertains.
            </p>
            <p className="text-muted-foreground">
              Whether you're a tech enthusiast, a professional in the industry, or someone who's just curious about how
              things work, Tech and Talk is here to guide you through the ever-evolving landscape of technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex justify-center">
          <Link href="/contact">
            <BounceButton className="gap-2">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </BounceButton>
          </Link>
        </div>
      </div>
    </div>
  )
}


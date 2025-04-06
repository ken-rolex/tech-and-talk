"use client"

import { YoutubeEmbed } from "@/components/youtube-embed"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggeredChildren } from "@/components/animations/staggered-children"
import { StaggeredChild } from "@/components/animations/staggered-child"
import { FadeIn } from "@/components/animations/fade-in"

export default function VideosPage() {
  // This would typically come from an API or CMS
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Latest Tech News Roundup - April 2023" },
    { id: "dQw4w9WgXcQ", title: "Coding Tutorial: Build a React App from Scratch" },
    { id: "dQw4w9WgXcQ", title: "New Gadget Review: Latest Smartphone Comparison" },
    { id: "dQw4w9WgXcQ", title: "How to Set Up Your Development Environment" },
    { id: "dQw4w9WgXcQ", title: "Tech Tips: Boost Your Productivity with These Tools" },
    { id: "dQw4w9WgXcQ", title: "The Future of AI: What You Need to Know" },
    { id: "dQw4w9WgXcQ", title: "Building a Personal Website with Next.js" },
    { id: "dQw4w9WgXcQ", title: "Smart Home Setup Guide for Beginners" },
    { id: "dQw4w9WgXcQ", title: "Cybersecurity Basics Everyone Should Know" },
  ]

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="space-y-8">
        <FadeIn className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Videos</h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Watch our latest tech videos, tutorials, and reviews
          </p>
        </FadeIn>

        <ScrollReveal>
          <StaggeredChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <StaggeredChild key={video.id + video.title} className="group">
                <div className="card-zoom">
                  <YoutubeEmbed videoId={video.id} title={video.title} />
                </div>
              </StaggeredChild>
            ))}
          </StaggeredChildren>
        </ScrollReveal>
      </div>
    </div>
  )
}


"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggeredChildren } from "@/components/animations/staggered-children"
import { StaggeredChild } from "@/components/animations/staggered-child"
import { TiltCard } from "@/components/ui/cards/tilt-card"

export default function BlogPage() {
  // This would typically come from an API or CMS
  const posts = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js: A Beginner's Guide",
      date: "April 12, 2023",
      summary: "Learn how to build modern web applications with Next.js, from setup to deployment.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "best-coding-practices",
      title: "10 Best Coding Practices Every Developer Should Know",
      date: "March 28, 2023",
      summary: "Improve your code quality and efficiency with these essential coding practices.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "ai-tools-for-developers",
      title: "AI Tools That Are Changing How Developers Work",
      date: "March 15, 2023",
      summary: "Discover how artificial intelligence is transforming the development workflow.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "smartphone-buying-guide",
      title: "The Ultimate Smartphone Buying Guide for 2023",
      date: "February 22, 2023",
      summary: "Everything you need to know before purchasing your next smartphone.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "web-performance-optimization",
      title: "Web Performance Optimization Techniques",
      date: "February 10, 2023",
      summary: "Learn how to make your websites faster and provide a better user experience.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "future-of-tech",
      title: "The Future of Technology: Trends to Watch",
      date: "January 30, 2023",
      summary: "Explore the emerging technologies that will shape our digital future.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="space-y-8">
        <FadeIn className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Read our latest articles on tech news, coding tutorials, and gadget reviews
          </p>
        </FadeIn>

        <ScrollReveal>
          <StaggeredChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <StaggeredChild key={post.slug}>
                <TiltCard className="h-full">
                  <article className="group relative flex flex-col space-y-2 h-full">
                    <div className="card-zoom">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="card-zoom-image object-cover aspect-video rounded-t-lg"
                      />
                    </div>
                    <div className="flex-1 space-y-2 p-4">
                      <h2 className="text-xl font-bold">{post.title}</h2>
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                      <p className="text-muted-foreground">{post.summary}</p>
                    </div>
                    <div className="p-4 pt-0">
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" className="gap-1 p-0 h-auto font-medium glow-effect">
                          Read More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </article>
                </TiltCard>
              </StaggeredChild>
            ))}
          </StaggeredChildren>
        </ScrollReveal>
      </div>
    </div>
  )
}


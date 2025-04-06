"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-bold">Tech and Talk</span>
          </Link>
          <div className="my-4 h-[1px] w-full bg-border" />
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/videos"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Videos
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold">Tech and Talk</span>
      </Link>
    </div>
  )
}


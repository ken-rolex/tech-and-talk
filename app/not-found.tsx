"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-6 py-12 text-center">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="space-y-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.2,
          }}
        >
          <motion.h1
            className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl text-primary"
            animate={{
              textShadow: [
                "0 0 5px rgba(124, 58, 237, 0)",
                "0 0 20px rgba(124, 58, 237, 0.5)",
                "0 0 5px rgba(124, 58, 237, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            404
          </motion.h1>
          <h2 className="text-3xl font-bold tracking-tighter">Page Not Found</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </motion.div>
        <Link href="/">
          <Button className="gap-2 animate-pulse-glow">
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}


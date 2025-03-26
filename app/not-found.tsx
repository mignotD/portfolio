'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated 404 */}
        <motion.h1
          className="text-9xl font-bold font-heading text-primary mb-4"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          404
        </motion.h1>

        <motion.h2
          className="text-3xl font-bold text-foreground mb-4 font-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Sorry, the page you&apos;re looking for doesn&apos;t exist. Let me guide you back home.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-primary text-background font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          >
            Go Home
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-all hover:scale-105"
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}

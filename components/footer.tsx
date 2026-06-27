'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { profile } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Single line footer */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-4 font-mono text-sm text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left: Name */}
          <div className="text-foreground">
            Mignot Dansa
          </div>

          {/* Center: Email */}
          <a 
            href="mailto:mignotdansa33@gmail.com"
            className="text-secondary hover:text-foreground transition-colors"
          >
            mignotdansa33@gmail.com
          </a>

          {/* Right: Social links */}
          <div className="flex gap-4">
            {profile.github && profile.github !== 'PLACEHOLDER' && (
              <a 
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            )}
            {profile.github && profile.github !== 'PLACEHOLDER' && profile.linkedin && profile.linkedin !== 'PLACEHOLDER' && (
              <span className="text-muted">·</span>
            )}
            {profile.linkedin && profile.linkedin !== 'PLACEHOLDER' && (
              <a 
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
        </motion.div>

        {/* Copyright line */}
        <motion.div
          className="mt-8 pt-8 border-t border-border text-center font-mono text-xs text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          © {currentYear}
        </motion.div>
      </div>
    </footer>
  )
}

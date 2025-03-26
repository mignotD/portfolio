'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { profile, techMarquee } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background text-foreground pt-20 px-4 overflow-hidden">
      {/* Scroll progress line indicator on left */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary to-transparent opacity-30" />

      <div className="max-w-7xl w-full">
        {/* Main grid: left text, right visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main heading: pure white, very large, weight 900 */}
            <motion.div variants={itemVariants}>
              <h1 className="text-[clamp(72px,11vw,150px)] font-black font-heading leading-[0.88] tracking-tight text-white">
                Mignot<br />Dansa.
              </h1>
            </motion.div>

            {/* Tagline: plain monospace, no animation */}
            <motion.p 
              className="font-mono text-sm text-secondary"
              variants={itemVariants}
            >
              software engineer / full-stack / ai systems
            </motion.p>

            {/* CTA Buttons: outlined, white border, no fill */}
            <motion.div 
              className="flex gap-4 pt-8"
              variants={itemVariants}
            >
              {/* View Work - Outlined white */}
              <Link href="#projects">
                <button className="px-8 py-3 rounded-full border border-white/30 text-white hover:border-white/80 transition-all duration-300 font-medium text-sm">
                  View Work
                </button>
              </Link>

              {/* Hire Me - Outlined white */}
              <Link href="#contact">
                <button className="px-8 py-3 rounded-full border border-white/40 text-white hover:border-white/80 transition-all duration-300 font-medium text-sm">
                  Hire Me
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Subtle grid texture */}
          <motion.div 
            className="relative h-96 hidden lg:flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <svg className="w-full h-full opacity-5" viewBox="0 0 400 400">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
            </svg>
          </motion.div>
        </div>

        {/* Marquee: Tech stack - very subtle */}
        <motion.div 
          className="relative overflow-hidden py-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div 
            className="flex whitespace-nowrap gap-8 text-xs text-muted font-mono"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {/* Duplicate for seamless loop */}
            {[...techMarquee, ...techMarquee].map((tech, idx) => (
              <span key={idx} className="flex-shrink-0">
                · {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

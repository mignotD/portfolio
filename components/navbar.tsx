'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { navSections } from '@/lib/data'

export function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrolledAmount = window.scrollY
      const progress = totalScroll > 0 ? (scrolledAmount / totalScroll) * 100 : 0
      setScrollProgress(progress)
      setScrolled(scrolledAmount > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar - thin line at top */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-white z-50"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* Navbar */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo: MD. */}
          <Link href="#hero" className="font-bold font-heading text-xl text-foreground hover:text-white transition-colors">
            MD.
          </Link>

          {/* Desktop Navigation - section links with numbers */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-mono">
            {navSections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className="text-secondary hover:text-white transition-colors"
                whileHover={{ x: 2 }}
              >
                <span className="text-muted">{section.number}</span> {section.label}
              </motion.a>
            ))}
          </div>

          {/* Hire Me Button - outlined white */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
            <Link href="#contact">
              <button className="px-6 py-2 rounded-full border border-white/40 text-white font-medium text-sm hover:border-white/80 transition-all">
                Hire Me
              </button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="block w-6 h-0.5 bg-foreground rounded"
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span 
              className="block w-6 h-0.5 bg-foreground rounded"
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span 
              className="block w-6 h-0.5 bg-foreground rounded"
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border"
          initial={{ height: 0, opacity: 0 }}
          animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="flex flex-col gap-4 p-6 font-mono text-sm">
            {navSections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className="text-secondary hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-muted">{section.number}</span> {section.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}

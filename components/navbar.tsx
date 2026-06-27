'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { navSections } from '@/lib/data'
import { ThemeToggle } from './theme-toggle'

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          {/* Logo: MD. */}
           <Link href="#hero" className="font-bold font-heading text-lg sm:text-xl text-foreground hover:text-foreground transition-colors">
            MD.
          </Link>

          {/* Desktop Navigation - section links with numbers */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-mono">
            {navSections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className="text-secondary hover:text-foreground transition-colors"
                whileHover={{ x: 2 }}
              >
                <span className="text-muted">{section.number}</span> {section.label}
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle + Hire Me Button + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-foreground/40 text-foreground font-medium text-xs sm:text-sm hover:border-foreground/80 transition-all cursor-pointer whitespace-nowrap"
            >
              Hire Me
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="block w-5 sm:w-6 h-0.5 bg-foreground rounded"
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span 
                className="block w-5 sm:w-6 h-0.5 bg-foreground rounded"
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span 
                className="block w-5 sm:w-6 h-0.5 bg-foreground rounded"
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </motion.button>
          </div>
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
                className="text-secondary hover:text-foreground transition-colors"
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

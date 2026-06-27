'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/lib/data'

const categories = ['all', 'ai', 'fullstack', 'mobile', 'blockchain']

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const featured = projects.find(p => p.featured)
  const others = projects.filter(p => !p.featured)
  const filtered = activeFilter === 'all' 
    ? others 
    : others.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="relative py-16 md:py-24 lg:py-32 px-4 bg-background text-foreground scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="mb-20 border-b border-border pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading text-foreground">
            <span className="text-muted font-mono text-xl">03 —</span> Projects
          </h2>
        </motion.div>

        {/* Featured Project - Full width */}
        {featured && (
          <motion.div 
            className="mb-20 p-8 lg:p-12 rounded-lg bg-card border border-border hover:border-border transition-all group cursor-pointer relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Watermark text in background */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-3">
              <span className="text-9xl font-black text-foreground whitespace-nowrap opacity-[0.03]">{featured.title}</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
              {/* Left: Text content */}
              <div className="lg:w-2/3 space-y-6">
                <div>
                  <p className="text-muted font-mono text-xs mb-3 uppercase tracking-wider">Featured Project</p>
                  <h3 className="text-3xl lg:text-4xl font-bold font-heading text-foreground">
                    {featured.title}
                  </h3>
                  <p className="text-secondary mt-2">{featured.subtitle}</p>
                </div>

                <p className="text-secondary leading-relaxed text-base">
                  {featured.description}
                </p>

                {/* Tech: plain text separated by · */}
                <div className="flex flex-wrap gap-4 font-mono text-xs text-secondary">
                  {featured.tech.map((tech, idx) => (
                    <span key={idx}>
                      {idx > 0 && <span className="mr-4">·</span>}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 pt-2">
                  {featured.liveDemoUrl && featured.liveDemoUrl !== 'PLACEHOLDER' && (
                    <a 
                      href={featured.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-foreground hover:text-foreground text-sm transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  )}
                  {featured.githubUrl && featured.githubUrl !== 'PLACEHOLDER' && (
                    <a 
                      href={featured.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-foreground hover:text-foreground text-sm transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter tabs */}
        <motion.div 
          className="mb-12 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all border ${
                activeFilter === cat
                  ? 'border-foreground text-foreground bg-foreground/5'
                  : 'border-border text-secondary hover:border-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat === 'all' ? 'All' : cat === 'fullstack' ? 'Full-Stack' : cat === 'ai' ? 'AI/ML' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group p-6 rounded-lg bg-card border border-border hover:border-foreground/50 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            >
              {/* Category badge */}
              <p className="text-muted font-mono text-xs mb-3 uppercase tracking-wider">
                {project.categoryLabel}
              </p>

              {/* Title and subtitle */}
              <div className="mb-4">
                <h3 className="text-lg font-bold font-heading text-foreground group-hover:text-foreground transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-secondary text-sm mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Tech tags - first 3 only */}
              <div className="flex flex-wrap gap-1 mb-6">
                {project.tech.slice(0, 3).map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-white/5 text-secondary border border-white/10 rounded group-hover:border-white/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-border/50">
                {project.liveDemoUrl && project.liveDemoUrl !== 'PLACEHOLDER' && (
                  <a 
                    href={project.liveDemoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground hover:text-foreground hover:underline text-xs font-medium transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== 'PLACEHOLDER' && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground hover:text-foreground hover:underline text-xs font-medium transition-colors"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

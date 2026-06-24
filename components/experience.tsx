'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '@/lib/data'

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const current = experience[activeTab]

  return (
    <section id="experience" className="relative py-32 px-4 bg-background text-foreground scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="mb-20 border-b border-border pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold font-heading text-white">
            <span className="text-muted font-mono text-xl">02 —</span> Experience
          </h2>
        </motion.div>

        {/* Tabbed layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Tabs - vertical list */}
          <motion.div 
            className="flex lg:flex-col gap-2 border-b lg:border-b-0 lg:border-r border-border pb-4 lg:pb-0 lg:pr-8 overflow-x-auto lg:overflow-x-visible"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {experience.map((job, idx) => (
              <motion.button
                key={job.id}
                onClick={() => setActiveTab(idx)}
                className={`text-left px-4 py-3 font-mono text-sm whitespace-nowrap lg:whitespace-normal transition-all relative flex-shrink-0 lg:flex-shrink border-l-2 ${
                  activeTab === idx
                    ? 'border-white text-white'
                    : 'border-transparent text-secondary hover:text-foreground'
                }`}
                whileHover={{ x: 2 }}
              >
                <span>{job.company}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Details panel */}
          <motion.div 
            className="lg:col-span-2"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Title and metadata */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold font-heading text-white mb-2">
                    {current.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm font-mono text-secondary">
                    <span>{current.period}</span>
                    <span>·</span>
                    <span>{current.location}</span>
                  </div>
                </div>

                {/* Divider line - subtle */}
                <div className="h-px bg-border" />

                {/* Bullet points */}
                <ul className="space-y-4">
                  {current.bullets.map((bullet, idx) => (
                    <motion.li
                      key={idx}
                      className="flex gap-3 text-secondary leading-relaxed"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.3 }}
                    >
                      <span className="text-secondary flex-shrink-0 mt-0.5">–</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

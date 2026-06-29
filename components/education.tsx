'use client'

import { motion } from 'framer-motion'
import { education } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="relative py-16 md:py-24 lg:py-32 px-4 bg-background text-foreground scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-20 border-b border-border pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading text-foreground">
            <span className="text-muted font-mono text-xl">02 —</span> Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div 
            className="flex lg:flex-col gap-2 border-b lg:border-b-0 lg:border-r border-border pb-4 lg:pb-0 lg:pr-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-left px-4 py-3 font-mono text-sm text-foreground border-l-2 border-foreground">
              <span>{education.school}</span>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-foreground mb-2">
                {education.degree}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm font-mono text-secondary">
                <span>{education.period}</span>
                <span>·</span>
                <span>{education.location}</span>
              </div>
            </div>
            <div className="h-px bg-border" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

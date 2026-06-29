'use client'

import { motion } from 'framer-motion'
import { skillsByCategory } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 lg:py-32 px-4 bg-background text-foreground scroll-mt-24">
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
            <span className="text-muted font-mono text-xl">05 —</span> Skills
          </h2>
        </motion.div>

        {/* Skills by category - horizontal rows */}
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsByCategory.map((category) => (
            <motion.div
              key={category.category}
              className="flex flex-col lg:flex-row lg:items-baseline gap-6 lg:gap-16"
              variants={itemVariants}
            >
              {/* Category label - left, monospace, subtle */}
              <div className="lg:w-1/4 flex-shrink-0">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {category.category}
                </p>
              </div>

              {/* Skills: plain text separated by · */}
              <div className="lg:w-3/4 font-mono text-sm text-secondary leading-relaxed flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="whitespace-nowrap">
                    {idx > 0 && <span className="mr-4">·</span>}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

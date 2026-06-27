'use client'

import { motion } from 'framer-motion'
import { profile, whatIDo } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 px-4 bg-background text-foreground scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header with number */}
        <motion.div 
          className="mb-20 border-b border-border pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading text-foreground">
            <span className="text-muted font-mono text-xl">01 —</span> About
          </h2>
        </motion.div>

        {/* Content grid: left monospace text block, right text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Monospace text block */}
          <motion.div 
            className="font-mono text-sm text-secondary space-y-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-muted">{'$'} whoami</p>
              <p className="text-foreground">— software engineer</p>
            </div>
            <div>
              <p className="text-muted">{'$'} cat ./stack</p>
              <p className="text-foreground">— react · node.js · python · typescript</p>
            </div>
            <div>
              <p className="text-muted">{'$'} echo $status</p>
              <p className="text-foreground">— open to work</p>
            </div>
          </motion.div>

          {/* Right: Bio and what I do */}
          <motion.div 
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Bio paragraph */}
            <motion.p 
              className="text-lg leading-relaxed text-secondary"
              variants={itemVariants}
            >
              {profile.bio}
            </motion.p>

            {/* What I do items */}
            <motion.div className="space-y-8" variants={containerVariants}>
              {whatIDo.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="flex gap-4 items-start group"
                  variants={itemVariants}
                >
                  {/* Hexagon icon */}
                  <div className="flex-shrink-0 pt-0.5">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-full h-full text-foreground" fill="currentColor" opacity="0.5">
                        <path d="M12 2l2 1v4l2 1v4l-2 1v4l-2 1v-4l-2-1v-4l2-1v-4z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-foreground group-hover:text-foreground transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-secondary text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Download CV link */}
            <motion.a 
              href={profile.resumePdf}
              download
              className="inline-flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm transition-colors"
              variants={itemVariants}
              whileHover={{ x: 4 }}
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

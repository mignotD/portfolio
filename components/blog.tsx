'use client'

import { motion } from 'framer-motion'
import { blogPosts } from '@/lib/data'
import Link from 'next/link'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24 lg:py-32 px-4 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20 border-b border-border pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading text-white">
            <span className="text-muted font-mono text-xl">05 —</span> Blog
          </h2>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={item}
              className="group pl-4 py-4 border-l-2 border-border hover:border-foreground transition-all cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-lg font-semibold text-white font-heading">
                    {post.title}
                  </h3>
                </div>
                <div className="flex gap-4 font-mono text-xs text-secondary">
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All CTA - plain text link */}
        <motion.div
          className="flex justify-start mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="/blog"
            className="text-foreground hover:text-white text-sm transition-colors"
          >
            View All Articles →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

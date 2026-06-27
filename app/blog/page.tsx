'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { blogPosts } from '@/lib/data'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar spacer */}
      <div className="h-20" />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/#blog"
          className="font-mono text-sm text-secondary hover:text-foreground transition-colors inline-block mb-12"
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl lg:text-6xl font-bold font-heading text-foreground mb-4">
          Blog
        </h1>
        <p className="text-secondary font-mono text-sm mb-16">
          Thoughts on software engineering, AI, and building things.
        </p>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={item}
              className="pl-4 py-4 border-l-2 border-border hover:border-foreground transition-all"
            >
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground font-heading">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-sm text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
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
      </div>
    </div>
  )
}

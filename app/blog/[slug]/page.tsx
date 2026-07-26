'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/data'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog" className="font-mono text-sm text-secondary hover:text-foreground transition-colors">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  const lines = (post.content || post.excerpt).split('\n')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="h-20" />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="font-mono text-sm text-secondary hover:text-foreground transition-colors inline-block mb-12"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold font-heading text-foreground mb-4 leading-tight">
            {post.title}
          </h1>
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
        </header>

        <div className="prose prose-invert max-w-none">
          {lines.map((line, i) => {
            if (line.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-bold font-heading text-foreground mt-12 mb-4">{line.slice(3)}</h2>
            }
            if (line.startsWith('### ')) {
              return <h3 key={i} className="text-xl font-bold font-heading text-foreground mt-8 mb-3">{line.slice(4)}</h3>
            }
            if (line.startsWith('> ')) {
              return (
                <blockquote key={i} className="border-l-2 border-border pl-4 my-4 text-secondary italic">
                  {line.slice(2)}
                </blockquote>
              )
            }
            if (line.startsWith('- ')) {
              return <li key={i} className="text-secondary ml-4 list-disc">{line.slice(2)}</li>
            }
            if (line.startsWith('**') && line.endsWith('**')) {
              return <p key={i} className="text-foreground font-semibold my-4">{line.slice(2, -2)}</p>
            }
            if (line.trim() === '---') {
              return <hr key={i} className="border-border my-8" />
            }
            if (line.trim() === '') {
              return <div key={i} className="h-2" />
            }
            return <p key={i} className="text-secondary leading-relaxed mb-2">{line}</p>
          })}
        </div>
      </article>
    </div>
  )
}

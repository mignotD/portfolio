'use client'

import { motion } from 'framer-motion'
import { profile } from '@/lib/data'
import Link from 'next/link'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10000)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      clearTimeout(timeout)
      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Message sent successfully!')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to send message')
      }
    } catch (error) {
      setStatus('error')
      setMessage(
        error instanceof DOMException && error.name === 'AbortError'
          ? 'Request timed out. Please check your network and try again.'
          : 'An error occurred. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 px-4 bg-background text-foreground scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="mb-20 border-b border-border pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading text-white">
            <span className="text-muted font-mono text-xl">06 —</span> Contact
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Text CTA */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Main heading split across lines */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight text-white">
              {"Let's"} Work
              <br />
              Together.
            </h3>

            {/* Status statements */}
            <div className="space-y-4">
              <p className="font-mono text-sm text-secondary">
                {"→ "} Open to full-time roles
              </p>
              <p className="font-mono text-sm text-secondary">
                {"→ "} Available for freelance
              </p>
              <p className="font-mono text-sm text-secondary">
                {"→ "} Always up for interesting problems
              </p>
            </div>

            {/* Email and social links */}
            <div className="space-y-2 text-secondary font-mono text-sm">
              <p>
                <span className="text-muted">email / </span>
                <a 
                  href={`mailto:${profile.email}`}
                  className="text-foreground hover:text-white transition-colors"
                >
                  {profile.email}
                </a>
              </p>
              {profile.linkedin && profile.linkedin !== 'PLACEHOLDER' && (
                <p>
                  <span className="text-muted">linkedin / </span>
                  <a 
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-white transition-colors"
                  >
                    @mignot
                  </a>
                </p>
              )}
              {profile.github && profile.github !== 'PLACEHOLDER' && (
                <p>
                  <span className="text-muted">github / </span>
                  <a 
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-white transition-colors"
                  >
                    @mignot
                  </a>
                </p>
              )}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input 
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <input 
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <input 
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <textarea 
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              {/* Status Message */}
              {status !== 'idle' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium ${
                    status === 'success'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {message}
                </motion.div>
              )}

              {/* Submit button - consistent with hero buttons */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-full border border-white/40 text-white font-medium hover:border-white/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

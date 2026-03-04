'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yashbhansali',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accent: '#0077B5',
    description: 'Connect professionally',
  },
  {
    label: 'Email',
    href: 'mailto:yashbhansali@example.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    accent: '#7C5CFF',
    description: 'Send me a message',
  },
  {
    label: 'Download Resume',
    href: '/resume.pdf',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    ),
    accent: '#00D9FF',
    description: 'View my experience',
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#7C5CFF]/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C5CFF]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-[#7C5CFF] text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          If you're building something
          <br />
          <span className="bg-gradient-to-r from-[#7C5CFF] to-[#00D9FF] bg-clip-text text-transparent">
            interesting,
          </span>{' '}
          I'd love to connect.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/45 text-lg max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Whether you're working on a startup, exploring AI, or just want to
          exchange ideas — I'm always open to interesting conversations.
        </motion.p>

        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full border transition-all duration-300"
              style={{
                borderColor: `${link.accent}30`,
                color: link.accent,
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: `0 0 25px ${link.accent}25`,
                borderColor: `${link.accent}60`,
                backgroundColor: `${link.accent}10`,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </span>
              <span className="font-semibold text-sm">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"
        />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-sm"
        >
          <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-white/40">
            YB<span className="text-[#7C5CFF]">.</span>
          </span>
          <span>© 2025 Yash Bhansali. Built with curiosity.</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>
      </div>
    </section>
  )
}

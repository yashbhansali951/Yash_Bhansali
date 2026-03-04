'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const currentExplorations = [
  {
    title: 'AI Tools & Automation',
    description: 'Exploring how LLMs and AI agents can automate complex workflows and augment human decision-making.',
    icon: '🤖',
    status: 'Active',
    accent: '#7C5CFF',
  },
  {
    title: 'Financial Data Systems',
    description: 'Building pipelines that ingest, transform, and surface insights from financial market data.',
    icon: '📊',
    status: 'Building',
    accent: '#00D9FF',
  },
  {
    title: 'Systems Design',
    description: 'Studying how large-scale distributed systems are architected to be reliable, scalable, and maintainable.',
    icon: '🏗️',
    status: 'Learning',
    accent: '#7C5CFF',
  },
  {
    title: 'Growth Experimentation',
    description: 'Designing and running structured experiments to understand what drives user acquisition and retention.',
    icon: '📈',
    status: 'Exploring',
    accent: '#00D9FF',
  },
  {
    title: 'Startups & Operators',
    description: 'Following early-stage companies and studying how operators build leverage in fast-moving environments.',
    icon: '🌱',
    status: 'Following',
    accent: '#7C5CFF',
  },
]

const statusColors = {
  Active: '#7C5CFF',
  Building: '#00D9FF',
  Learning: '#FFB800',
  Exploring: '#FF6B6B',
  Following: '#4CAF50',
}

export default function NowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="now" className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D9FF]/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C5CFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
            <span className="text-[#00D9FF] text-sm font-semibold tracking-widest uppercase">
              Now
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            What I'm Exploring Now
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl mx-auto"
          >
            A live snapshot of what's occupying my mind and time right now.
          </motion.p>
        </div>

        {/* Explorations list */}
        <div className="space-y-4">
          {currentExplorations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="group flex items-start gap-6 p-6 rounded-2xl border border-white/8 bg-white/2 hover:border-white/15 hover:bg-white/3 transition-all duration-300"
              whileHover={{ x: 4 }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}25` }}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                    style={{
                      background: `${statusColors[item.status]}15`,
                      color: statusColors[item.status],
                      border: `1px solid ${statusColors[item.status]}30`,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 13L13 3M13 3H7M13 3V9"
                    stroke={item.accent}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="text-white/25 text-sm">
            Last updated: March 2025 · Inspired by{' '}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 underline underline-offset-2 transition-colors"
            >
              /now pages
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

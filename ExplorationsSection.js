'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const explorations = [
  {
    id: '01',
    title: 'Automation & Data Systems',
    description:
      'Built automated pipelines that ingest financial data from APIs and web scraping systems and transform them into analytics dashboards.',
    icon: '⚡',
    tags: ['Python', 'APIs', 'Data Pipelines', 'Analytics'],
    accent: '#7C5CFF',
    gradient: 'from-[#7C5CFF]/20 to-transparent',
  },
  {
    id: '02',
    title: "Founder's Office & Growth",
    description:
      'Worked closely with founders to design outreach experiments, analyze campaign performance, and build reporting frameworks.',
    icon: '🚀',
    tags: ['Growth Strategy', 'Analytics', 'Outreach', 'Reporting'],
    accent: '#00D9FF',
    gradient: 'from-[#00D9FF]/20 to-transparent',
  },
  {
    id: '03',
    title: 'Cybersecurity Exploration',
    description:
      'Explored web exploitation challenges and Capture The Flag environments to understand vulnerabilities and system security.',
    icon: '🔐',
    tags: ['CTF', 'Web Security', 'Exploitation', 'Vulnerabilities'],
    accent: '#7C5CFF',
    gradient: 'from-[#7C5CFF]/20 to-transparent',
  },
  {
    id: '04',
    title: 'Teaching & Learning Systems',
    description:
      'Designed structured learning systems and monitoring frameworks to help students improve performance.',
    icon: '📚',
    tags: ['Education', 'Systems Design', 'Monitoring', 'Frameworks'],
    accent: '#00D9FF',
    gradient: 'from-[#00D9FF]/20 to-transparent',
  },
]

function ExplorationCard({ exploration, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-white/8 bg-white/2 overflow-hidden cursor-default"
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Hover glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${exploration.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Border glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `inset 0 0 0 1px ${exploration.accent}30`,
        }}
      />

      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `${exploration.accent}15` }}
            >
              {exploration.icon}
            </div>
            <span
              className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold opacity-10"
              style={{ color: exploration.accent }}
            >
              {exploration.id}
            </span>
          </div>

          {/* Arrow */}
          <motion.div
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ borderColor: `${exploration.accent}40` }}
            whileHover={{ scale: 1.1 }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              style={{ color: exploration.accent }}
            >
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
          {exploration.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/65 transition-colors">
          {exploration.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {exploration.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-medium border border-white/8 text-white/40 group-hover:border-white/15 group-hover:text-white/60 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to right, transparent, ${exploration.accent}60, transparent)`,
        }}
      />
    </motion.div>
  )
}

export default function ExplorationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="explorations" className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C5CFF]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#7C5CFF] text-sm font-semibold tracking-widest uppercase"
          >
            Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            Explorations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl mx-auto"
          >
            Areas I've dived into, built things, and learned from.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {explorations.map((exploration, i) => (
            <ExplorationCard key={exploration.id} exploration={exploration} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

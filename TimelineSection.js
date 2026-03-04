'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timelineEvents = [
  {
    year: '2022',
    title: 'Started BCA at Techno India University',
    description:
      'Began my formal journey into computer science, diving deep into programming fundamentals, algorithms, and the foundations of technology.',
    icon: '🎓',
    accent: '#7C5CFF',
    side: 'left',
  },
  {
    year: '2024',
    title: 'Explored Cybersecurity & CTF Environments',
    description:
      'Dove into web exploitation challenges and Capture The Flag competitions, developing a security mindset and understanding how systems can be compromised.',
    icon: '🔐',
    accent: '#00D9FF',
    side: 'right',
  },
  {
    year: '2025',
    title: "Worked with Founders on Growth Strategy",
    description:
      'Joined a founder\'s office to design outreach experiments, analyze campaign performance, and build reporting frameworks that helped scale operations.',
    icon: '🚀',
    accent: '#7C5CFF',
    side: 'left',
  },
  {
    year: '2025',
    title: 'Built Financial Data Automation Systems',
    description:
      'Developed automated pipelines that ingest financial data from APIs and web scraping systems, transforming raw data into actionable analytics dashboards.',
    icon: '⚡',
    accent: '#00D9FF',
    side: 'right',
  },
]

function TimelineItem({ event, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = event.side === 'left'

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      {/* Desktop: alternating layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-8 w-full items-center">
        {/* Left content */}
        <div className={`${isLeft ? 'text-right' : ''}`}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="inline-block"
            >
              <TimelineCard event={event} align="right" />
            </motion.div>
          )}
        </div>

        {/* Center dot */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="relative"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 relative"
              style={{
                background: `${event.accent}20`,
                border: `1px solid ${event.accent}40`,
                boxShadow: `0 0 20px ${event.accent}20`,
              }}
            >
              {event.icon}
            </div>
          </motion.div>
        </div>

        {/* Right content */}
        <div className={`${!isLeft ? '' : ''}`}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <TimelineCard event={event} align="left" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile: single column */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="md:hidden w-full pl-12 relative"
      >
        {/* Mobile dot */}
        <div
          className="absolute left-0 top-4 w-8 h-8 rounded-full flex items-center justify-center text-sm"
          style={{
            background: `${event.accent}20`,
            border: `1px solid ${event.accent}40`,
          }}
        >
          {event.icon}
        </div>
        <TimelineCard event={event} align="left" />
      </motion.div>
    </div>
  )
}

function TimelineCard({ event, align }) {
  return (
    <div
      className={`rounded-2xl border border-white/8 bg-white/2 p-6 hover:border-white/15 transition-all duration-300 group ${
        align === 'right' ? 'text-left' : 'text-left'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold"
          style={{ color: event.accent }}
        >
          {event.year}
        </span>
        <div
          className="h-px flex-1"
          style={{ background: `${event.accent}30` }}
        />
      </div>
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
        {event.title}
      </h3>
      <p className="text-white/45 text-sm leading-relaxed">{event.description}</p>
    </div>
  )
}

export default function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="timeline" className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-transparent via-[#7C5CFF]/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#7C5CFF] text-sm font-semibold tracking-widest uppercase"
          >
            Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            The Timeline
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl mx-auto"
          >
            A visual journey through my explorations and milestones.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent origin-top"
          />

          {/* Vertical line (mobile) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent origin-top"
          />

          <div className="space-y-12">
            {timelineEvents.map((event, i) => (
              <TimelineItem key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

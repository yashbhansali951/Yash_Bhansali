'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const thinkingCards = [
  {
    icon: '🔍',
    title: 'Curiosity First',
    description:
      'I enjoy exploring unfamiliar domains and learning quickly. Every new field is an opportunity to find unexpected connections.',
    accent: '#7C5CFF',
    number: '01',
  },
  {
    icon: '🕸️',
    title: 'Systems Thinking',
    description:
      'I try to understand the full system before optimizing parts of it. Local optimizations often create global problems.',
    accent: '#00D9FF',
    number: '02',
  },
  {
    icon: '🧪',
    title: 'Experimentation',
    description:
      'Ideas should be tested quickly through structured experiments. Fail fast, learn faster, and iterate toward what works.',
    accent: '#7C5CFF',
    number: '03',
  },
  {
    icon: '⚙️',
    title: 'Automation Mindset',
    description:
      'Technology should remove repetitive work and create leverage. If I do something twice, I ask if it can be automated.',
    accent: '#00D9FF',
    number: '04',
  },
]

function ThinkingCard({ card, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-white/8 bg-white/2 p-8 overflow-hidden hover:border-white/15 transition-all duration-500"
      whileHover={{ y: -4 }}
    >
      {/* Background number */}
      <div
        className="absolute top-4 right-6 font-[family-name:var(--font-space-grotesk)] text-7xl font-bold opacity-5 select-none"
        style={{ color: card.accent }}
      >
        {card.number}
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${card.accent}08 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 relative"
        style={{
          background: `${card.accent}15`,
          border: `1px solid ${card.accent}25`,
        }}
      >
        {card.icon}
      </div>

      {/* Content */}
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-3">
        {card.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/65 transition-colors duration-300">
        {card.description}
      </p>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to right, transparent, ${card.accent}50, transparent)`,
        }}
      />
    </motion.div>
  )
}

export default function HowIThinkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-i-think" className="relative py-20 px-6 overflow-hidden">
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
            Approach
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            How I Think
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl mx-auto"
          >
            The mental models and principles that guide how I approach problems.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {thinkingCards.map((card, i) => (
            <ThinkingCard key={card.number} card={card} index={i} />
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-6 rounded-2xl border border-white/8 bg-white/2">
            <p className="text-white/60 text-lg italic leading-relaxed max-w-2xl">
              "The goal is not to be the smartest person in the room, but to be
              the most curious one."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

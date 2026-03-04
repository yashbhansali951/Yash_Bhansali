'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const paragraphs = [
  "I enjoy working at the intersection of technology, systems, and ideas.",
  "Sometimes that means building automation pipelines that process financial data. Sometimes it means working with founders on growth experiments. Sometimes it means exploring cybersecurity challenges to understand how systems break.",
  "What connects all of these experiences is curiosity and a desire to understand how complex systems work.",
  "I'm especially interested in how AI and automation will reshape how people and businesses operate.",
]

const stats = [
  { value: '3+', label: 'Years Exploring', color: '#7C5CFF' },
  { value: '4+', label: 'Domains Explored', color: '#00D9FF' },
  { value: '∞', label: 'Curiosity', color: '#7C5CFF' },
]

const tags = [
  'AI & Automation',
  'Data Systems',
  'Cybersecurity',
  'Growth Strategy',
  'Systems Thinking',
  'Startups',
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C5CFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00D9FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-[#7C5CFF] text-sm font-semibold tracking-widest uppercase">
                About
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              Curious by nature,
              <br />
              <span style={{ color: '#7C5CFF' }}>builder</span>{' '}
              <span style={{ color: '#00D9FF' }}>by choice.</span>
            </motion.h2>

            <div className="space-y-6">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className={`leading-relaxed ${
                    i === 0
                      ? 'text-xl text-white font-medium'
                      : 'text-base text-white/55'
                  }`}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main card */}
            <div
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-2xl pointer-events-none" style={{ background: 'rgba(124,92,255,0.1)' }} />

              {/* Currently section */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: '#00D9FF' }}
                />
                <span
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: '#00D9FF' }}
                >
                  Currently
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                BCA student at Techno India University, exploring AI tools,
                financial data systems, and growth experimentation.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs transition-all duration-200 cursor-default"
                    style={{
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.6)',
                      background: 'rgba(255,255,255,0.03)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div
                className="mb-6"
                style={{
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
                }}
              />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 relative z-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{
                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                        color: stat.color,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent card */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

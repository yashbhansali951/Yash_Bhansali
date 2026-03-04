'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const nodes = [
  {
    id: 'ai',
    label: 'AI',
    x: 50,
    y: 30,
    color: '#7C5CFF',
    info: 'Fascinated by how large language models and AI systems are reshaping how we work, create, and solve problems. Actively exploring AI tools and their practical applications.',
  },
  {
    id: 'automation',
    label: 'Automation',
    x: 75,
    y: 20,
    color: '#00D9FF',
    info: 'Believe that automation is the ultimate leverage. Built pipelines that eliminate repetitive work and create scalable systems that run without constant human intervention.',
  },
  {
    id: 'data',
    label: 'Data Systems',
    x: 85,
    y: 50,
    color: '#7C5CFF',
    info: 'Data is the foundation of good decisions. Interested in how data flows through systems, gets transformed, and surfaces insights that drive action.',
  },
  {
    id: 'cyber',
    label: 'Cybersecurity',
    x: 65,
    y: 70,
    color: '#00D9FF',
    info: 'Understanding how systems break is the best way to understand how they work. Explored CTF challenges and web exploitation to develop a security mindset.',
  },
  {
    id: 'finance',
    label: 'Finance',
    x: 35,
    y: 75,
    color: '#7C5CFF',
    info: 'Interested in financial systems, markets, and how data-driven approaches can surface patterns and opportunities in financial data.',
  },
  {
    id: 'growth',
    label: 'Growth Strategy',
    x: 15,
    y: 55,
    color: '#00D9FF',
    info: 'Worked with founders on growth experiments — designing outreach campaigns, analyzing performance, and building frameworks that scale.',
  },
  {
    id: 'startups',
    label: 'Startups',
    x: 20,
    y: 25,
    color: '#7C5CFF',
    info: 'Drawn to the energy of early-stage companies where one person can have outsized impact. Interested in how startups find product-market fit and scale.',
  },
  {
    id: 'experimentation',
    label: 'Experimentation',
    x: 40,
    y: 10,
    color: '#00D9FF',
    info: 'Ideas should be tested quickly. Believe in structured experimentation — forming hypotheses, running tests, and learning from results to iterate faster.',
  },
]

const connections = [
  ['ai', 'automation'],
  ['ai', 'data'],
  ['ai', 'experimentation'],
  ['automation', 'data'],
  ['automation', 'growth'],
  ['data', 'finance'],
  ['data', 'cyber'],
  ['cyber', 'startups'],
  ['growth', 'startups'],
  ['growth', 'experimentation'],
  ['startups', 'experimentation'],
  ['finance', 'growth'],
]

export default function CuriosityMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeNode, setActiveNode] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => r + 0.1)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    })
  }

  const getNodePosition = (node) => {
    const rad = (rotation * Math.PI) / 180
    const cx = 50
    const cy = 50
    const dx = node.x - cx
    const dy = node.y - cy
    const rotX = dx * Math.cos(rad * 0.1) - dy * Math.sin(rad * 0.1) + cx
    const rotY = dx * Math.sin(rad * 0.1) + dy * Math.cos(rad * 0.1) + cy
    return { x: rotX, y: rotY }
  }

  const activeNodeData = nodes.find((n) => n.id === activeNode)

  return (
    <section id="curiosity-map" className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D9FF]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#00D9FF] text-sm font-semibold tracking-widest uppercase"
          >
            Interests
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            Curiosity Map
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl mx-auto"
          >
            Click any node to explore what I&apos;m curious about.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Constellation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            className="relative aspect-square max-w-lg mx-auto w-full"
            style={{
              transform: `perspective(800px) rotateX(${mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              style={{ overflow: 'visible' }}
            >
              {/* Connection lines */}
              {connections.map(([fromId, toId]) => {
                const from = nodes.find((n) => n.id === fromId)
                const to = nodes.find((n) => n.id === toId)
                if (!from || !to) return null
                const fromPos = getNodePosition(from)
                const toPos = getNodePosition(to)
                const isActive =
                  activeNode === fromId || activeNode === toId
                return (
                  <line
                    key={`${fromId}-${toId}`}
                    x1={fromPos.x}
                    y1={fromPos.y}
                    x2={toPos.x}
                    y2={toPos.y}
                    stroke={isActive ? '#7C5CFF' : 'rgba(255,255,255,0.15)'}
                    strokeWidth={isActive ? '0.5' : '0.3'}
                  />
                )
              })}

              {/* Nodes */}
              {nodes.map((node) => {
                const pos = getNodePosition(node)
                const isActive = activeNode === node.id
                const coreR = isActive ? 2 : 1.2
                const glowR = isActive ? 4 : 2.5
                return (
                  <g
                    key={node.id}
                    onClick={() =>
                      setActiveNode(activeNode === node.id ? null : node.id)
                    }
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Outer glow */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={glowR}
                      fill={node.color}
                      opacity={0.15}
                    />
                    {/* Core */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={coreR}
                      fill={node.color}
                      opacity={isActive ? 1 : 0.7}
                    />
                    {/* Label */}
                    <text
                      x={pos.x}
                      y={pos.y + 4.5}
                      textAnchor="middle"
                      fill={isActive ? node.color : 'rgba(255,255,255,0.5)'}
                      fontSize="2.8"
                      fontFamily="Inter, sans-serif"
                      fontWeight={isActive ? '600' : '400'}
                    >
                      {node.label}
                    </text>
                  </g>
                )
              })}
            </svg>
          </motion.div>

          {/* Info Panel */}
          <div className="min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              {activeNodeData ? (
                <motion.div
                  key={activeNodeData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div
                    className="rounded-2xl border p-8"
                    style={{
                      borderColor: `${activeNodeData.color}30`,
                      background: `${activeNodeData.color}08`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: activeNodeData.color }}
                      />
                      <h3
                        className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold"
                        style={{ color: activeNodeData.color }}
                      >
                        {activeNodeData.label}
                      </h3>
                    </div>
                    <p className="text-white/65 leading-relaxed text-base">
                      {activeNodeData.info}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full text-center py-12"
                >
                  <div className="text-4xl mb-4">✦</div>
                  <p className="text-white/30 text-lg">
                    Click a node to explore my interests
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center mt-6">
                    {nodes.map((node) => (
                      <button
                        key={node.id}
                        onClick={() => setActiveNode(node.id)}
                        className="px-3 py-1.5 rounded-full text-xs border border-white/10 text-white/40 hover:text-white/70 hover:border-white/20 transition-all duration-200"
                      >
                        {node.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

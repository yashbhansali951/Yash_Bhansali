'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ParticleNetwork from './ParticleNetwork'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function HeroSection() {
  const handleNavClick = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/20 via-transparent to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-gradient-radial from-[#7C5CFF]/5 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 text-[#7C5CFF] text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Hi, I'm{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#7C5CFF] to-[#00D9FF] bg-clip-text text-transparent">
                Yash Bhansali
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-[#7C5CFF] to-[#00D9FF]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
            <span className="text-[#7C5CFF]">.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/70 font-medium mb-4 max-w-2xl mx-auto"
          >
            I'm a curious builder exploring technology, systems, AI, and ideas.
          </motion.p>

          {/* Supporting text */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            I enjoy working across disciplines — from automation and data systems
            to growth experimentation and cybersecurity.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => handleNavClick('#explorations')}
              className="group relative px-8 py-3.5 rounded-full bg-[#7C5CFF] text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,92,255,0.4)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#7C5CFF] to-[#00D9FF]"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={() => handleNavClick('#about')}
              className="px-8 py-3.5 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-semibold text-sm transition-all duration-300 hover:bg-white/5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              About Me
            </motion.button>

            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="px-8 py-3.5 rounded-full border border-[#00D9FF]/20 text-[#00D9FF]/80 hover:text-[#00D9FF] hover:border-[#00D9FF]/40 font-semibold text-sm transition-all duration-300 hover:bg-[#00D9FF]/5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}

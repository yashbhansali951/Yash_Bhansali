'use client'
import { useEffect, useRef } from 'react'

export default function ParticleNetwork() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: null, y: null })
  const animFrameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const isMobile = window.innerWidth < 768
    const count = isMobile ? 50 : 100
    const connectionDist = isMobile ? 100 : 150

    const particles = []
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        isPurple: Math.random() > 0.3,
        offset: Math.random() * Math.PI * 2,
      })
    }

    let time = 0

    const animate = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx + Math.sin(time + p.offset) * 0.15
        p.y += p.vy + Math.cos(time * 0.8 + p.offset) * 0.15

        if (p.x < -20) p.x = canvas.width + 20
        if (p.x > canvas.width + 20) p.x = -20
        if (p.y < -20) p.y = canvas.height + 20
        if (p.y > canvas.height + 20) p.y = -20

        if (mouseRef.current.x !== null) {
          const dx = p.x - mouseRef.current.x
          const dy = p.y - mouseRef.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180 && dist > 0) {
            const force = (180 - dist) / 180
            p.vx += (dx / dist) * force * 0.03
            p.vy += (dy / dist) * force * 0.03
          }
        }

        p.vx *= 0.995
        p.vy *= 0.995
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 1.2) {
          p.vx = (p.vx / speed) * 1.2
          p.vy = (p.vy / speed) * 1.2
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectionDist) {
            const opacity = (1 - dist / connectionDist) * 0.18
            const isAccent = !particles[i].isPurple || !particles[j].isPurple
            const color = isAccent ? `rgba(0, 217, 255, ${opacity})` : `rgba(124, 92, 255, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = color
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        const color = p.isPurple ? '124, 92, 255' : '0, 217, 255'
        const alpha = 0.4 + Math.sin(time * 3 + p.offset) * 0.15

        // Glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${alpha * 0.08})`
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${alpha + 0.2})`
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null }
    }
    const handleResize = () => {
      resize()
      for (const p of particles) {
        if (p.x > canvas.width) p.x = Math.random() * canvas.width
        if (p.y > canvas.height) p.y = Math.random() * canvas.height
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

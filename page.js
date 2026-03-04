'use client'
import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ExplorationsSection from '../components/ExplorationsSection'
import CuriosityMap from '../components/CuriosityMap'
import TimelineSection from '../components/TimelineSection'
import HowIThinkSection from '../components/HowIThinkSection'
import NowSection from '../components/NowSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    let lenis
    const initLenis = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        })

        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      } catch (e) {
        // Lenis not available, use native scroll
      }
    }

    initLenis()

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [])

  return (
    <main className="bg-[#0A0A0A] min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExplorationsSection />
      <CuriosityMap />
      <TimelineSection />
      <HowIThinkSection />
      <NowSection />
      <ContactSection />
    </main>
  )
}

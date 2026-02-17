import { useState, useEffect, useRef } from 'react'
import './StatsCounter.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const useCountUp = (end, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return

    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [end, duration, startCounting])

  return count
}

const stats = [
  {
    value: 500, suffix: '+', label: 'Tevreden ouders',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  },
  {
    value: 8, suffix: '', label: 'Schooljaren in 1 map',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
  },
  {
    value: 4.9, suffix: '/5', label: 'Gemiddelde beoordeling',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
  {
    value: 14, suffix: ' dagen', label: 'Bedenktijd',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  },
]

const StatItem = ({ value, suffix, label, icon, delay, isVisible }) => {
  const isDecimal = !Number.isInteger(value)
  const count = useCountUp(isDecimal ? value * 10 : value, 2000, isVisible)
  const displayValue = isDecimal ? (count / 10).toFixed(1) : count

  return (
    <div className="stats__item" style={{ transitionDelay: `${delay}s` }}>
      <span className="stats__icon">{icon}</span>
      <span className="stats__number">
        {displayValue}{suffix}
      </span>
      <span className="stats__label">{label}</span>
    </div>
  )
}

const StatsCounter = () => {
  const sectionRef = useScrollReveal()
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observerRef.current.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    const el = document.querySelector('.stats')
    if (el) observerRef.current.observe(el)

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats__grid">
        {stats.map((stat, i) => (
          <StatItem
            key={i}
            {...stat}
            delay={i * 0.15}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  )
}

export default StatsCounter

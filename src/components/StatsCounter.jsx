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
      // Ease out cubic
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
  { value: 500, suffix: '+', label: 'Tevreden ouders', icon: '❤️' },
  { value: 8, suffix: '', label: 'Schooljaren in 1 map', icon: '📚' },
  { value: 4.9, suffix: '/5', label: 'Gemiddelde beoordeling', icon: '⭐' },
  { value: 14, suffix: ' dagen', label: 'Bedenktijd', icon: '✅' },
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

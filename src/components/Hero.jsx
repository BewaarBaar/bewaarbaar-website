import { useEffect, useRef } from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import heroBg from '../assets/basisschool-bewaarmap-happykids.jpg'

const Hero = () => {
  const sectionRef = useScrollReveal()
  const bgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      // Foto beweegt langzamer dan de pagina (0.4x snelheid)
      bgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero" ref={sectionRef}>
      <div
        className="hero__bg"
        ref={bgRef}
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="hero__overlay">
        <h1 className="hero__title scroll-reveal">Voor alles wat je niet wilt vergeten.<strong>Bewaar het. Voor altijd.</strong></h1>
        <Link to="/shop" className="hero__cta scroll-reveal scroll-reveal--delay-2">Bekijk de Collectie</Link>
      </div>
    </section>
  )
}

export default Hero

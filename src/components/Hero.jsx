import { useEffect, useRef } from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useMagneticEffect } from '../hooks/useMagneticEffect'
import heroBg from '../assets/Bewaarbaar_Hero_Website3.jpg'
import heroBgMobile from '../assets/Bewaarbaar_Hero_Mobile.jpg'

const SplitText = ({ children, className = '', delay = 0 }) => {
  const words = children.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="split-word">
          <span
            className="split-word__inner"
            style={{ animationDelay: `${delay + i * 0.08}s` }}
          >
            {word}{i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </span>
  )
}

const Hero = () => {
  const sectionRef = useScrollReveal()
  const bgRef = useRef(null)
  const magneticRef = useMagneticEffect(0.25)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      bgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__bg" ref={bgRef}>
        <picture>
          <source media="(max-width: 768px)" srcSet={heroBgMobile} />
          <img src={heroBg} alt="" className="hero__bg-img" />
        </picture>
      </div>
      <div className="hero__overlay">
        <h1 className="hero__title">
          <SplitText delay={0.3}>Voor alles wat je niet wilt vergeten.</SplitText>
          <strong>
            <SplitText delay={0.9}>Bewaar het. Voor altijd.</SplitText>
          </strong>
        </h1>
        <div className="hero__price hero__cta--animated">
          <span className="hero__price-current">€38,90</span>
          <span className="hero__price-was">Was €43,90</span>
          <span className="hero__price-sub">Bewaarmap + verzending inclusief · Code <strong>ZOMER2026</strong>: €5 extra korting</span>
        </div>
        <div className="hero__ctas">
          <div ref={magneticRef}>
            <Link to="/shop/basisschool-bewaarmap" className="hero__cta hero__cta--animated">
              Bestel nu — €38,90
              <span className="hero__cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

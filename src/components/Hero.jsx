import './Hero.css'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import heroBg from '../assets/basisschool-bewaarmap-happykids.jpg'

const Hero = () => {
  const sectionRef = useScrollReveal()

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }} ref={sectionRef}>
      <div className="hero__overlay">
        <h1 className="hero__title scroll-reveal">Voor alles wat je niet wilt vergeten.<strong>Bewaar het. Voor altijd.</strong></h1>
        <Link to="/shop" className="hero__cta scroll-reveal scroll-reveal--delay-2">Bekijk de Collectie</Link>
      </div>
    </section>
  )
}

export default Hero

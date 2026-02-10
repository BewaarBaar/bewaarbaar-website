import './Hero.css'
import { Link } from 'react-router-dom'
import heroBg from '../assets/basisschool-bewaarmap-happykids.jpg'

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero__overlay">
        <h1 className="hero__title">Voor alles wat je niet wilt vergeten.<br />Bewaar het. Voor altijd.</h1>
        <Link to="/shop" className="hero__cta">Bekijk de Collectie</Link>
      </div>
    </section>
  )
}

export default Hero

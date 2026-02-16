import './ShopCategories.css'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTiltEffect } from '../hooks/useTiltEffect'
import basisschoolImg from '../assets/Basisschool-Bewaarmap-square.png'
import kinderdagverblijfImg from '../assets/kinderdagverblijf-Bewaarmap-square.jpg'

const ShopCategories = () => {
  const sectionRef = useScrollReveal()
  const { handleMouseMove, handleMouseLeave } = useTiltEffect(6)

  return (
    <section className="shop-categories animated-gradient" ref={sectionRef}>
      <div className="shop-categories__grid">
        <Link
          to="/shop"
          className="shop-categories__card shop-categories__card--teal scroll-reveal scroll-reveal--left"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="tilt-shine" />
          <h2 className="shop-categories__title">Basisschool Bewaarmap</h2>
          <div className="shop-categories__image-wrapper shop-categories__image-wrapper--heart">
            <div className="shop-categories__image-placeholder shop-categories__image-placeholder--bookmark">
              <img src={basisschoolImg} alt="Basisschool Bewaarmap" className="shop-categories__image" />
            </div>
            <svg className="shop-categories__star-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L61 38H95L67 58L78 91L50 71L22 91L33 58L5 38H39L50 5Z" stroke="white" strokeWidth="2.5" fill="none"/>
            </svg>
          </div>
        </Link>

        <Link
          to="/shop"
          className="shop-categories__card shop-categories__card--peach scroll-reveal scroll-reveal--right"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="tilt-shine" />
          <h2 className="shop-categories__title">Kinderdagverblijf Bewaarmap</h2>
          <div className="shop-categories__image-wrapper shop-categories__image-wrapper--cloud">
            <div className="shop-categories__image-placeholder shop-categories__image-placeholder--heart">
              <img src={kinderdagverblijfImg} alt="Kinderdagverblijf Bewaarmap" className="shop-categories__image" />
              <span className="shop-categories__coming-soon">Komt binnenkort</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default ShopCategories

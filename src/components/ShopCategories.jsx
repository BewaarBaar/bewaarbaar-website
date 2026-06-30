import './ShopCategories.css'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTiltEffect } from '../hooks/useTiltEffect'
import basisschoolImg from '../assets/Basisschool-Bewaarmap-square.png'
import digitaalImg from '../assets/Bewaarbaar_voorkant_flat.jpg'

const ShopCategories = () => {
  const sectionRef = useScrollReveal()
  const { handleMouseMove, handleMouseLeave } = useTiltEffect(6)

  return (
    <section className="shop-categories animated-gradient" ref={sectionRef}>
      <div className="shop-categories__grid">
        <Link
          to="/shop/basisschool-bewaarmap"
          className="shop-categories__card shop-categories__card--teal scroll-reveal scroll-reveal--left"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="tilt-shine" />
          <h2 className="shop-categories__title">Basisschool Bewaarmap</h2>
          <div className="shop-categories__pricing">
            <span className="shop-categories__price-current">€38,90</span>
            <span className="shop-categories__price-was">Was €43,90</span>
            <ul className="shop-categories__price-breakdown">
              <li>Bewaarmap: €39,95</li>
              <li>Verzending NL: €3,95</li>
              <li className="shop-categories__price-discount">Code ZOMER2026: −€5,00</li>
            </ul>
          </div>
          <div className="shop-categories__image-wrapper shop-categories__image-wrapper--heart">
            <div className="shop-categories__image-placeholder shop-categories__image-placeholder--bookmark">
              <img src={basisschoolImg} alt="Basisschool Bewaarmap" className="shop-categories__image" loading="lazy" />
            </div>
            <svg className="shop-categories__star-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L61 38H95L67 58L78 91L50 71L22 91L33 58L5 38H39L50 5Z" stroke="white" strokeWidth="2.5" fill="none"/>
            </svg>
          </div>
        </Link>

        <Link
          to="/shop/basisschool-bewaarmap-digitaal"
          className="shop-categories__card shop-categories__card--peach scroll-reveal scroll-reveal--right"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="tilt-shine" />
          <h2 className="shop-categories__title">Digitaal Drukbestand</h2>
          <div className="shop-categories__pricing">
            <span className="shop-categories__price-current">€12,50</span>
            <ul className="shop-categories__price-breakdown">
              <li>✓ Geen verzendkosten</li>
              <li>✓ Direct in je inbox</li>
              <li>✓ Zelf printen & inbinden</li>
            </ul>
          </div>
          <div className="shop-categories__image-wrapper shop-categories__image-wrapper--cloud">
            <div className="shop-categories__image-placeholder shop-categories__image-placeholder--heart">
              <img src={digitaalImg} alt="Digitaal Drukbestand Bewaarmap" className="shop-categories__image" loading="lazy" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default ShopCategories

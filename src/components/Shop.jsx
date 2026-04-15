import './Shop.css'
import { Link, useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTiltEffect } from '../hooks/useTiltEffect'
import ShopifyBuyButton from './ShopifyBuyButton'
import heroImg from '../assets/Bewaarbaar_Hero_Website3.jpg'
import products from '../data/products'

const usps = [
  { icon: '🎁', title: 'Perfect cadeau', desc: 'Voor elke ouder' },
  { icon: '📸', title: 'Alle herinneringen', desc: 'Op één plek bewaard' },
  { icon: '🇳🇱', title: 'Gemaakt in NL', desc: 'Met liefde ontworpen' },
  { icon: '⭐', title: 'Premium kwaliteit', desc: 'Stevig & duurzaam' },
]

const cardRotations = ['-2deg', '1.5deg', '-1deg', '2deg']

const Shop = () => {
  const sectionRef = useScrollReveal()
  const { handleMouseMove: tiltMove, handleMouseLeave: tiltLeave } = useTiltEffect(4)
  const navigate = useNavigate()

  return (
    <section className="shop" ref={sectionRef}>
      {/* Hero met foto */}
      <div className="shop__hero">
        <img src={heroImg} alt="" className="shop__hero-img" />
        <div className="shop__hero-overlay">
          <div className="shop__hero-text">
            <span className="shop__hero-label">COLLECTIE 2025</span>
            <h1 className="shop__hero-title">Onze Bewaarmappen</h1>
            <p className="shop__hero-subtitle">
              Ontdek onze collectie speciaal ontworpen bewaarmappen voor de mooiste herinneringen!
            </p>
          </div>
        </div>
      </div>

      {/* Product cards die over de hero schuiven */}
      <div className="shop__cards-section">
        <div className="shop__grid">
          {products.filter(p => !p.comingSoon).map((product, index) => (
            <div
              className={`shop__product shop__product--rotate-${index + 1} scroll-reveal scroll-reveal--delay-${index + 1}`}
              key={index}
              style={{ '--card-rotation': cardRotations[index], cursor: 'pointer' }}
              onMouseMove={!product.comingSoon ? tiltMove : undefined}
              onMouseLeave={!product.comingSoon ? tiltLeave : undefined}
              onClick={() => navigate(`/shop/${product.slug}`)}
            >
              <div className="shop__product-image-wrap">
                {product.comingSoon && (
                  <span className="shop__product-badge">Komt binnenkort</span>
                )}
                {product.image ? (
                  <div className="shop__image-swap">
                    <img src={product.image} alt={product.name} className="shop__product-image shop__product-image--front" loading="lazy" />
                    {product.hoverImage && (
                      <img src={product.hoverImage} alt={`${product.name} binnenkant`} className="shop__product-image shop__product-image--back" loading="lazy" />
                    )}
                  </div>
                ) : (
                  <div className="shop__product-placeholder">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                    </svg>
                  </div>
                )}
                {product.gallery && (
                  <span className="shop__product-view-label">Bekijk details</span>
                )}
              </div>
              <div className="shop__product-info">
                <h3 className="shop__product-name">
                  <Link to={`/shop/${product.slug}`} className="shop__product-link">{product.name}</Link>
                </h3>
                <p className="shop__product-price">
                  {product.comingSoon ? '' : product.price}
                </p>
                <p className="shop__product-subtitle">{product.subtitle}</p>
                {!product.comingSoon && product.shopifyId && (
                  <ShopifyBuyButton productId={product.shopifyId} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* USP marquee */}
      <div className="shop__usps-marquee">
        <div className="shop__usps-track">
          {[...usps, ...usps, ...usps, ...usps].map((usp, i) => (
            <div className="shop__usp" key={i}>
              <span className="shop__usp-icon">{usp.icon}</span>
              <span className="shop__usp-title">{usp.title}</span>
              <span className="shop__usp-sep">—</span>
              <span className="shop__usp-desc">{usp.desc}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Shop

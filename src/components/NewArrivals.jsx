import './NewArrivals.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useGlowEffect } from '../hooks/useGlowEffect'
import ShopifyBuyButton from './ShopifyBuyButton'
import basisschoolImg from '../assets/Basisschool-Bewaarmap-square.png'
import kinderdagverblijfImg from '../assets/kinderdagverblijf-Bewaarmap-square.jpg'
import mapBinnenkant from '../assets/map_binnenkant_sfeer.png'

const products = [
  {
    name: 'Basisschool Bewaarmap',
    description: 'Organiseer alle schoolherinneringen op een plek met deze praktische bewaarma...',
    price: '\u20ac39.99',
    image: basisschoolImg,
    hoverImage: mapBinnenkant,
    badge: null,
    comingSoon: false,
  },
  {
    name: 'Kinderdagverblijf Bewaarmap',
    description: 'Binnenkort verkrijgbaar! Bewaar alle mooie knutselwerkjes en herinneringen van het...',
    price: '\u20ac0.00',
    image: kinderdagverblijfImg,
    hoverImage: null,
    comingSoon: true,
  },
  {
    name: 'Middelbare School Bewaarmap',
    description: 'Binnenkort verkrijgbaar! De perfecte plek om diploma\'s, rapporten en bijzondere...',
    price: '\u20ac0.00',
    image: null,
    hoverImage: null,
    comingSoon: true,
  },
  {
    name: 'Baby Bewaarmap',
    description: 'Binnenkort verkrijgbaar! Leg alle bijzondere momenten van het eerste levensjaar vast in...',
    price: '\u20ac0.00',
    image: null,
    hoverImage: null,
    comingSoon: true,
  },
]

const NewArrivals = () => {
  const sectionRef = useScrollReveal()
  const { handleMouseMove: glowMove, handleMouseLeave: glowLeave } = useGlowEffect()

  return (
    <section className="new-arrivals" ref={sectionRef}>
      <div className="new-arrivals__header scroll-reveal">
        <h2 className="new-arrivals__section-title">Onze Bewaarmappen</h2>
        <p className="new-arrivals__section-desc">
          Ontdek onze collectie speciaal ontworpen bewaarmappen voor de mooiste herinneringen.
        </p>
      </div>

      <div className="new-arrivals__products">
        {products.map((product, index) => (
          <div className={`new-arrivals__product glow-card scroll-reveal scroll-reveal--delay-${index + 1}`} key={index} onMouseMove={glowMove} onMouseLeave={glowLeave}>
            <div className="new-arrivals__product-image-wrap">
              {product.comingSoon && (
                <span className="new-arrivals__badge new-arrivals__badge--coming">Coming Soon</span>
              )}
              {product.image ? (
                <div className="new-arrivals__image-swap">
                  <img src={product.image} alt={product.name} className="new-arrivals__product-img new-arrivals__product-img--front" />
                  {product.hoverImage && (
                    <img src={product.hoverImage} alt={`${product.name} binnenkant`} className="new-arrivals__product-img new-arrivals__product-img--back" />
                  )}
                </div>
              ) : (
                <div className="new-arrivals__product-placeholder" style={{
                  background: product.comingSoon ? 'var(--color-teal-light)' : '#eee'
                }}>
                  <span className="new-arrivals__product-placeholder-emoji">📚</span>
                </div>
              )}
            </div>
            <h3 className={`new-arrivals__product-name ${product.comingSoon ? 'new-arrivals__product-name--teal' : ''}`}>
              {product.name}{product.comingSoon ? ' - Coming Soon' : ''}
            </h3>
            <p className="new-arrivals__product-desc">{product.description}</p>
            <div className="new-arrivals__product-footer">
              <p className="new-arrivals__product-price">{product.price}</p>
              {!product.comingSoon ? (
                <ShopifyBuyButton productId="10609642963281" />
              ) : (
                <button className="new-arrivals__add-btn" disabled>
                  Binnenkort
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals

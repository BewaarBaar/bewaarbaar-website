import { useState } from 'react'
import './NewArrivals.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useGlowEffect } from '../hooks/useGlowEffect'
import ShopifyBuyButton from './ShopifyBuyButton'
import ProductModal from './ProductModal'
import basisschoolImg from '../assets/Basisschool-Bewaarmap-square.png'
import kinderdagverblijfImg from '../assets/kinderdagverblijf-Bewaarmap-square.jpg'
import mapBinnenkantSfeer from '../assets/map_binnenkant_sfeer.png'
import mapVoorkant from '../assets/Map_voorkant.png'
import mapAchterkant from '../assets/Map_achterkant.png'
import mapBinnenkant from '../assets/Map_binnenkant.png'
import mapZijkant from '../assets/Map_zijkant.png'

const products = [
  {
    name: 'Basisschool Bewaarmap',
    subtitle: 'Van groep 1 t/m groep 8',
    description: 'Organiseer alle schoolherinneringen op een plek met deze praktische bewaarma...',
    price: '€39,99',
    image: basisschoolImg,
    hoverImage: mapBinnenkantSfeer,
    gallery: [mapVoorkant, mapAchterkant, mapBinnenkant, mapZijkant],
    galleryLabels: ['Voorkant', 'Achterkant', 'Binnenkant', 'Zijkant'],
    badge: null,
    comingSoon: false,
    shopifyId: '10609642963281',
  },
  {
    name: 'Kinderdagverblijf Bewaarmap',
    subtitle: 'Alle knutsels op één plek',
    description: 'Binnenkort verkrijgbaar! Bewaar alle mooie knutselwerkjes en herinneringen van het...',
    price: '€0.00',
    image: kinderdagverblijfImg,
    hoverImage: null,
    gallery: null,
    galleryLabels: null,
    comingSoon: true,
    shopifyId: null,
  },
  {
    name: 'Middelbare School Bewaarmap',
    subtitle: 'Van brugklas tot diploma',
    description: 'Binnenkort verkrijgbaar! De perfecte plek om diploma\'s, rapporten en bijzondere...',
    price: '€0.00',
    image: null,
    hoverImage: null,
    gallery: null,
    galleryLabels: null,
    comingSoon: true,
    shopifyId: null,
  },
  {
    name: 'Baby Bewaarmap',
    subtitle: 'Het eerste levensjaar',
    description: 'Binnenkort verkrijgbaar! Leg alle bijzondere momenten van het eerste levensjaar vast in...',
    price: '€0.00',
    image: null,
    hoverImage: null,
    gallery: null,
    galleryLabels: null,
    comingSoon: true,
    shopifyId: null,
  },
]

const NewArrivals = () => {
  const sectionRef = useScrollReveal()
  const { handleMouseMove: glowMove, handleMouseLeave: glowLeave } = useGlowEffect()
  const [selectedProduct, setSelectedProduct] = useState(null)

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
          <div
            className={`new-arrivals__product glow-card scroll-reveal scroll-reveal--delay-${index + 1}`}
            key={index}
            onMouseMove={glowMove}
            onMouseLeave={glowLeave}
            onClick={() => product.gallery && setSelectedProduct(product)}
            style={{ cursor: product.gallery ? 'pointer' : 'default' }}
          >
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
              {product.gallery && (
                <span className="new-arrivals__view-label">Bekijk details</span>
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

      {/* Product Modal — same as Shop page */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  )
}

export default NewArrivals

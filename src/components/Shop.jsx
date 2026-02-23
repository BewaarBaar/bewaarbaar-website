import { useState } from 'react'
import './Shop.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTiltEffect } from '../hooks/useTiltEffect'
import ShopifyBuyButton from './ShopifyBuyButton'
import ProductModal from './ProductModal'
import heroImg from '../assets/basisschool-bewaarmap-happykids.jpg'
import basisschoolImg from '../assets/Basisschool-Bewaarmap-square.png'
import kinderdagverblijfImg from '../assets/kinderdagverblijf-Bewaarmap-square.jpg'
import mapVoorkant from '../assets/Map_voorkant.png'
import mapAchterkant from '../assets/Map_achterkant.png'
import mapBinnenkant from '../assets/Map_binnenkant.png'
import mapZijkant from '../assets/Map_zijkant.png'
import mapBinnenkantSfeer from '../assets/map_binnenkant_sfeer.png'

const products = [
  {
    name: 'De Grote Basisschool Bewaarmap',
    subtitle: 'Van groep 1 t/m groep 8',
    price: '€39,99',
    image: basisschoolImg,
    hoverImage: mapBinnenkantSfeer,
    gallery: [mapVoorkant, mapAchterkant, mapBinnenkant, mapZijkant],
    galleryLabels: ['Voorkant', 'Achterkant', 'Binnenkant', 'Zijkant'],
    comingSoon: false,
    shopifyId: '10609642963281',
  },
  {
    name: 'Kinderdagverblijf Bewaarmap',
    subtitle: 'Alle knutsels op één plek',
    price: '€34,99',
    image: kinderdagverblijfImg,
    hoverImage: null,
    gallery: null,
    comingSoon: true,
    shopifyId: null,
  },
  {
    name: 'Middelbare School Bewaarmap',
    subtitle: 'Van brugklas tot diploma',
    price: '€39,99',
    image: null,
    hoverImage: null,
    gallery: null,
    comingSoon: true,
    shopifyId: null,
  },
  {
    name: 'Baby Bewaarmap',
    subtitle: 'Het eerste levensjaar',
    price: '€34,99',
    image: null,
    hoverImage: null,
    gallery: null,
    comingSoon: true,
    shopifyId: null,
  },
]

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
  const [selectedProduct, setSelectedProduct] = useState(null)

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
          {products.map((product, index) => (
            <div
              className={`shop__product shop__product--rotate-${index + 1} scroll-reveal scroll-reveal--delay-${index + 1}`}
              key={index}
              style={{ '--card-rotation': cardRotations[index] }}
              onMouseMove={!product.comingSoon ? tiltMove : undefined}
              onMouseLeave={!product.comingSoon ? tiltLeave : undefined}
              onClick={() => product.gallery && setSelectedProduct(product)}
            >
              <div className="shop__product-image-wrap">
                {product.comingSoon && (
                  <span className="shop__product-badge">Komt binnenkort</span>
                )}
                {product.image ? (
                  <div className="shop__image-swap">
                    <img src={product.image} alt={product.name} className="shop__product-image shop__product-image--front" />
                    {product.hoverImage && (
                      <img src={product.hoverImage} alt={`${product.name} binnenkant`} className="shop__product-image shop__product-image--back" />
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
                <h3 className="shop__product-name">{product.name}</h3>
                <p className="shop__product-subtitle">{product.subtitle}</p>
                <p className="shop__product-price">
                  {product.comingSoon ? '' : product.price}
                </p>
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

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  )
}

export default Shop

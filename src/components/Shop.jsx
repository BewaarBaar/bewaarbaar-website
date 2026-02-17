import { useState } from 'react'
import './Shop.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTiltEffect } from '../hooks/useTiltEffect'
import ShopifyBuyButton from './ShopifyBuyButton'
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

const ProductModal = ({ product, onClose }) => {
  const [activeImg, setActiveImg] = useState(0)

  if (!product || !product.gallery) return null

  return (
    <div className="shop__modal-overlay" onClick={onClose}>
      <div className="shop__modal" onClick={(e) => e.stopPropagation()}>
        <button className="shop__modal-close" onClick={onClose}>&times;</button>
        <div className="shop__modal-grid">
          <div className="shop__modal-gallery">
            <div className="shop__modal-main-img">
              <img src={product.gallery[activeImg]} alt={product.galleryLabels[activeImg]} />
            </div>
            <div className="shop__modal-thumbs">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  className={`shop__modal-thumb ${i === activeImg ? 'shop__modal-thumb--active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={product.galleryLabels[i]} />
                  <span>{product.galleryLabels[i]}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="shop__modal-info">
            <h2 className="shop__modal-name">{product.name}</h2>
            <p className="shop__modal-subtitle">{product.subtitle}</p>
            <p className="shop__modal-price">{product.price}</p>
            <ul className="shop__modal-features">
              <li>📚 Groep 1 t/m 8 — 8 jaar in één map</li>
              <li>✏️ Ruimte voor tekeningen, foto's & rapporten</li>
              <li>🎨 Speelse illustraties per groep</li>
              <li>🔒 Stevig ringband systeem</li>
              <li>🇳🇱 Ontworpen & gedrukt in Nederland</li>
            </ul>
            {product.shopifyId && (
              <ShopifyBuyButton productId={product.shopifyId} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Shop = () => {
  const sectionRef = useScrollReveal()
  const { handleMouseMove: tiltMove, handleMouseLeave: tiltLeave } = useTiltEffect(4)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <section className="shop animated-gradient" ref={sectionRef}>
      {/* Hero banner */}
      <div className="shop__hero scroll-reveal">
        <div className="shop__hero-text">
          <span className="shop__hero-label">COLLECTIE 2025</span>
          <h1 className="shop__hero-title">Onze Bewaarmappen</h1>
          <p className="shop__hero-subtitle">
            Ontdek onze collectie speciaal ontworpen bewaarmappen voor de mooiste herinneringen!
          </p>
        </div>
        <div className="shop__hero-books">
          <div className="shop__hero-book-stack">
            <img src={mapZijkant} alt="Zijkant" className="shop__hero-book shop__hero-book--1" />
            <img src={mapAchterkant} alt="Achterkant" className="shop__hero-book shop__hero-book--2" />
            <img src={mapBinnenkant} alt="Binnenkant" className="shop__hero-book shop__hero-book--3" />
            <img src={mapVoorkant} alt="Voorkant" className="shop__hero-book shop__hero-book--4" />
          </div>
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

      {/* Filter bar */}
      <div className="shop__filter">
        <div className="shop__filter-left">
          <span className="shop__filter-count">{products.length} producten</span>
        </div>
        <div className="shop__filter-right">
          <span className="shop__filter-sort">Sorteren: Uitgelicht</span>
        </div>
      </div>

      {/* Product grid */}
      <div className="shop__grid">
        {products.map((product, index) => (
          <div
            className={`shop__product scroll-reveal scroll-reveal--delay-${index + 1}`}
            key={index}
            onMouseMove={!product.comingSoon ? tiltMove : undefined}
            onMouseLeave={!product.comingSoon ? tiltLeave : undefined}
            onClick={() => product.gallery && setSelectedProduct(product)}
            style={{ cursor: product.gallery ? 'pointer' : 'default' }}
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
                  <span className="shop__product-placeholder-emoji">📚</span>
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

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  )
}

export default Shop

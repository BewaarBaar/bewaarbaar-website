import { useState } from 'react'
import './NewArrivals.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useGlowEffect } from '../hooks/useGlowEffect'
import ShopifyBuyButton from './ShopifyBuyButton'
import ProductModal from './ProductModal'
import basisschoolImg from '../assets/Basisschool-Bewaarmap-square.png'
import mapBinnenkantSfeer from '../assets/map_binnenkant_sfeer.png'
import mapVoorkant from '../assets/Map_voorkant.png'
import mapAchterkant from '../assets/Map_achterkant.png'
import mapBinnenkant from '../assets/Map_binnenkant.png'
import mapZijkant from '../assets/Map_zijkant.png'

const product = {
  name: 'De Grote Basisschool Bewaarmap',
  subtitle: 'Van groep 1 t/m groep 8',
  description: 'Bewaar alle schoolherinneringen op een plek: tekeningen, rapporten, foto\'s en meer. Van groep 1 tot en met groep 8.',
  price: '\u20AC39,99',
  image: basisschoolImg,
  hoverImage: mapBinnenkantSfeer,
  gallery: [mapVoorkant, mapAchterkant, mapBinnenkant, mapZijkant],
  galleryLabels: ['Voorkant', 'Achterkant', 'Binnenkant', 'Zijkant'],
  shopifyId: '10609642963281',
}

const NewArrivals = () => {
  const sectionRef = useScrollReveal()
  const { handleMouseMove: glowMove, handleMouseLeave: glowLeave } = useGlowEffect()
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="new-arrivals new-arrivals--featured" ref={sectionRef}>
      <div className="new-arrivals__header scroll-reveal">
        <h2 className="new-arrivals__section-title">Onze Bewaarmap</h2>
        <p className="new-arrivals__section-desc">
          De mooiste plek voor alle schoolherinneringen van je kind.
        </p>
      </div>

      <div className="new-arrivals__featured-layout scroll-reveal">
        <div
          className="new-arrivals__featured-image glow-card"
          onMouseMove={glowMove}
          onMouseLeave={glowLeave}
          onClick={() => setShowModal(true)}
          style={{ cursor: 'pointer' }}
        >
          <div className="new-arrivals__image-swap">
            <img src={product.image} alt={product.name} className="new-arrivals__product-img new-arrivals__product-img--front" />
            <img src={product.hoverImage} alt={`${product.name} binnenkant`} className="new-arrivals__product-img new-arrivals__product-img--back" />
          </div>
          <span className="new-arrivals__view-label">Bekijk details</span>
        </div>

        <div className="new-arrivals__featured-info">
          <h3 className="new-arrivals__product-name">{product.name}</h3>
          <p className="new-arrivals__product-subtitle">{product.subtitle}</p>
          <p className="new-arrivals__product-desc">{product.description}</p>
          <div className="new-arrivals__product-footer">
            <p className="new-arrivals__product-price">{product.price}</p>
            <ShopifyBuyButton productId="10609642963281" />
          </div>
        </div>
      </div>

      {showModal && (
        <ProductModal product={product} onClose={() => setShowModal(false)} />
      )}
    </section>
  )
}

export default NewArrivals

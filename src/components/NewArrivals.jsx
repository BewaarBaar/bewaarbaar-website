import { useState } from 'react'
import './NewArrivals.css'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useGlowEffect } from '../hooks/useGlowEffect'
import ShopifyBuyButton from './ShopifyBuyButton'
import ProductModal from './ProductModal'
import products from '../data/products'

const product = products[0]

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
            <img src={product.image} alt={product.name} className="new-arrivals__product-img new-arrivals__product-img--front" loading="lazy" />
            <img src={product.hoverImage} alt={`${product.name} binnenkant`} className="new-arrivals__product-img new-arrivals__product-img--back" loading="lazy" />
          </div>
          <span className="new-arrivals__view-label">Bekijk details</span>
        </div>

        <div className="new-arrivals__featured-info">
          <h3 className="new-arrivals__product-name">
            <Link to={`/shop/${product.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{product.name}</Link>
          </h3>
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

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './ProductModal.css'
import ShopifyBuyButton from './ShopifyBuyButton'

const ProductModal = ({ product, onClose }) => {
  const [activeImg, setActiveImg] = useState(0)

  // Lock body scroll & stop Lenis when modal opens
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    // Escape key to close
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  if (!product || !product.gallery) return null

  return createPortal(
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal__close" onClick={onClose}>&times;</button>
        <div className="product-modal__grid">
          <div className="product-modal__gallery">
            <div className="product-modal__main-img">
              <img src={product.gallery[activeImg]} alt={product.galleryLabels[activeImg]} />
            </div>
            <div className="product-modal__thumbs">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  className={`product-modal__thumb ${i === activeImg ? 'product-modal__thumb--active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={product.galleryLabels[i]} />
                  <span>{product.galleryLabels[i]}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="product-modal__info">
            <h2 className="product-modal__name">{product.name}</h2>
            <p className="product-modal__subtitle">{product.subtitle}</p>
            <p className="product-modal__price">{product.price}</p>
            <ul className="product-modal__features">
              <li>📚 Groep 1 t/m 8 — 8 jaar in één map</li>
              <li>✏️ Ruimte voor tekeningen, foto's & rapporten</li>
              <li>🎨 Speelse illustraties per groep</li>
              <li>🔒 Stevig ringband systeem</li>
              <li>🇳🇱 Ontworpen & gedrukt in Nederland</li>
            </ul>
            {product.shopifyId && (
              <div className="product-modal__buy">
                <ShopifyBuyButton productId={product.shopifyId} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ProductModal

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import ShopifyBuyButton from './ShopifyBuyButton'

const ProductModal = ({ product, onClose }) => {
  const [activeImg, setActiveImg] = useState(0)

  // Lock body scroll & stop Lenis when modal opens
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    // Escape key to close
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  if (!product || !product.gallery) return null

  return createPortal(
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
    </div>,
    document.body
  )
}

export default ProductModal

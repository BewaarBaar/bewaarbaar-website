import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import './ProductDetail.css'
import { getProductBySlug } from '../data/products'
import ShopifyBuyButton from './ShopifyBuyButton'
import ProductModal from './ProductModal'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [activeImg, setActiveImg] = useState(0)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (product) {
      document.title = product.metaTitle
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', product.metaDescription)
    }
    return () => {
      document.title = 'Bewaarbaar \u2014 Bewaarmappen voor de mooiste herinneringen'
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', 'Bewaar de mooiste schoolherinneringen van je kind in een prachtige bewaarmap. Van groep 1 tot groep 8. Bestel nu bij Bewaarbaar.')
    }
  }, [product])

  if (!product) return <Navigate to="/shop" replace />

  const mainImage = product.gallery ? product.gallery[activeImg] : product.image

  return (
    <section className="product-detail">
      {/* Breadcrumb */}
      <nav className="product-detail__breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      <div className="product-detail__layout">
        {/* Image gallery */}
        <div className="product-detail__gallery">
          {mainImage ? (
            <div
              className="product-detail__main-img"
              onClick={() => product.gallery && setShowModal(true)}
              style={product.gallery ? { cursor: 'pointer' } : undefined}
            >
              <img src={mainImage} alt={product.gallery ? product.galleryLabels[activeImg] : product.name} loading="lazy" />
            </div>
          ) : (
            <div className="product-detail__placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
              </svg>
              <p>Afbeelding volgt binnenkort</p>
            </div>
          )}

          {product.gallery && (
            <div className="product-detail__thumbs">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  className={`product-detail__thumb ${i === activeImg ? 'product-detail__thumb--active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={product.galleryLabels[i]} loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="product-detail__info">
          {product.comingSoon && (
            <span className="product-detail__badge">Komt binnenkort</span>
          )}
          <h1 className="product-detail__name">{product.name}</h1>
          <p className="product-detail__subtitle">{product.subtitle}</p>
          <p className="product-detail__price">{product.price}</p>
          <p className="product-detail__desc">{product.longDescription}</p>

          <ul className="product-detail__features">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          {!product.comingSoon && product.shopifyId ? (
            <div className="product-detail__buy">
              <ShopifyBuyButton productId={product.shopifyId} />
            </div>
          ) : product.comingSoon ? (
            <div className="product-detail__notify">
              <p>Wil je als eerste weten wanneer deze beschikbaar is?</p>
              <Link to="/contact" className="product-detail__notify-btn">Houd me op de hoogte</Link>
            </div>
          ) : null}
        </div>
      </div>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            image: product.image || undefined,
            offers: {
              '@type': 'Offer',
              price: product.price.replace('\u20AC', '').replace(',', '.'),
              priceCurrency: 'EUR',
              availability: product.comingSoon
                ? 'https://schema.org/PreOrder'
                : 'https://schema.org/InStock',
              seller: {
                '@type': 'Organization',
                name: 'Bewaarbaar',
              },
            },
          }),
        }}
      />

      {showModal && (
        <ProductModal product={product} onClose={() => setShowModal(false)} />
      )}
    </section>
  )
}

export default ProductDetail

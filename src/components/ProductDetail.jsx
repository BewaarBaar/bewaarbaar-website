import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import './ProductDetail.css'
import { getProductBySlug } from '../data/products'
import ShopifyBuyButton from './ShopifyBuyButton'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  const toggle = useCallback(() => setOpen(prev => !prev), [])

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0)
    }
  }, [open])

  return (
    <div className={`pd-accordion ${open ? 'pd-accordion--open' : ''}`}>
      <button className="pd-accordion__trigger" onClick={toggle} aria-expanded={open}>
        <span>{title}</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" className={`pd-accordion__icon-v ${open ? 'pd-accordion__icon-v--open' : ''}`} />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <div className="pd-accordion__body" style={{ height: `${height}px` }}>
        <div ref={contentRef} className="pd-accordion__inner">
          {children}
        </div>
      </div>
    </div>
  )
}

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [activeImg, setActiveImg] = useState(0)

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
            <div className="product-detail__main-img">
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
          {!product.comingSoon && (
            <p className="product-detail__social-proof">⭐ 4.9 · Al 200+ mappen verkocht</p>
          )}
          <p className="product-detail__price">{product.price}</p>

          {!product.comingSoon && (
            <p className="product-detail__stock">⚡ Beperkte voorraad</p>
          )}

          {!product.comingSoon && product.shopifyId && (
            <div className="product-detail__buy">
              <ShopifyBuyButton productId={product.shopifyId} />
              <div className="product-detail__trust">
                <span>🔒 Veilig betalen</span>
                <span>↩️ Gratis retour</span>
                <span>🇳🇱 Gemaakt in NL</span>
              </div>
              <p className="product-detail__delivery">🚚 Bestel voor 22:00, morgen in huis</p>
            </div>
          )}

          {!product.comingSoon && (
            <p className="product-detail__gift">🎁 Populair cadeau bij verjaardagen, schoolfeesten & bijzondere momenten</p>
          )}

          <div className="product-detail__desc">
            {product.longDescription.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Collapsible sections */}
          {product.sections && (
            <div className="product-detail__sections">
              {product.sections.map((section, i) => (
                <Accordion key={i} title={section.title} defaultOpen={i === 0}>
                  {section.intro && <p className="pd-accordion__text">{section.intro}</p>}
                  {section.items && (
                    <ul className="pd-accordion__list">
                      {section.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.text && section.text.split('\n').map((line, j) => (
                    <p key={j} className="pd-accordion__text">{line}</p>
                  ))}
                </Accordion>
              ))}
            </div>
          )}

          {/* Closing text */}
          {product.closingText && (
            <div className="product-detail__closing">
              {product.closingText.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}

          {/* Kenmerken in accordion */}
          <Accordion title="Kenmerken">
            <ul className="pd-accordion__list pd-accordion__list--check">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </Accordion>

          {/* Shipping info */}
          {!product.comingSoon && (
            <div className="product-detail__shipping">
              {(product.shippingLines || ['📦 Verzending €3,95 — Gratis vanaf €50']).map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}

          {product.comingSoon ? (
            <div className="product-detail__notify">
              <p>Wil je als eerste weten wanneer deze beschikbaar is?</p>
              <Link to="/contact" className="product-detail__notify-btn">Houd me op de hoogte</Link>
            </div>
          ) : null }

        </div>
      </div>

      {/* Reviews */}
      <div className="product-detail__reviews">
        <h2 className="product-detail__reviews-title">Wat klanten zeggen</h2>
        <div className="product-detail__reviews-grid">
          {[
            { name: 'Laura S.', rating: 5, text: 'Wat een prachtig cadeau voor mijn dochter! De kwaliteit is echt geweldig en de pagina\'s zijn zo leuk ingedeeld. We gaan er zeker jaren plezier van hebben.' },
            { name: 'Marieke V.', rating: 5, text: 'Super blij met deze map. Eindelijk een mooie plek voor alle schoolfoto\'s en tekeningen die anders verloren gaan. Aanrader!' },
            { name: 'Thomas B.', rating: 5, text: 'Als cadeau voor onze neefje gekocht. De kwaliteit viel echt in positieve zin op. Snel geleverd ook.' },
          ].map((review, i) => (
            <div key={i} className="product-detail__review">
              <div className="product-detail__review-stars">
                {'★'.repeat(review.rating)}
              </div>
              <p className="product-detail__review-text">"{review.text}"</p>
              <span className="product-detail__review-name">{review.name}</span>
            </div>
          ))}
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

    </section>
  )
}

export default ProductDetail

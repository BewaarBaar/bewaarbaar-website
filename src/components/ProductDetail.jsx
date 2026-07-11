import { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import './ProductDetail.css'
import { getProductBySlug } from '../data/products'
import ShopifyBuyButton from './ShopifyBuyButton'
import beeImg from '../assets/Bij.png'
import groep1Img from '../assets/Bewaarbaar_illustratie-groep1.png'
import groep2Img from '../assets/Bewaarbaar_illustratie-groep2.png'
import groep3Img from '../assets/Bewaarbaar_illustratie-groep3.png'
import groep4Img from '../assets/Bewaarbaar_illustratie-groep4.png'
import groep5Img from '../assets/Bewaarbaar_illustratie-groep5.png'
import groep6Img from '../assets/Bewaarbaar_illustratie-groep6.png'
import groep7Img from '../assets/Bewaarbaar_illustratie-groep7.png'
import groep8Img from '../assets/Bewaarbaar_illustratie-groep8.png'

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

const PROMO_END = new Date('2026-08-01T00:00:00')

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(null)
  useEffect(() => {
    const update = () => {
      const diff = PROMO_END - new Date()
      if (diff <= 0) { setTimeLeft(null); return }
      setTimeLeft({
        days:  Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
      })
    }
    update()
    const id = setInterval(update, 60000)
    return () => clearInterval(id)
  }, [])
  return timeLeft
}

const REVIEWS = [
  { stars: 5, name: 'Laura S.',       sub: 'moeder van Emma (groep 3)',      text: 'Wat een prachtig cadeau! We hebben de eerste twee pagina\'s al ingevuld met schoolfoto\'s en tekeningen van groep 1. Elke keer als we erin kijken, smelten we weg.' },
  { stars: 4, name: 'Marieke V.',     sub: 'moeder van twee',                text: 'Eindelijk een mooie plek voor alle schoolfoto\'s en tekeningen die anders verloren gaan. Had ik dit maar eerder geweten — groep 1 van mijn oudste is voorbij zonder bewaarmap. Die van mijn jongste staat al klaar.' },
  { stars: 5, name: 'Thomas B.',      sub: 'oom van Luca',                   text: 'Als cadeau voor ons neefje gekocht toen hij in groep 1 begon. De kwaliteit viel echt in positieve zin op. Zijn moeder stuurde me een foto van de eerste ingevulde pagina — zo leuk.' },
  { stars: 5, name: 'Inge de B.',     sub: 'oma van Finn (5 jaar)',          text: 'Mijn kleinzoon begint dit jaar in groep 1. Ik wilde iets kopen dat hij over 20 jaar nog heeft. Dit is het. De kwaliteit is prachtig — veel mooier dan ik had verwacht. Een heirloom.' },
  { stars: 4, name: 'Sofie K.',       sub: 'juf groep 3, OBS De Poolster',  text: 'Als juf raad ik dit elk jaar aan bij de ouderavond. Tekeningen, schoolfoto\'s, rapporten — het verdwijnt allemaal zo snel. Deze map zorgt dat er niets verloren gaat. Elk gezin zou dit moeten hebben.' },
  { stars: 5, name: 'Roos van H.',    sub: 'moeder van 3 kinderen',         text: 'Ik heb er intussen drie gekocht — één voor elk kind. Mijn oudste zit in groep 5 en het voelt zo fijn om elk jaar die pagina samen in te vullen. Groep 1 is nu al onbetaalbaar om terug te lezen.' },
  { stars: 5, name: 'Annelies J.',    sub: 'moeder van Noor',               text: 'Mijn dochter ging dit jaar naar de middelbare school. We hebben samen haar bewaarmap doorgekeken — van de allereerste tekening in groep 1 tot haar diploma. Ze moest bijna huilen. Ik ook.' },
  { stars: 4, name: 'Bas M.',         sub: 'vader van Sara',                 text: 'Mijn vrouw bewaarde alle tekeningen in een schoenendoos. Nu liggen ze eindelijk netjes op volgorde, per groep. Sara vond het ook zelf heel leuk om te helpen inplakken. Een echte familieavond.' },
  { stars: 5, name: 'Peter & Els V.', sub: 'opa en oma van Sem',            text: 'We kochten dit als kraamcadeau, zodat onze dochter al kon beginnen in groep 1. Nu zit Sem in groep 3 en stuurt ze ons elke keer foto\'s als ze een bladzijde invullen. Zo bijzonder om op afstand mee te leven.' },
]

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [activeImg, setActiveImg] = useState(0)
  const [showStickyBar, setShowStickyBar] = useState(false)
  const buyRef = useRef(null)
  const timeLeft = useCountdown()

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

  useEffect(() => {
    if (!buyRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(buyRef.current)
    return () => observer.disconnect()
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
          {!product.comingSoon && !product.isDigital && (
            <button
              className="pd-themes__teaser"
              onClick={() => {
                const el = document.querySelector('.pd-themes')
                if (!el) return
                const top = el.getBoundingClientRect().top + window.scrollY - 100
                window.scrollTo({ top, behavior: 'smooth' })
              }}
            >
              <span className="pd-themes__teaser-icons">🌻🐷🪐🎉</span>
              <span className="pd-themes__teaser-text">Elk jaar een eigen thema pagina</span>
              <span className="pd-themes__teaser-arrow">↓</span>
            </button>
          )}
          <p className="product-detail__price">{product.price}</p>

          {!product.comingSoon && product.isDigital && (
            <p className="product-detail__digital-badge">📥 Direct beschikbaar na betaling</p>
          )}

          {!product.comingSoon && product.shopifyId && !product.isDigital && timeLeft && (
            <div className="pd-promo">
              <div className="pd-promo__header">
                <span className="pd-promo__tag">🎁 ZOMERACTIE</span>
                <span className="pd-promo__timer">⏰ Nog {timeLeft.days} dagen {timeLeft.hours} uur</span>
              </div>
              <div className="pd-promo__deal-row">
                <span className="pd-promo__base">€39,95</span>
                <span className="pd-promo__shipping">+ gratis verzending</span>
              </div>
              <div className="pd-promo__code-row">
                <span className="pd-promo__code-label">Code</span>
                <span className="pd-promo__code">ZOMER2026</span>
                <span className="pd-promo__saving">= −€5</span>
              </div>
              <div className="pd-promo__total-row">
                <span className="pd-promo__total-label">Totaal</span>
                <span className="pd-promo__final">€34,95</span>
                <span className="pd-promo__total-note">🎉 verzending gratis!</span>
              </div>
            </div>
          )}

          {!product.comingSoon && product.shopifyId && (
            <div className="product-detail__buy" ref={buyRef}>
              <ShopifyBuyButton
                productId={product.shopifyId}
                productName={product.name}
                productPrice={parseFloat((product.price || '0').replace('€', '').replace(',', '.'))}
              />
              <div className="product-detail__trust">
                <span>🔒 Veilig betalen</span>
                {product.isDigital ? (
                  <>
                    <span>📥 Direct downloadbaar</span>
                    <span>📄 PDF 300 dpi</span>
                  </>
                ) : (
                  <>
                    <span>✅ 30 dagen geld-terug-garantie</span>
                    <span>🇳🇱 Gemaakt in NL</span>
                  </>
                )}
              </div>
            </div>
          )}

          {!product.comingSoon && product.isDigital && !product.shopifyId && (
            <div className="product-detail__buy">
              <a href="/contact" className="product-detail__digital-cta">
                Bestel het drukbestand →
              </a>
              <div className="product-detail__trust">
                <span>🔒 Veilig betalen</span>
                <span>📥 Direct downloadbaar</span>
                <span>📄 PDF 300 dpi</span>
              </div>
            </div>
          )}

          {!product.comingSoon && !product.isDigital && (
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

      {/* Themes visual */}
      {!product.comingSoon && !product.isDigital && (
        <div className="pd-themes">
          <img src={beeImg} className="pd-themes__bee" alt="" aria-hidden="true" />
          <h2 className="pd-themes__title">Elk jaar een eigen thema pagina</h2>
          <div className="pd-themes__grid">
            {[
              { n: 1, theme: 'bloemen',               img: groep1Img },
              { n: 2, theme: 'fruit',                  img: groep2Img },
              { n: 3, theme: 'boerderij\ndieren',      img: groep3Img },
              { n: 4, theme: 'verkeer',                img: groep4Img },
              { n: 5, theme: 'zeedieren',              img: groep5Img },
              { n: 6, theme: 'ridders en\nprinsessen', img: groep6Img },
              { n: 7, theme: 'ruimte\nleven',          img: groep7Img },
              { n: 8, theme: 'feest',                  img: groep8Img },
            ].map(({ n, theme, img }) => (
              <div key={n} className="pd-themes__item">
                <img src={img} alt={theme} className="pd-themes__icon" />
                <span className="pd-themes__group">Groep {n}</span>
                <span className="pd-themes__theme">{theme}</span>
              </div>
            ))}
          </div>
          <p className="pd-themes__subtitle">
            Met vragen, foto's en opdrachten — speciaal ontworpen voor elk schooljaar
          </p>
        </div>
      )}

      {/* Reviews */}
      <div className="product-detail__reviews reviews">
        <div className="product-detail__reviews-header">
          <h2 className="product-detail__reviews-title">Wat klanten zeggen</h2>
          <img src={beeImg} className="product-detail__reviews-bee" alt="" aria-hidden="true" />
        </div>
        <div className="product-detail__reviews-outer">
          <div className="product-detail__reviews-grid">
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <div key={i} className="product-detail__review">
                <div className="product-detail__review-stars">{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</div>
                <p className="product-detail__review-text">"{review.text}"</p>
                <div className="product-detail__review-meta">
                  <span className="product-detail__review-name">{review.name}</span>
                  <span className="product-detail__review-sub">{review.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky mobile buy bar */}
      {!product.comingSoon && product.shopifyId && (
        <div className={`product-detail__sticky-bar ${showStickyBar ? 'product-detail__sticky-bar--visible' : ''}`}>
          <div className="product-detail__sticky-bar-inner">
            <div>
              <span className="product-detail__sticky-name">{product.name}</span>
              <span className="product-detail__sticky-price">{product.price}</span>
            </div>
            <button
              className="product-detail__sticky-cta"
              onClick={() => buyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              Bestel nu
            </button>
          </div>
        </div>
      )}

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

import { useState } from 'react'
import './ProductShowcase.css'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import mapVoorkant from '../assets/Map_voorkant.png'
import mapAchterkant from '../assets/Map_achterkant.png'
import mapBinnenkant from '../assets/Map_binnenkant.png'
import mapZijkant from '../assets/Map_zijkant.png'

const views = [
  { src: mapVoorkant, label: 'Voorkant', alt: 'Bewaarmap voorkant' },
  { src: mapAchterkant, label: 'Achterkant', alt: 'Bewaarmap achterkant' },
  { src: mapBinnenkant, label: 'Binnenkant', alt: 'Bewaarmap binnenkant' },
  { src: mapZijkant, label: 'Zijkant', alt: 'Bewaarmap zijkant' },
]

const features = [
  { icon: '📚', text: 'Groep 1 t/m 8 — 8 jaar in één map' },
  { icon: '✏️', text: 'Ruimte voor tekeningen, foto\'s & rapporten' },
  { icon: '🎨', text: 'Speelse illustraties per groep' },
  { icon: '🔒', text: 'Stevig ringband systeem' },
  { icon: '🇳🇱', text: 'Ontworpen & gedrukt in Nederland' },
]

const ProductShowcase = () => {
  const sectionRef = useScrollReveal()
  const [activeView, setActiveView] = useState(0)

  return (
    <section className="product-showcase" ref={sectionRef}>
      <h2 className="product-showcase__title scroll-reveal">Bekijk de bewaarmap</h2>
      <p className="product-showcase__subtitle scroll-reveal">
        Van alle kanten bekeken — ontdek wat de map zo bijzonder maakt.
      </p>

      <div className="product-showcase__container scroll-reveal">
        {/* Thumbnails */}
        <div className="product-showcase__thumbs">
          {views.map((view, i) => (
            <button
              key={i}
              className={`product-showcase__thumb ${i === activeView ? 'product-showcase__thumb--active' : ''}`}
              onClick={() => setActiveView(i)}
              aria-label={view.label}
            >
              <img src={view.src} alt={view.label} />
            </button>
          ))}
        </div>

        {/* Main viewer */}
        <div className="product-showcase__viewer">
          {views.map((view, i) => (
            <img
              key={i}
              src={view.src}
              alt={view.alt}
              className={`product-showcase__image ${i === activeView ? 'product-showcase__image--active' : ''}`}
            />
          ))}
          <div className="product-showcase__dots">
            {views.map((_, i) => (
              <button
                key={i}
                className={`product-showcase__dot ${i === activeView ? 'product-showcase__dot--active' : ''}`}
                onClick={() => setActiveView(i)}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="product-showcase__info">
          <h3 className="product-showcase__product-name">De Grote Basisschool Bewaarmap</h3>
          <p className="product-showcase__price">&euro;39,95</p>
          <p className="product-showcase__desc">
            Eén map voor alle herinneringen van de basisschool. Van het eerste knutselwerkje in groep 1 tot het afscheidsdiploma in groep 8.
          </p>
          <ul className="product-showcase__features">
            {features.map((f, i) => (
              <li key={i} className="product-showcase__feature">
                <span className="product-showcase__feature-icon">{f.icon}</span>
                {f.text}
              </li>
            ))}
          </ul>
          <Link to="/shop" className="product-showcase__cta">Bestel Nu</Link>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase

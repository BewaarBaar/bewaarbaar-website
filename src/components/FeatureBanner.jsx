import './FeatureBanner.css'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FeatureBanner = () => {
  const sectionRef = useScrollReveal()

  return (
    <section className="feature-banner" ref={sectionRef}>
      <div className="bento">
        {/* Grote kaart links */}
        <Link to="/about" className="bento__item bento__item--large bento__item--dark scroll-reveal scroll-reveal--left">
          <div className="bento__content">
            <span className="bento__label">POPULAIR</span>
            <h2 className="bento__heading">Waarom ouders kiezen voor Bewaarbaar</h2>
            <span className="bento__cta">Ontdek Meer</span>
          </div>
          <div className="bento__bg-pattern">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
        </Link>

        {/* Kleine blokjes rechts boven */}
        <div className="bento__item bento__item--small bento__item--peach scroll-reveal">
          <span className="bento__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          </span>
          <p className="bento__small-title">Alles op een plek</p>
          <p className="bento__small-desc">Foto's, tekeningen, rapporten & meer</p>
        </div>

        <div className="bento__item bento__item--small bento__item--teal scroll-reveal scroll-reveal--delay-1">
          <span className="bento__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </span>
          <p className="bento__small-title">Met liefde ontworpen</p>
          <p className="bento__small-desc">Zachte illustraties & speelse pagina's</p>
        </div>

        {/* Brede kaart onderaan */}
        <Link to="/shop" className="bento__item bento__item--wide bento__item--mint scroll-reveal scroll-reveal--right">
          <div className="bento__wide-inner">
            <div className="bento__wide-left">
              <h2 className="bento__heading bento__heading--dark">Het perfecte cadeau</h2>
              <p className="bento__subtext">
                Verras een ouder met het mooiste geschenk: een plek om alle herinneringen te bewaren.
              </p>
            </div>
            <div className="bento__wide-right">
              <span className="bento__cta bento__cta--dark">Bekijk de Collectie &rarr;</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default FeatureBanner

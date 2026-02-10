import './FeatureBanner.css'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FeatureBanner = () => {
  const sectionRef = useScrollReveal()

  return (
    <section className="feature-banner" ref={sectionRef}>
      <div className="feature-banner__grid">
        {/* Waarom Bewaarbaar */}
        <Link to="/about" className="feature-banner__card feature-banner__card--dark scroll-reveal scroll-reveal--left">
          <div className="feature-banner__card-content">
            <span className="feature-banner__label">POPULAIR</span>
            <h2 className="feature-banner__heading">Waarom ouders kiezen<br />voor Bewaarbaar</h2>
            <span className="feature-banner__cta-btn">Ontdek Meer</span>
          </div>
          <div className="feature-banner__bg-pattern">
            <span>&#127891;</span>
            <span>&#9997;&#65039;</span>
            <span>&#128151;</span>
            <span>&#127912;</span>
          </div>
        </Link>

        {/* Cadeau tip */}
        <a href="#" className="feature-banner__card feature-banner__card--mint scroll-reveal scroll-reveal--right">
          <div className="feature-banner__card-content">
            <h2 className="feature-banner__heading feature-banner__heading--large">Het perfecte cadeau &#127873;</h2>
            <p className="feature-banner__subtext">
              Verras een ouder met het mooiste geschenk: een plek om alle herinneringen te bewaren.
            </p>
            <span className="feature-banner__cta-btn feature-banner__cta-btn--outline">Bekijk Cadeausets</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default FeatureBanner

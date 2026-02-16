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
            <span>&#127891;</span>
            <span>&#9997;&#65039;</span>
            <span>&#128151;</span>
            <span>&#127912;</span>
          </div>
        </Link>

        {/* Kleine blokjes rechts boven */}
        <div className="bento__item bento__item--small bento__item--peach scroll-reveal">
          <span className="bento__icon">&#128230;</span>
          <p className="bento__small-title">Alles op één plek</p>
          <p className="bento__small-desc">Foto's, tekeningen, rapporten & meer</p>
        </div>

        <div className="bento__item bento__item--small bento__item--teal scroll-reveal scroll-reveal--delay-1">
          <span className="bento__icon">&#127912;</span>
          <p className="bento__small-title">Met liefde ontworpen</p>
          <p className="bento__small-desc">Zachte illustraties & speelse pagina's</p>
        </div>

        {/* Brede kaart onderaan */}
        <Link to="/shop" className="bento__item bento__item--wide bento__item--mint scroll-reveal scroll-reveal--right">
          <div className="bento__wide-inner">
            <div className="bento__wide-left">
              <h2 className="bento__heading bento__heading--dark">Het perfecte cadeau &#127873;</h2>
              <p className="bento__subtext">
                Verras een ouder met het mooiste geschenk: een plek om alle herinneringen te bewaren.
              </p>
            </div>
            <div className="bento__wide-right">
              <span className="bento__cta bento__cta--dark">Bekijk de Collectie &rarr;</span>
            </div>
          </div>
          <div className="bento__wide-emojis">
            <span>&#127873;</span>
            <span>&#128150;</span>
            <span>&#127873;</span>
            <span>&#128150;</span>
            <span>&#127873;</span>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default FeatureBanner

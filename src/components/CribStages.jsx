import './CribStages.css'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '1',
    label: 'Kies je bewaarmap',
    description: 'Selecteer de map die past bij de leeftijd van je kind.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
  },
  {
    number: '2',
    label: 'Verzamel herinneringen',
    description: 'Bewaar tekeningen, rapporten, foto\'s en bijzondere momenten.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>,
  },
  {
    number: '3',
    label: 'Koester voor altijd',
    description: 'Alles veilig op een plek. Klaar om samen terug te kijken.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  },
]

const CribStages = () => {
  const sectionRef = useScrollReveal()

  return (
    <section className="crib-stages animated-gradient noise-texture" ref={sectionRef}>
      <div className="crib-stages__particles">
        <div className="crib-stages__particle crib-stages__particle--1" />
        <div className="crib-stages__particle crib-stages__particle--2" />
        <div className="crib-stages__particle crib-stages__particle--3" />
        <div className="crib-stages__particle crib-stages__particle--4" />
        <div className="crib-stages__particle crib-stages__particle--5" />
        <div className="crib-stages__particle crib-stages__particle--6" />
      </div>
      <div className="crib-stages__content scroll-reveal">
        <h2 className="crib-stages__title">Hoe het werkt</h2>
        <p className="crib-stages__desc">
          In drie simpele stappen bewaar je alle mooie herinneringen van je kind op een georganiseerde manier.
        </p>
        <Link to="/shop" className="crib-stages__cta">Bekijk de Collectie</Link>
      </div>

      <div className="crib-stages__grid">
        {steps.map((step, index) => (
          <div className={`crib-stages__stage scroll-reveal scroll-reveal--delay-${index + 1}`} key={step.number}>
            <div className="crib-stages__number">
              <span>{step.number}</span>
            </div>
            <div className="crib-stages__icon-wrap">
              {step.icon}
            </div>
            <p className="crib-stages__label">{step.label}</p>
            <p className="crib-stages__step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CribStages

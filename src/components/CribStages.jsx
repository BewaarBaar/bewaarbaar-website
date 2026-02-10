import './CribStages.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '1',
    label: 'Kies je bewaarmap',
    description: 'Selecteer de map die past bij de leeftijd van je kind.',
    emoji: '\u{1F4D6}',
  },
  {
    number: '2',
    label: 'Verzamel herinneringen',
    description: 'Bewaar tekeningen, rapporten, foto\'s en bijzondere momenten.',
    emoji: '\u{270F}\u{FE0F}',
  },
  {
    number: '3',
    label: 'Koester voor altijd',
    description: 'Alles veilig op een plek. Klaar om samen terug te kijken.',
    emoji: '\u{2764}\u{FE0F}',
  },
]

const CribStages = () => {
  const sectionRef = useScrollReveal()

  return (
    <section className="crib-stages" ref={sectionRef}>
      <div className="crib-stages__content scroll-reveal">
        <h2 className="crib-stages__title">Hoe het werkt</h2>
        <p className="crib-stages__desc">
          In drie simpele stappen bewaar je alle mooie herinneringen van je kind op een georganiseerde manier.
        </p>
        <a href="#" className="crib-stages__cta">Bekijk de Collectie</a>
      </div>

      <div className="crib-stages__grid">
        {steps.map((step, index) => (
          <div className={`crib-stages__stage scroll-reveal scroll-reveal--delay-${index + 1}`} key={step.number}>
            <div className="crib-stages__number">
              <span>{step.number}</span>
            </div>
            <div className="crib-stages__emoji-wrap">
              <span className="crib-stages__emoji">{step.emoji}</span>
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

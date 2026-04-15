import './StatsCounter.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const benefits = [
  {
    label: 'Van groep 1 t/m groep 8',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
  },
  {
    label: 'Gratis verzending',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    label: 'Premium kwaliteit',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
]

const StatsCounter = () => {
  const sectionRef = useScrollReveal()

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats__pills">
        {benefits.map((b, i) => (
          <div className={`stats__pill scroll-reveal scroll-reveal--delay-${i + 1}`} key={i}>
            <span className="stats__pill-icon">{b.icon}</span>
            <span className="stats__pill-label">{b.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsCounter

import './TrustBar.css'

const items = [
  { icon: '👨‍👩‍👧', text: '500+ ouders vertrouwen Bewaarbaar' },
  { icon: '🇳🇱', text: 'Handgemaakt in Nederland' },
  { icon: '✅', text: '30-dagen geld-terug garantie' },
]

const TrustBar = () => (
  <div className="trust-bar">
    {items.map((item, i) => (
      <div className="trust-bar__item" key={i}>
        <span className="trust-bar__icon">{item.icon}</span>
        <span className="trust-bar__text">{item.text}</span>
      </div>
    ))}
  </div>
)

export default TrustBar

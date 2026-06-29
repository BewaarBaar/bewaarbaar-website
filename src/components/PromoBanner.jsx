import { useState } from 'react'
import './PromoBanner.css'

const PromoBanner = () => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="promo-banner">
      <p className="promo-banner__text">
        ☀️ <strong>Zomeractie</strong> — €5 korting met code <strong>ZOMER2026</strong> · geldig t/m 1 augustus
      </p>
      <button className="promo-banner__close" onClick={() => setDismissed(true)} aria-label="Sluiten">
        ×
      </button>
    </div>
  )
}

export default PromoBanner

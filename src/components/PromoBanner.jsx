import { useState, useEffect, useRef } from 'react'
import './PromoBanner.css'

const PromoBanner = () => {
  const [dismissed, setDismissed] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const update = () => {
      const h = dismissed || !ref.current ? 0 : ref.current.offsetHeight
      document.documentElement.style.setProperty('--promo-height', `${h}px`)
    }
    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
      document.documentElement.style.setProperty('--promo-height', '0px')
    }
  }, [dismissed])

  if (dismissed) return null

  return (
    <div className="promo-banner" ref={ref}>
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

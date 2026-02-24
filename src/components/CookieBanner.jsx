import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './CookieBanner.css'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('bewaarbaar_cookie_consent')
    if (!consent) {
      // Small delay so banner doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('bewaarbaar_cookie_consent', 'accepted')
    setVisible(false)
    // Initialize analytics if accepted
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  const handleDecline = () => {
    localStorage.setItem('bewaarbaar_cookie_consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="cookie-banner__content">
            <div className="cookie-banner__text">
              <p className="cookie-banner__message">
                Wij gebruiken cookies om je ervaring te verbeteren.
                Lees meer in ons{' '}
                <Link to="/privacy" className="cookie-banner__link">
                  privacybeleid
                </Link>.
              </p>
            </div>
            <div className="cookie-banner__actions">
              <button
                className="cookie-banner__btn cookie-banner__btn--decline"
                onClick={handleDecline}
              >
                Weigeren
              </button>
              <button
                className="cookie-banner__btn cookie-banner__btn--accept"
                onClick={handleAccept}
              >
                Accepteren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner

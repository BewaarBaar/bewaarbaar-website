import { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Footer = () => {
  const sectionRef = useScrollReveal()
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState(null) // 'success' | 'error' | 'loading'

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setNewsletterStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/mnjbjgrp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          _subject: 'Nieuwe nieuwsbrief aanmelding',
          type: 'newsletter'
        })
      })
      if (res.ok) {
        setNewsletterStatus('success')
        setEmail('')
        setTimeout(() => setNewsletterStatus(null), 5000)
      } else {
        setNewsletterStatus('error')
      }
    } catch {
      setNewsletterStatus('error')
    }
  }

  return (
    <footer className="footer" ref={sectionRef}>
      {/* Big CTA section */}
      <div className="footer__cta-block scroll-reveal">
        <h2 className="footer__cta-title">
          Klaar om herinneringen<br />
          <span className="footer__cta-highlight">te bewaren?</span>
        </h2>
        <Link to="/shop" className="footer__cta-btn btn-interactive">
          Bekijk de Collectie
          <span className="footer__cta-arrow">→</span>
        </Link>
      </div>

      <div className="footer__top scroll-reveal">
        <div className="footer__newsletter">
          <h2 className="footer__heading">Blijf op de hoogte</h2>
          <p className="footer__subtext">
            Meld je aan voor updates over nieuwe bewaarmappen, tips en meer!
          </p>
          <form className="footer__form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Je e-mailadres"
              className="footer__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={newsletterStatus === 'loading'}
            />
            <button
              type="submit"
              className="footer__form-btn btn-interactive"
              disabled={newsletterStatus === 'loading'}
            >
              {newsletterStatus === 'loading' ? '...' : 'Aanmelden'}
            </button>
          </form>
          {newsletterStatus === 'success' && (
            <p className="footer__newsletter-msg footer__newsletter-msg--success">
              Bedankt voor je aanmelding!
            </p>
          )}
          {newsletterStatus === 'error' && (
            <p className="footer__newsletter-msg footer__newsletter-msg--error">
              Er ging iets mis. Probeer het opnieuw.
            </p>
          )}
        </div>

        <div className="footer__links">
          <div className="footer__links-col scroll-reveal">
            <h3 className="footer__links-title">Over Ons</h3>
            <ul>
              <li><Link to="/about" className="footer__link">Ons Verhaal</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>
          <div className="footer__links-col scroll-reveal">
            <h3 className="footer__links-title">Shop</h3>
            <ul>
              <li><Link to="/shop" className="footer__link">Alle Bewaarmappen</Link></li>
              <li><Link to="/shop" className="footer__link">Basisschool</Link></li>
              <li><Link to="/shop" className="footer__link">Kinderdagverblijf</Link></li>
            </ul>
          </div>
          <div className="footer__links-col scroll-reveal">
            <h3 className="footer__links-title">Klantenservice</h3>
            <ul>
              <li><Link to="/faq" className="footer__link">Veelgestelde Vragen</Link></li>
              <li><Link to="/faq" className="footer__link">Verzending & Retour</Link></li>
              <li><Link to="/privacy" className="footer__link">Privacybeleid</Link></li>
              <li><Link to="/voorwaarden" className="footer__link">Algemene Voorwaarden</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__divider" />

      {/* Payment methods */}
      <div className="footer__payments scroll-reveal">
        <span className="footer__payments-label">Veilig betalen met</span>
        <div className="footer__payments-icons">
          {/* iDEAL */}
          <div className="footer__payment-icon" title="iDEAL">
            <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
              <rect width="38" height="24" rx="4" fill="#fff"/>
              <text x="19" y="16" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="bold" fill="#CC0066">iDEAL</text>
            </svg>
          </div>
          {/* Visa */}
          <div className="footer__payment-icon" title="Visa">
            <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
              <rect width="38" height="24" rx="4" fill="#fff"/>
              <text x="19" y="16" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="bold" fill="#1A1F71">VISA</text>
            </svg>
          </div>
          {/* Mastercard */}
          <div className="footer__payment-icon" title="Mastercard">
            <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
              <rect width="38" height="24" rx="4" fill="#fff"/>
              <circle cx="15" cy="12" r="6" fill="#EB001B" opacity="0.9"/>
              <circle cx="23" cy="12" r="6" fill="#F79E1B" opacity="0.9"/>
            </svg>
          </div>
          {/* Bancontact */}
          <div className="footer__payment-icon" title="Bancontact">
            <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
              <rect width="38" height="24" rx="4" fill="#fff"/>
              <rect x="7" y="5" width="12" height="14" rx="2" fill="#005498"/>
              <rect x="19" y="5" width="12" height="14" rx="2" fill="#FFD800"/>
            </svg>
          </div>
          {/* Apple Pay */}
          <div className="footer__payment-icon" title="Apple Pay">
            <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
              <rect width="38" height="24" rx="4" fill="#000"/>
              <text x="19" y="16" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fontWeight="600" fill="#fff"> Pay</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="footer__bottom scroll-reveal">
        <div className="footer__bottom-left">
          <p className="footer__copyright">&copy; 2025 Bewaarbaar — Met liefde gemaakt in Nederland · KVK 99621053</p>
        </div>
        <div className="footer__social">
          <a href="https://instagram.com/bewaarbaar" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://tiktok.com/@bewaarbaar" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="TikTok">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
            </svg>
          </a>
          <a href="https://facebook.com/bewaarbaar" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

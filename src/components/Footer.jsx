import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__newsletter">
          <h2 className="footer__heading">Voor Elke Herinnering</h2>
          <p className="footer__subtext">
            Meld je aan voor updates over nieuwe bewaarmappen, tips en meer!
          </p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Je e-mailadres"
              className="footer__input"
            />
            <button type="submit" className="footer__form-btn">Aanmelden</button>
          </form>
        </div>

        <div className="footer__links">
          <div className="footer__links-col">
            <h3 className="footer__links-title">OVER ONS</h3>
            <ul>
              <li><Link to="/about">Ons Verhaal</Link></li>
              <li><Link to="/about">Contact</Link></li>
            </ul>
          </div>
          <div className="footer__links-col">
            <h3 className="footer__links-title">SHOP</h3>
            <ul>
              <li><Link to="/shop">Alle Bewaarmappen</Link></li>
              <li><Link to="/shop">Basisschool</Link></li>
              <li><Link to="/shop">Kinderdagverblijf</Link></li>
            </ul>
          </div>
          <div className="footer__links-col">
            <h3 className="footer__links-title">KLANTENSERVICE</h3>
            <ul>
              <li><a href="#">Veelgestelde Vragen</a></li>
              <li><a href="#">Verzending & Retour</a></li>
              <li><a href="#">Privacybeleid</a></li>
              <li><a href="#">Algemene Voorwaarden</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__image">
          <div className="footer__image-blob">📚</div>
        </div>
      </div>

      <div className="footer__social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="TikTok">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
          </svg>
        </a>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">&copy; 2025 Bewaarbaar</p>
      </div>

      {/* Decorative shapes */}
      <span className="footer__deco footer__deco--1">&#10084;</span>
      <span className="footer__deco footer__deco--2">&#10039;</span>
    </footer>
  )
}

export default Footer

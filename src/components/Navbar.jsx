import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo-black.png'

const NAV_ITEMS = [
  { label: 'Shop', path: '/shop' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Over Ons', path: '/about' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="tubelight-header">
      <nav className={`tubelight-nav ${scrolled ? 'tubelight-nav--scrolled' : ''}`}>
        <Link to="/" className="tubelight-nav__logo">
          <img src={logo} alt="Bewaarbaar" className="tubelight-nav__logo-img" />
        </Link>

        <ul className="tubelight-nav__items">
          {NAV_ITEMS.map((item) => (
            <li key={item.path} className="tubelight-nav__item">
              <Link
                to={item.path}
                className={`tubelight-nav__link ${
                  location.pathname === item.path ? 'tubelight-nav__link--active' : ''
                }`}
              >
                {item.label}
              </Link>
              {location.pathname === item.path && (
                <motion.div
                  className="tubelight-indicator"
                  layoutId="tubelight"
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                    mass: 0.8,
                  }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="tubelight-nav__right">
          <Link to="/contact" className="tubelight-nav__right-link">Contact</Link>
          <Link to="/shop" className="tubelight-nav__cart" aria-label="Winkelwagen">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </Link>
          <button
            className={`tubelight-nav__hamburger ${menuOpen ? 'tubelight-nav__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="tubelight-nav__mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`tubelight-nav__mobile-link ${
                  location.pathname === item.path ? 'tubelight-nav__mobile-link--active' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

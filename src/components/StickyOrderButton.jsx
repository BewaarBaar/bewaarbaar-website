import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './StickyOrderButton.css'

const StickyOrderButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero (roughly 500px)
      setVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link
      to="/shop"
      className={`sticky-order ${visible ? 'sticky-order--visible' : ''}`}
    >
      Bestel nu
    </Link>
  )
}

export default StickyOrderButton

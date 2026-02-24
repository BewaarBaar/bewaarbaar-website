import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './StickyOrderButton.css'

const StickyOrderButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      // Show after scrolling past the hero, hide near footer
      const nearBottom = scrollY + winHeight > docHeight - 300
      setVisible(scrollY > 500 && !nearBottom)
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

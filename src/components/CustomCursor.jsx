import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const [isHover, setIsHover] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const dotPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Don't init on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dotPos.current = { x: e.clientX, y: e.clientY }

      // Immediately update dot position (no lag)
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }

      if (!isVisible) setIsVisible(true)
    }

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => setIsVisible(false)

    // Smooth cursor follow with lerp
    let animFrame
    const animate = () => {
      if (cursorRef.current) {
        const cursor = cursorRef.current
        const rect = cursor.getBoundingClientRect()
        const currentX = rect.left + rect.width / 2
        const currentY = rect.top + rect.height / 2

        const dx = pos.current.x - currentX
        const dy = pos.current.y - currentY

        cursor.style.left = `${currentX + dx * 0.15}px`
        cursor.style.top = `${currentY + dy * 0.15}px`
      }
      animFrame = requestAnimationFrame(animate)
    }

    // Detect hoverable elements
    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], .hero__cta, .bento__item, .shop-categories__card, .navbar__link, .bento__cta, input, textarea')
      setIsHover(!!target)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseover', onMouseOver)
    animFrame = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(animFrame)
    }
  }, [isVisible])

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isVisible ? 'custom-cursor--visible' : ''} ${isHover ? 'custom-cursor--hover' : ''}`}
      />
      <div
        ref={dotRef}
        className={`custom-cursor__dot ${isVisible ? 'custom-cursor__dot--visible' : ''}`}
      />
    </>
  )
}

export default CustomCursor

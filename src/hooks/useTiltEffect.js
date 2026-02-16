import { useEffect, useRef, useCallback } from 'react'

export const useTiltEffect = (maxTilt = 8) => {
  const containerRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    el.style.transition = 'transform 0.1s ease-out'

    // Shine effect
    const shine = el.querySelector('.tilt-shine')
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, transparent 80%)`
      shine.style.opacity = '1'
    }
  }, [maxTilt])

  const handleMouseLeave = useCallback((e) => {
    const el = e.currentTarget
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    el.style.transition = 'transform 0.5s ease-out'

    const shine = el.querySelector('.tilt-shine')
    if (shine) {
      shine.style.opacity = '0'
    }
  }, [])

  return { handleMouseMove, handleMouseLeave }
}

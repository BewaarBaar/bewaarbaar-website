import { useCallback } from 'react'

export function useGlowEffect() {
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--glow-x', `${x}px`)
    card.style.setProperty('--glow-y', `${y}px`)
  }, [])

  const handleMouseLeave = useCallback((e) => {
    const card = e.currentTarget
    card.style.removeProperty('--glow-x')
    card.style.removeProperty('--glow-y')
  }, [])

  return { handleMouseMove, handleMouseLeave }
}

import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    )

    // Observe the element itself and all children with .scroll-reveal
    const revealElements = element.querySelectorAll('.scroll-reveal')
    revealElements.forEach((el) => observer.observe(el))

    // Also observe the element if it has the class
    if (element.classList.contains('scroll-reveal')) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

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
            // Staggered reveal: find siblings with scroll-reveal in same parent grid/flex
            const parent = entry.target.parentElement
            if (parent) {
              const siblings = Array.from(parent.querySelectorAll(':scope > .scroll-reveal'))
              const index = siblings.indexOf(entry.target)
              if (index > 0) {
                entry.target.style.transitionDelay = `${index * 0.1}s`
              }
            }
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

import { useEffect, useRef } from 'react'
import './BeeTimeline.css'
import beeImg from '../assets/Bij.png'
import starImg from '../assets/ster.png'

const PATH = 'M 20,160 C 120,55 210,255 330,155 C 440,65 530,245 650,155 C 710,110 760,130 780,140'

const MILESTONES = [
  { progress: 0.03, label: 'Groep 1',      sub: 'De allereerste dag',   above: true  },
  { progress: 0.35, label: 'Tekeningen',   sub: 'Voor altijd bewaard',  above: false },
  { progress: 0.66, label: "Schoolfoto's", sub: 'Elk jaar opnieuw',     above: true  },
  { progress: 0.97, label: 'Groep 8',      sub: 'Nooit vergeten',       above: true  },
]

const BeeTimeline = () => {
  const sectionRef  = useRef(null)
  const pathRef     = useRef(null)
  const beeRef      = useRef(null)
  const circleRefs  = useRef([])
  const labelRefs   = useRef([])
  const dotsRef     = useRef([])

  // Compute dot positions after path mounts and set circle/label coords
  useEffect(() => {
    if (!pathRef.current) return
    const path = pathRef.current
    const len  = path.getTotalLength()

    dotsRef.current = MILESTONES.map((m, i) => {
      const pt = path.getPointAtLength(m.progress * len)
      // Position SVG circles
      circleRefs.current[i]?.setAttribute('cx', pt.x)
      circleRefs.current[i]?.setAttribute('cy', pt.y)
      // Position labels
      if (labelRefs.current[i]) {
        labelRefs.current[i].style.left = `${(pt.x / 800) * 100}%`
        labelRefs.current[i].style.top  = `${(pt.y / 300) * 100}%`
      }
      return { ...m, x: pt.x, y: pt.y }
    })
  }, [])

  // Scroll-driven animation — direct DOM updates via rAF for 60fps smoothness
  useEffect(() => {
    let rafId = null

    const update = () => {
      if (!sectionRef.current || !pathRef.current || !beeRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const vh   = window.innerHeight
      const p    = Math.max(0, Math.min(1, (vh * 0.72 - rect.top) / (rect.height * 0.85)))

      const path = pathRef.current
      const len  = path.getTotalLength()
      const pt   = path.getPointAtLength(p * len)

      // Tangent angle for bee rotation
      const d  = 5
      const a1 = path.getPointAtLength(Math.max(0, p * len - d))
      const a2 = path.getPointAtLength(Math.min(len, p * len + d))
      const angle = Math.atan2(a2.y - a1.y, a2.x - a1.x) * 180 / Math.PI

      // scaleX(-1) flips bee to face forward; negate angle to correct rotation direction
      beeRef.current.style.left      = `${(pt.x / 800) * 100}%`
      beeRef.current.style.top       = `${(pt.y / 300) * 100}%`
      beeRef.current.style.transform = `translate(-50%, -50%) scaleX(-1) rotate(${-angle}deg)`

      // Light up milestone dots and labels as bee passes
      dotsRef.current.forEach((dot, i) => {
        const active = p >= dot.progress - 0.02
        circleRefs.current[i]?.setAttribute('fill', active ? '#2dd4a8' : 'rgba(26,26,46,0.12)')
        labelRefs.current[i]?.classList.toggle('bee-tl__label--active', active)
      })
    }

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="bee-tl" ref={sectionRef}>
      <div className="bee-tl__header">
        <h2 className="bee-tl__title">Elk jaar een nieuw moment</h2>
        <p className="bee-tl__desc">Van groep 1 tot groep 8 — bewaar het allemaal.</p>
      </div>

      <div className="bee-tl__stage">
        <svg viewBox="0 0 800 300" className="bee-tl__svg" aria-hidden="true">
          <path d={PATH} fill="none" stroke="rgba(26,26,46,0.1)" strokeWidth="2.5" strokeDasharray="9 7" strokeLinecap="round" />
          <path ref={pathRef} d={PATH} fill="none" stroke="transparent" />
          {MILESTONES.map((_, i) => (
            <circle key={i} r={8} fill="rgba(26,26,46,0.12)" ref={el => circleRefs.current[i] = el} />
          ))}
        </svg>

        <img ref={beeRef} src={beeImg} className="bee-tl__bee" alt="" />

        <img src={starImg} className="bee-tl__star bee-tl__star--1" alt="" />
        <img src={starImg} className="bee-tl__star bee-tl__star--2" alt="" />
        <img src={starImg} className="bee-tl__star bee-tl__star--3" alt="" />

        {MILESTONES.map((m, i) => (
          <div
            key={i}
            ref={el => labelRefs.current[i] = el}
            className={`bee-tl__label ${m.above ? 'bee-tl__label--above' : 'bee-tl__label--below'}`}
          >
            <strong>{m.label}</strong>
            <span>{m.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BeeTimeline

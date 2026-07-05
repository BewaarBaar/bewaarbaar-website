import { useEffect, useRef, useState } from 'react'
import './BeeTimeline.css'
import beeImg from '../assets/bij.png'
import starImg from '../assets/ster.png'

const PATH = 'M 20,160 C 120,55 210,255 330,155 C 440,65 530,245 650,155 C 710,110 760,130 780,140'

const MILESTONES = [
  { progress: 0.03, label: 'Groep 1', sub: 'De allereerste dag' },
  { progress: 0.35, label: 'Tekeningen', sub: 'Voor altijd bewaard' },
  { progress: 0.66, label: "Schoolfoto's", sub: 'Elk jaar opnieuw' },
  { progress: 0.97, label: 'Groep 8', sub: 'Nooit vergeten' },
]

const BeeTimeline = () => {
  const sectionRef = useRef(null)
  const pathRef = useRef(null)
  const [bee, setBee] = useState({ x: 20, y: 160, angle: 0, progress: 0 })
  const [dots, setDots] = useState([])

  useEffect(() => {
    if (!pathRef.current) return
    const path = pathRef.current
    const len = path.getTotalLength()
    setDots(MILESTONES.map(m => ({
      ...m,
      x: path.getPointAtLength(m.progress * len).x,
      y: path.getPointAtLength(m.progress * len).y,
    })))
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !pathRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.max(0, Math.min(1, (vh * 0.72 - rect.top) / (rect.height * 0.85)))
      const path = pathRef.current
      const len = path.getTotalLength()
      const pt = path.getPointAtLength(p * len)
      const d = 4
      const a1 = path.getPointAtLength(Math.max(0, p * len - d))
      const a2 = path.getPointAtLength(Math.min(len, p * len + d))
      const angle = Math.atan2(a2.y - a1.y, a2.x - a1.x) * 180 / Math.PI
      setBee({ x: pt.x, y: pt.y, angle, progress: p })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const px = (v, max) => `${(v / max) * 100}%`

  return (
    <section className="bee-tl" ref={sectionRef}>
      <div className="bee-tl__header">
        <h2 className="bee-tl__title">Elk jaar een nieuw moment</h2>
        <p className="bee-tl__desc">Van groep 1 tot groep 8 — bewaar het allemaal.</p>
      </div>

      <div className="bee-tl__stage">
        <svg viewBox="0 0 800 300" className="bee-tl__svg" aria-hidden="true">
          {/* Grey background path */}
          <path d={PATH} fill="none" stroke="rgba(26,26,46,0.1)" strokeWidth="2.5" strokeDasharray="9 7" strokeLinecap="round" />
          {/* Invisible path used for getPointAtLength */}
          <path ref={pathRef} d={PATH} fill="none" stroke="transparent" />
          {/* Milestone dots */}
          {dots.map((m, i) => (
            <circle
              key={i}
              cx={m.x} cy={m.y} r={8}
              fill={bee.progress >= m.progress - 0.02 ? '#2dd4a8' : 'rgba(26,26,46,0.12)'}
              style={{ transition: 'fill 0.5s ease' }}
            />
          ))}
        </svg>

        {/* Bee */}
        <img
          src={beeImg}
          className="bee-tl__bee"
          alt=""
          style={{
            left: px(bee.x, 800),
            top: px(bee.y, 300),
            transform: `translate(-50%, -50%) rotate(${bee.angle}deg)`,
          }}
        />

        {/* Stars */}
        <img src={starImg} className="bee-tl__star bee-tl__star--1" alt="" />
        <img src={starImg} className="bee-tl__star bee-tl__star--2" alt="" />
        <img src={starImg} className="bee-tl__star bee-tl__star--3" alt="" />

        {/* Labels */}
        {dots.map((m, i) => {
          const above = i % 2 === 0
          const active = bee.progress >= m.progress - 0.02
          return (
            <div
              key={i}
              className={`bee-tl__label ${above ? 'bee-tl__label--above' : 'bee-tl__label--below'} ${active ? 'bee-tl__label--active' : ''}`}
              style={{ left: px(m.x, 800), top: px(m.y, 300) }}
            >
              <strong>{m.label}</strong>
              <span>{m.sub}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default BeeTimeline

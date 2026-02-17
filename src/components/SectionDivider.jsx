import './SectionDivider.css'

const SectionDivider = ({ color = 'var(--color-cream)', flip = false, variant = 'wave' }) => {
  if (variant === 'wave') {
    return (
      <div className={`section-divider ${flip ? 'section-divider--flip' : ''}`} style={{ color }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="currentColor"
          />
        </svg>
      </div>
    )
  }

  if (variant === 'curve') {
    return (
      <div className={`section-divider ${flip ? 'section-divider--flip' : ''}`} style={{ color }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 60C360 0 1080 0 1440 60H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    )
  }

  // variant === 'soft'
  return (
    <div className={`section-divider ${flip ? 'section-divider--flip' : ''}`} style={{ color }}>
      <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 50C320 10 560 50 720 25C880 0 1120 40 1440 20V50H0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default SectionDivider

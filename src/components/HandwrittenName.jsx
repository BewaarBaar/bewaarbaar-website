import { motion } from 'framer-motion'

const HandwrittenName = ({ name, delay = 0, color = '#2d2d2d', className = '' }) => {
  return (
    <motion.span
      className={`handwritten-name ${className}`}
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: 'auto' }}
      transition={{
        opacity: { duration: 0.01, delay },
        width: { duration: name.length * 0.18, delay, ease: [0.43, 0.13, 0.23, 0.96] },
      }}
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color,
        fontFamily: "'Caveat', cursive",
        verticalAlign: 'bottom',
      }}
    >
      {name}
    </motion.span>
  )
}

export default HandwrittenName

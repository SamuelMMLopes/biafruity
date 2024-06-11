'use client'
import { AnimationProps, motion } from 'framer-motion'
import { ComponentProps } from 'react'

type Direction = 'bottom' | 'top' | 'left' | 'right'

type AnimatedTagProps = ComponentProps<typeof motion.div> & {
  startDirection?: Direction
}

const initials: Record<Direction, AnimationProps['initial']> = {
  top: { opacity: 0, y: '-50%' },
  bottom: { opacity: 0, y: '50%' },
  left: { opacity: 0, x: '-50%' },
  right: { opacity: 0, x: '50%' },
}

const animates: Record<Direction, AnimationProps['animate']> = {
  top: { opacity: 1, y: 0 },
  bottom: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
}

export function AnimatedTag({
  children,
  startDirection = 'top',
  ...props
}: AnimatedTagProps) {
  return (
    <motion.div
      {...props}
      initial={initials[startDirection]}
      animate={animates[startDirection]}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

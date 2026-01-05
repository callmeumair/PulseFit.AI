'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { fadeInUp, staggerContainer } from '@/styles/animations'

interface MotionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionWrapper({ children, className, delay }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInUp({ children, className, delay }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}


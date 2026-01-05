'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover={hover ? 'hover' : undefined}
      variants={{
        rest: {
          scale: 1,
          y: 0,
          transition: {
            duration: 0.2,
            ease: 'easeOut',
          },
        },
        hover: {
          scale: 1.01,
          y: -2,
          transition: {
            duration: 0.2,
            ease: 'easeOut',
          },
        },
      }}
      className={cn(
        'bg-charcoal-light border border-iron/50 rounded-none p-6 lg:p-8 transition-colors duration-200',
        hover && 'hover:border-primary/30',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { scaleOnHover } from '@/styles/animations'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      variants={hover ? scaleOnHover : undefined}
      initial="rest"
      whileHover={hover ? 'hover' : undefined}
      className={cn(
        'bg-charcoal-light border border-iron/50 rounded-xl p-6 lg:p-8',
        className
      )}
    >
      {children}
    </motion.div>
  )
}


'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  // Base styles - using design system tokens
  const baseStyles = 'font-display font-semibold rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal focus-visible:ring-primary'
  
  const variants = {
    primary: 'bg-primary text-bone hover:bg-primary-dark hover:ring-2 hover:ring-primary/30 focus:ring-primary',
    secondary: 'bg-steel text-bone hover:bg-steel-light hover:ring-2 hover:ring-steel/30 focus:ring-steel',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-bone hover:ring-2 hover:ring-primary/30 focus:ring-primary',
  }
  
  const sizes = {
    sm: 'px-4 py-2.5 text-small min-h-[44px]',
    md: 'px-6 py-3 text-body min-h-[44px]',
    lg: 'px-8 py-4 text-h4 min-h-[48px]',
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}

'use client'

import { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import NextLink from 'next/link'

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  children: ReactNode
  variant?: 'default' | 'underline'
}

export function Link({ 
  href, 
  children, 
  className,
  variant = 'default',
  ...props 
}: LinkProps) {
  const baseStyles = 'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-charcoal rounded-sm'
  
  const variants = {
    default: 'text-steel-light hover:text-primary',
    underline: 'text-steel-light hover:text-primary relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full',
  }
  
  return (
    <NextLink
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}


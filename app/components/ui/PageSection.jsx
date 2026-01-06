'use client'
import { motion } from 'framer-motion'

export default function PageSection({
    children,
    background = 'dark',
    className = ''
}) {
    const bgClasses = {
        dark: 'bg-gym-dark',
        charcoal: 'bg-gym-charcoal',
        black: 'bg-gym-black',
        transparent: 'bg-transparent'
    }

    return (
        <section className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
            {children}
        </section>
    )
}

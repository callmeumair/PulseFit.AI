'use client'
import { motion } from 'framer-motion'
import Container from './Container'

export default function PageHero({
    badge,
    title,
    description,
    children
}) {
    return (
        <section className="relative py-24 md:py-32 bg-gym-black overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gym-charcoal/50 to-gym-black" />

            {/* Animated orange glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gym-orange blur-[120px]"
            />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6"
                        >
                            <span className="inline-block px-4 py-2 bg-gym-orange/10 border border-gym-orange/30 text-gym-orange text-sm uppercase tracking-wider font-bold">
                                {badge}
                            </span>
                        </motion.div>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-5xl md:text-6xl lg:text-7xl text-gym-white mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gym-off-white leading-relaxed max-w-3xl mx-auto"
                        >
                            {description}
                        </motion.p>
                    )}

                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-8"
                        >
                            {children}
                        </motion.div>
                    )}
                </div>
            </Container>
        </section>
    )
}

'use client'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Container from '../ui/Container'

export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'SET YOUR GOALS',
            description: 'Tell us where you are and where you want to be. Our AI builds your baseline.',
        },
        {
            number: '02',
            title: 'TRAIN SMART',
            description: 'Follow personalized workouts that adapt daily based on your performance and recovery.',
        },
        {
            number: '03',
            title: 'TRACK & EVOLVE',
            description: 'Watch your progress in real-time. Your program evolves as you get stronger.',
        },
    ]

    return (
        <Section background="charcoal">
            <Container size="narrow">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 bg-gym-orange/10 border border-gym-orange/30 text-gym-orange text-xs uppercase tracking-wider font-bold mb-6">
                            How It Works
                        </div>
                        <h2 className="font-display text-5xl md:text-6xl lg:text-display-md text-gym-white">
                            THREE STEPS TO
                            <br />
                            <span className="text-gym-orange">TRANSFORMATION</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="space-y-16 md:space-y-24">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Number */}
                                <div className="relative">
                                    <div className="font-display text-8xl md:text-9xl text-gym-steel opacity-20">
                                        {step.number}
                                    </div>
                                    <div className="absolute top-0 left-0 font-display text-8xl md:text-9xl text-gym-orange opacity-100">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-4">
                                    <h3 className="font-display text-3xl md:text-4xl text-gym-white mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-gym-light-gray leading-relaxed max-w-md">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                                    className="hidden md:block absolute left-16 top-full w-px h-24 bg-gradient-to-b from-gym-orange to-transparent origin-top"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}

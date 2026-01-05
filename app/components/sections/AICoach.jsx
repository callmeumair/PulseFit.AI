'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function AICoach() {
    return (
        <Section background="default">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Content - Left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-block px-3 py-1 bg-gym-orange/10 border border-gym-orange/30 text-gym-orange text-xs uppercase tracking-wider font-bold mb-6">
                            AI Coach
                        </div>

                        <h2 className="font-display text-5xl md:text-6xl lg:text-display-md text-gym-white mb-6 leading-tight">
                            YOUR COACH THAT
                            <br />
                            <span className="text-gym-orange">NEVER SLEEPS</span>
                        </h2>

                        <p className="text-lg text-gym-off-white mb-8 leading-relaxed">
                            PulseFit AI analyzes your performance, recovery, and goals in real-time.
                            Every workout is optimized for maximum gains. Every rest day is calculated
                            for peak recovery. No guesswork. Just results.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                'Adapts to your progress in real-time',
                                'Learns from 2.5M+ completed workouts',
                                'Optimizes for your specific body type',
                                'Prevents overtraining and injury'
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-1.5 h-1.5 bg-gym-orange" />
                                    <span className="text-gym-light-gray">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Button variant="primary">Experience AI Coaching</Button>
                    </motion.div>

                    {/* Portrait Image - Right side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative lg:ml-12"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden">
                            {/* Portrait image with silhouette effect */}
                            <div className="absolute inset-0">
                                <Image
                                    src="/assets/images/pexels-wendell-stoyer-2149012384-35419772.jpg"
                                    alt="Athlete training with focus and determination"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Dark overlay for silhouette effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-gym-black via-gym-black/60 to-transparent" />

                                {/* Orange rim lighting effect */}
                                <div className="absolute inset-0 bg-gradient-to-l from-gym-orange/20 via-transparent to-transparent mix-blend-overlay" />

                                {/* Vignette */}
                                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gym-black/60" />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gym-orange/10 blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gym-orange/5 blur-3xl" />
                        </div>

                        {/* Edge bleed effect */}
                        <div className="absolute -right-12 top-1/4 w-24 h-64 bg-gradient-to-r from-gym-orange/20 to-transparent blur-2xl -z-10" />
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '../ui/Section'
import Container from '../ui/Container'
import WaitlistForm from '../../../components/WaitlistForm'

export default function FinalCTA() {
    return (
        <Section background="dark" spacing="default">
            <Container>
                <div className="relative overflow-hidden rounded-none">
                    {/* Hero background image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/assets/images/pexels-khezez-35341599.jpg"
                            alt="Athlete in powerful training moment"
                            fill
                            className="object-cover object-[center_20%] md:object-[center_25%] lg:object-[center_35%]"
                            sizes="100vw"
                            priority
                        />

                        {/* Dark immersive overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-gym-black/75 via-gym-black/70 to-gym-black/85" />

                        {/* Vignette effect */}
                        <div className="absolute inset-0 bg-gradient-radial from-transparent via-gym-black/40 to-gym-black/80" />

                        {/* Grain texture for cinematic feel */}
                        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

                        {/* Bottom gradient for text legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-transparent to-transparent" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 text-center max-w-4xl mx-auto py-24 md:py-32"
                    >
                        <h2 className="font-display text-5xl md:text-6xl lg:text-display-lg text-gym-white mb-8 leading-none">
                            STOP GUESSING.
                            <br />
                            START <span className="text-gym-orange">WINNING</span>.
                        </h2>

                        <p className="text-xl md:text-2xl text-gym-off-white mb-12 max-w-2xl mx-auto leading-relaxed">
                            Every day you wait is a day of progress lost.
                            Be among the first to experience AI-powered fitness coaching.
                        </p>

                        <div className="flex justify-center mb-12">
                            <WaitlistForm
                                source="footer_cta"
                                placeholder="Enter your email"
                                buttonText="Get Started Free"
                            />
                        </div>

                        {/* Early access benefits */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-8 border-t border-gym-steel/30"
                        >
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gym-orange" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gym-light-gray text-sm">
                                    Early access pricing
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gym-orange" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gym-light-gray text-sm">
                                    Exclusive features
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gym-orange" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gym-light-gray text-sm">
                                    Priority support
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}

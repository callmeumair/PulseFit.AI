'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'

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
                            className="object-cover object-center"
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
                            Join 50,000+ athletes who stopped making excuses and started making gains.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                            <Button variant="primary" className="text-lg px-12 py-5">
                                Get Started Free
                            </Button>
                            <div className="text-gym-light-gray text-sm">
                                No credit card required • 7-day trial
                            </div>
                        </div>

                        {/* Social proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-gym-steel/30"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full bg-gym-steel border-2 border-gym-dark flex items-center justify-center text-xs text-gym-white"
                                        >
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-gym-light-gray text-sm ml-2">
                                    Join 50K+ athletes
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-gym-orange"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-gym-light-gray text-sm">
                                    4.9/5 rating
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}

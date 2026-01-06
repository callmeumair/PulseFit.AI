'use client'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import ResponsiveVideo from '../ui/ResponsiveVideo'
import WaitlistForm from '../../../components/WaitlistForm'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gym-black">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
                <ResponsiveVideo
                    src="/assets/images/videos/13749263_3840_2160_24fps.mp4"
                    className="absolute inset-0 w-full h-full"
                    overlay={false}
                />

                {/* Dark gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-gym-black/70 via-gym-black/60 to-gym-black/80" />

                {/* Radial gradient for center focus */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-gym-black/30 to-gym-black/70" />

                {/* Subtle grain texture for cinematic feel */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

                {/* Animated orange accent glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.08, 0.05],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gym-orange blur-[120px]"
                />
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="inline-block px-4 py-2 bg-gym-orange/10 border border-gym-orange/30 text-gym-orange text-sm uppercase tracking-wider font-bold">
                            AI-Powered Training
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-display text-6xl md:text-7xl lg:text-display-lg xl:text-display-xl text-gym-white mb-8 leading-none"
                    >
                        TRANSFORM YOUR
                        <br />
                        <span className="text-gym-orange">LIMITS</span> INTO
                        <br />
                        RESULTS
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl text-gym-off-white mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Your AI coach that learns, adapts, and pushes you beyond what you thought possible.
                        Data-driven workouts. Intelligent nutrition. Real performance gains.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex justify-center items-center"
                    >
                        <WaitlistForm
                            source="hero_cta"
                            placeholder="Enter your email for early access"
                            buttonText="Join Early Access"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="mt-16 text-gym-gray text-sm uppercase tracking-wider"
                    >
                        Join the waitlist • Be the first to train • Limited early access
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

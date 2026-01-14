'use client'
import Section from '../ui/Section'
import Container from '../ui/Container'
import { motion } from 'framer-motion'

export default function ProofMetrics() {
    const features = [
        { label: "AI-Powered Coaching", description: "Personalized to your goals" },
        { label: "Smart Workouts", description: "Adapts to your progress" },
        { label: "Nutrition Intelligence", description: "Optimized meal planning" },
        { label: "Performance Analytics", description: "Track every metric" }
    ]

    return (
        <Section spacing="small" background="charcoal">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-gym-orange text-2xl md:text-3xl font-display mb-2">
                                {feature.label}
                            </div>
                            <div className="text-gym-light-gray text-sm uppercase tracking-wider">
                                {feature.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}

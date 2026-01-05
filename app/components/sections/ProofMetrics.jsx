'use client'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Stat from '../ui/Stat'

export default function ProofMetrics() {
    return (
        <Section spacing="small" background="charcoal">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    <Stat number="50" suffix="K+" label="Active Athletes" delay={0} />
                    <Stat number="2.5" suffix="M+" label="Workouts Completed" delay={0.1} />
                    <Stat number="94" suffix="%" label="See Results in 30 Days" delay={0.2} />
                    <Stat number="4.9" suffix="/5" label="Average Rating" delay={0.3} />
                </div>
            </Container>
        </Section>
    )
}

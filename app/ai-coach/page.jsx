import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import FeatureCard from '../components/ui/FeatureCard'
import Container from '../components/ui/Container'
import WaitlistForm from '../../components/WaitlistForm'

export const metadata = {
    title: 'AI Coach - PulseFit AI',
    description: 'Your AI coach that learns, adapts, and coaches you like a calm, disciplined human trainer.',
}

export default function AICoachPage() {
    const capabilities = [
        {
            title: "Training Load Analysis",
            description: "Your AI coach analyzes your training volume, intensity, and frequency to ensure you're progressing without overtraining.",
            features: [
                "Tracks weekly and monthly volume",
                "Monitors intensity patterns",
                "Identifies recovery needs",
                "Prevents burnout and plateaus"
            ]
        },
        {
            title: "Adaptive Workout Difficulty",
            description: "Workouts adjust based on your performance, readiness, and consistency. No more guessing if you should push harder or back off.",
            features: [
                "Daily readiness assessment",
                "Performance-based adjustments",
                "Recovery-aware programming",
                "Smart deload recommendations"
            ]
        },
        {
            title: "Exercise Substitution",
            description: "Don't have access to a specific machine? Your AI coach automatically suggests alternatives based on available equipment.",
            features: [
                "Equipment-based substitutions",
                "Maintains training stimulus",
                "Gym-friendly alternatives",
                "No workout disruption"
            ]
        },
        {
            title: "Recovery-Aware Coaching",
            description: "Your coach monitors sleep quality, soreness levels, and fatigue signals to adjust your training accordingly.",
            features: [
                "Sleep quality tracking",
                "Soreness monitoring",
                "Fatigue signal detection",
                "Intelligent rest day suggestions"
            ]
        }
    ]

    const personalization = [
        "Your training goals (strength, fat loss, endurance, recomposition)",
        "Complete training history and performance trends",
        "Consistency patterns and adherence rates",
        "Recovery capacity and readiness signals",
        "Equipment availability and preferences"
    ]

    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="AI Coach"
                title={<>Your AI Coach That <span className="text-gym-orange">Actually Gets It</span></>}
                description="Calm, disciplined coaching that adapts to your life. No hype. No toxic grind culture. Just intelligent, sustainable training."
            />

            {/* How It Works */}
            <PageSection background="dark">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl text-gym-white mb-6">
                            How It <span className="text-gym-orange">Works</span>
                        </h2>
                        <p className="text-xl text-gym-light-gray leading-relaxed">
                            Your AI coach analyzes your training data, recovery signals, and performance trends to provide
                            personalized recommendations that evolve with you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {capabilities.map((capability, index) => (
                            <FeatureCard
                                key={index}
                                title={capability.title}
                                description={capability.description}
                                features={capability.features}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </Container>
            </PageSection>

            {/* Personalization */}
            <PageSection background="charcoal">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl text-gym-white mb-8 text-center">
                            Personalized to <span className="text-gym-orange">You</span>
                        </h2>
                        <p className="text-xl text-gym-light-gray mb-12 text-center">
                            Your AI coach adapts volume, intensity, and frequency based on:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {personalization.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-6 bg-gym-dark border border-gym-steel/20">
                                    <svg className="w-6 h-6 text-gym-orange mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gym-off-white">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </PageSection>

            {/* Philosophy */}
            <PageSection background="dark">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl text-gym-white mb-8">
                            Our <span className="text-gym-orange">Philosophy</span>
                        </h2>
                        <div className="space-y-6 text-left">
                            <div className="p-8 bg-gym-charcoal border-l-4 border-gym-orange">
                                <h3 className="font-display text-2xl text-gym-white mb-3">Calm, Not Chaotic</h3>
                                <p className="text-gym-light-gray leading-relaxed">
                                    Your AI coach behaves like a calm, disciplined human trainer—not a hype machine.
                                    We focus on sustainable progress, not short-term intensity.
                                </p>
                            </div>
                            <div className="p-8 bg-gym-charcoal border-l-4 border-gym-orange">
                                <h3 className="font-display text-2xl text-gym-white mb-3">No Toxic Grind Culture</h3>
                                <p className="text-gym-light-gray leading-relaxed">
                                    No &quot;no pain, no gain&quot; nonsense. No guilt trips. No toxic hustle mentality.
                                    Just intelligent coaching that respects your recovery and life outside the gym.
                                </p>
                            </div>
                            <div className="p-8 bg-gym-charcoal border-l-4 border-gym-orange">
                                <h3 className="font-display text-2xl text-gym-white mb-3">Long-Term Results</h3>
                                <p className="text-gym-light-gray leading-relaxed">
                                    We optimize for consistency and sustainability over quick fixes.
                                    Real progress takes time, and your AI coach is built for the long game.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </PageSection>

            {/* CTA */}
            <PageSection background="charcoal">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl text-gym-white mb-6">
                            Experience <span className="text-gym-orange">AI Coaching</span>
                        </h2>
                        <p className="text-xl text-gym-light-gray mb-8">
                            Join the waitlist to be among the first to train with your AI coach.
                        </p>
                        <div className="flex justify-center">
                            <WaitlistForm
                                source="ai_coach_page"
                                placeholder="Enter your email"
                                buttonText="Join Waitlist"
                            />
                        </div>
                    </div>
                </Container>
            </PageSection>
        </main>
    )
}

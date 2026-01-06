import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import FeatureCard from '../components/ui/FeatureCard'
import Container from '../components/ui/Container'
import WaitlistForm from '../../components/WaitlistForm'

export const metadata = {
    title: 'Features - PulseFit AI',
    description: 'Smart workouts, AI coaching, nutrition intelligence, and performance analytics built for real gym-goers.',
}

export default function FeaturesPage() {
    const features = [
        {
            title: "Smart Workouts",
            description: "Goal-based training programs that adapt to your progress. Whether you're focused on fat loss, strength, endurance, or body recomposition, PulseFit AI builds gym-based workouts using machines and free weights.",
            features: [
                "Progressive overload handled automatically",
                "Rest time, tempo, and volume adjusted by performance",
                "Gym-focused exercises (machines + free weights)",
                "Programs for fat loss, strength, endurance, and recomposition"
            ],
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            title: "AI Coach",
            description: "Your AI coach that learns from your training history and adapts recommendations based on your daily readiness. No hype, no toxic grind culture—just intelligent, sustainable coaching.",
            features: [
                "Adaptive training recommendations",
                "Daily readiness-based workout adjustments",
                "Recovery-aware coaching (sleep, soreness, fatigue)",
                "Form cues and workout guidance"
            ],
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: "Nutrition Intelligence",
            description: "Calorie and macro targets based on your goals. Not rigid meal plans—just gym-friendly nutrition guidance that adjusts based on your training load and progress.",
            features: [
                "Calorie and macro targets based on goals",
                "Meal guidance (not rigid meal plans)",
                "Gym-friendly nutrition suggestions",
                "Adjusts intake based on training load and progress"
            ],
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            )
        },
        {
            title: "Performance Analytics",
            description: "Track what actually matters. Strength progression, workout consistency, volume trends, and fatigue indicators—all presented in simple, gym-native visuals.",
            features: [
                "Strength progression tracking per lift",
                "Workout consistency and adherence",
                "Volume, intensity, and fatigue trends",
                "Weekly and monthly performance summaries"
            ],
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
            )
        },
        {
            title: "Habit & Consistency System",
            description: "Long-term progress over vanity metrics. Track your training streaks, get smart reminders, and build sustainable habits that last.",
            features: [
                "Streaks and adherence tracking",
                "Smart reminders (training + nutrition)",
                "Long-term progress focus",
                "Consistency over intensity"
            ],
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ]

    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="Product Features"
                title={<>Built for <span className="text-gym-orange">Real Gym-Goers</span></>}
                description="Smart workouts, intelligent coaching, and performance tracking that adapts to your goals and progress."
            />

            <PageSection background="dark">
                <Container>
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                features={feature.features}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </Container>
            </PageSection>

            {/* CTA Section */}
            <PageSection background="charcoal">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl text-gym-white mb-6">
                            Ready to Train <span className="text-gym-orange">Smarter</span>?
                        </h2>
                        <p className="text-xl text-gym-light-gray mb-8">
                            Join the waitlist to get early access and lifetime discounted pricing.
                        </p>
                        <div className="flex justify-center">
                            <WaitlistForm
                                source="features_page"
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

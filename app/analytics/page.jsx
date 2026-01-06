import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import Container from '../components/ui/Container'
import WaitlistForm from '../../components/WaitlistForm'

export const metadata = {
    title: 'Analytics - PulseFit AI',
    description: 'Track what actually matters. Simple, gym-native analytics for strength, volume, and consistency.',
}

export default function AnalyticsPage() {
    const metrics = [
        {
            title: "Strength Progression",
            description: "Track your strength gains for every lift. See exactly how much stronger you're getting over time.",
            icon: "📈"
        },
        {
            title: "Volume Load Trends",
            description: "Monitor your total training volume to ensure progressive overload and avoid overtraining.",
            icon: "📊"
        },
        {
            title: "Training Frequency",
            description: "See how often you're training each muscle group and movement pattern.",
            icon: "📅"
        },
        {
            title: "Consistency Score",
            description: "Your most important metric. Track adherence and build sustainable training habits.",
            icon: "✓"
        },
        {
            title: "Fatigue Indicators",
            description: "Monitor recovery signals to know when to push and when to back off.",
            icon: "⚡"
        },
        {
            title: "Goal Progress",
            description: "Track progress toward your specific goals—whether it's strength, fat loss, or endurance.",
            icon: "🎯"
        }
    ]

    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="Analytics"
                title={<>Track What <span className="text-gym-orange">Actually Matters</span></>}
                description="Simple, gym-native visuals. No cluttered data walls. Just the metrics that drive real progress."
            />

            {/* Metrics Grid */}
            <PageSection background="dark">
                <Container>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="p-8 bg-gym-charcoal border border-gym-steel/20 hover:border-gym-orange/30 transition-all duration-300"
                            >
                                <div className="text-5xl mb-4">{metric.icon}</div>
                                <h3 className="font-display text-2xl text-gym-white mb-3">
                                    {metric.title}
                                </h3>
                                <p className="text-gym-light-gray leading-relaxed">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-3xl md:text-4xl text-gym-white mb-6">
                            Weekly & Monthly <span className="text-gym-orange">Summaries</span>
                        </h2>
                        <p className="text-xl text-gym-light-gray leading-relaxed">
                            Get clear, actionable summaries of your training. Visual trend lines show you exactly
                            where you&apos;re improving and where you need to focus.
                        </p>
                    </div>
                </Container>
            </PageSection>

            {/* Philosophy */}
            <PageSection background="charcoal">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-4xl md:text-5xl text-gym-white mb-6">
                                Simple, Not <span className="text-gym-orange">Overwhelming</span>
                            </h2>
                            <p className="text-xl text-gym-light-gray leading-relaxed">
                                Most fitness apps drown you in data. PulseFit AI shows you only what matters—
                                presented in clean, easy-to-understand visuals.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-gym-dark border-l-4 border-gym-orange">
                                <h3 className="font-display text-2xl text-gym-white mb-3">Gym-Native Visuals</h3>
                                <p className="text-gym-light-gray leading-relaxed">
                                    Charts and graphs designed for lifters, not data scientists.
                                    See your progress at a glance.
                                </p>
                            </div>
                            <div className="p-8 bg-gym-dark border-l-4 border-gym-orange">
                                <h3 className="font-display text-2xl text-gym-white mb-3">No Data Walls</h3>
                                <p className="text-gym-light-gray leading-relaxed">
                                    We don&apos;t overwhelm you with every possible metric.
                                    Just the ones that actually drive results.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </PageSection>

            {/* CTA */}
            <PageSection background="dark">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl text-gym-white mb-6">
                            Start <span className="text-gym-orange">Tracking</span>
                        </h2>
                        <p className="text-xl text-gym-light-gray mb-8">
                            Join the waitlist to get early access to performance analytics that actually help you improve.
                        </p>
                        <div className="flex justify-center">
                            <WaitlistForm
                                source="analytics_page"
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

import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import Container from '../components/ui/Container'
import WaitlistForm from '../../components/WaitlistForm'

export const metadata = {
    title: 'About - PulseFit AI',
    description: 'Help people train smarter, not harder—with intelligence, discipline, and consistency.',
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="About Us"
                title={<>Train <span className="text-gym-orange">Smarter</span>, Not Harder</>}
                description="Help people train smarter, not harder—with intelligence, discipline, and consistency."
            />

            {/* Mission & Vision */}
            <PageSection background="dark">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl text-gym-white mb-4">
                                Our <span className="text-gym-orange">Mission</span>
                            </h2>
                            <p className="text-xl text-gym-light-gray leading-relaxed">
                                Help people train smarter, not harder—with intelligence, discipline, and consistency.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display text-3xl md:text-4xl text-gym-white mb-4">
                                Our <span className="text-gym-orange">Vision</span>
                            </h2>
                            <p className="text-xl text-gym-light-gray leading-relaxed">
                                To become the most trusted AI-powered fitness coach for real gym-goers.
                            </p>
                        </div>
                    </div>
                </Container>
            </PageSection>

            {/* Why We Built This */}
            <PageSection background="charcoal">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl text-gym-white mb-8 text-center">
                            Why We <span className="text-gym-orange">Built This</span>
                        </h2>
                        <div className="space-y-6">
                            <div className="p-8 bg-gym-dark border-l-4 border-gym-orange">
                                <h3 className="font-display text-2xl text-gym-white mb-3">Too Generic</h3>
                                <p className="text-gym-light-gray leading-relaxed">
                                    Most fitness apps offer cookie-cutter programs that don't adapt to your individual needs,
                                    progress, or recovery capacity.
                                </p>
                            </div>
                            <div className="p-8 bg-gym-dark border-l-4 border-gym-orange">
                                <h3 className="font-display text-2xl text-gym-white mb-3">Too Complex</h3>
                                <p className="text-gym-light-gray leading-relaxed">
                                    Other apps drown you in data, spreadsheets, and complicated tracking systems that
                                    require a PhD to understand.
                                </p>
                            </div>
                            <div className="p-8 bg-gym-dark border-l-4 border-gym-orange">
                                <h3 className="font-display text-2xl text-gym-white mb-3">Built for Influencers</h3>
                                <p className="text-gym-light-gray leading-relaxed">
                                    Most apps are designed for Instagram aesthetics and influencer culture—not for real people
                                    with real lives who just want to get stronger and healthier.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 p-8 bg-gym-orange/10 border border-gym-orange/30 text-center">
                            <p className="text-xl text-gym-white leading-relaxed">
                                <span className="font-display text-2xl text-gym-orange">PulseFit AI</span> sits between
                                hardcore coaching and everyday gym reality. Intelligent enough to adapt, simple enough to use daily.
                            </p>
                        </div>
                    </div>
                </Container>
            </PageSection>

            {/* Team */}
            <PageSection background="dark">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl text-gym-white mb-8">
                            Our <span className="text-gym-orange">Team</span>
                        </h2>
                        <div className="space-y-4 text-xl text-gym-light-gray">
                            <p>Small, focused team</p>
                            <p>Engineers + product builders</p>
                            <p>Remote-first</p>
                            <p className="pt-4 text-gym-off-white">Founded in <span className="text-gym-orange font-bold">2025</span></p>
                            <p className="text-gym-off-white">Bootstrapped and proud</p>
                        </div>
                    </div>
                </Container>
            </PageSection>

            {/* CTA */}
            <PageSection background="charcoal">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl text-gym-white mb-6">
                            Join Our <span className="text-gym-orange">Journey</span>
                        </h2>
                        <p className="text-xl text-gym-light-gray mb-8">
                            Be part of building the future of intelligent fitness coaching.
                        </p>
                        <div className="flex justify-center">
                            <WaitlistForm
                                source="about_page"
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

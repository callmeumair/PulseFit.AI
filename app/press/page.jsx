import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import Container from '../components/ui/Container'

export const metadata = {
    title: 'Press - PulseFit AI',
    description: 'Press and media information for PulseFit AI.',
}

export default function PressPage() {
    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="Press & Media"
                title={<>Press <span className="text-gym-orange">Information</span></>}
                description="Media inquiries and press resources for PulseFit AI."
            />

            <PageSection background="dark">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Product Description */}
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl text-gym-white mb-6">
                                About <span className="text-gym-orange">PulseFit AI</span>
                            </h2>
                            <p className="text-xl text-gym-light-gray leading-relaxed mb-4">
                                PulseFit AI is an AI-powered fitness coaching platform built for real gym-goers.
                                We provide intelligent workout programming, nutrition guidance, and performance analytics
                                that adapt to your goals, progress, and recovery capacity.
                            </p>
                            <p className="text-xl text-gym-light-gray leading-relaxed">
                                Unlike generic fitness apps or overly complex training systems, PulseFit AI sits between
                                hardcore coaching and everyday gym reality—intelligent enough to adapt, simple enough to use daily.
                            </p>
                        </div>

                        {/* Key Facts */}
                        <div className="p-8 bg-gym-charcoal border border-gym-steel/20">
                            <h3 className="font-display text-2xl text-gym-white mb-6">Key Facts</h3>
                            <ul className="space-y-3 text-gym-light-gray">
                                <li className="flex items-start gap-3">
                                    <span className="text-gym-orange mt-1">•</span>
                                    <span>Founded in 2025</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gym-orange mt-1">•</span>
                                    <span>Bootstrapped and independent</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gym-orange mt-1">•</span>
                                    <span>Remote-first team</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gym-orange mt-1">•</span>
                                    <span>Currently in pre-launch phase</span>
                                </li>
                            </ul>
                        </div>

                        {/* Press Contact */}
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl text-gym-white mb-6">
                                Press <span className="text-gym-orange">Contact</span>
                            </h2>
                            <div className="p-8 bg-gym-charcoal border-l-4 border-gym-orange">
                                <p className="text-gym-light-gray mb-4">
                                    For press inquiries, interviews, or media requests:
                                </p>
                                <a
                                    href="mailto:press@pulsefit.ai"
                                    className="text-2xl text-gym-orange hover:text-gym-orange/80 transition-colors duration-200"
                                >
                                    press@pulsefit.ai
                                </a>
                            </div>
                        </div>

                        {/* Founder Bio */}
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl text-gym-white mb-6">
                                Founder <span className="text-gym-orange">Bio</span>
                            </h2>
                            <div className="p-8 bg-gym-charcoal border border-gym-steel/20">
                                <p className="text-gym-light-gray leading-relaxed">
                                    PulseFit AI was founded by a team of engineers and product builders who were frustrated
                                    with the state of fitness apps—either too generic, too complex, or built for influencers
                                    instead of real people. We set out to build an AI coach that&apos;s intelligent, sustainable,
                                    and actually useful for everyday gym-goers.
                                </p>
                            </div>
                        </div>

                        {/* Logo & Assets */}
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl text-gym-white mb-6">
                                Brand <span className="text-gym-orange">Assets</span>
                            </h2>
                            <div className="p-8 bg-gym-charcoal border border-gym-steel/20 text-center">
                                <p className="text-gym-light-gray mb-6">
                                    Logo and brand assets available upon request.
                                </p>
                                <a
                                    href="mailto:press@pulsefit.ai?subject=Brand Assets Request"
                                    className="inline-block px-8 py-4 bg-gym-orange text-gym-black font-bold uppercase tracking-wider hover:bg-gym-orange/90 transition-colors duration-300"
                                >
                                    Request Assets
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </PageSection>
        </main>
    )
}

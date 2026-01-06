import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import Container from '../components/ui/Container'

export const metadata = {
    title: 'Terms of Service - PulseFit AI',
    description: 'Terms of Service for PulseFit AI.',
}

export default function TermsPage() {
    const lastUpdated = "January 5, 2026"

    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="Legal"
                title={<>Terms of <span className="text-gym-orange">Service</span></>}
                description={`Last updated: ${lastUpdated}`}
            />

            <PageSection background="dark">
                <Container>
                    <div className="max-w-4xl mx-auto prose prose-invert prose-orange">
                        <div className="space-y-8 text-gym-light-gray">

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">1. Acceptance of Terms</h2>
                                <p className="leading-relaxed">
                                    By accessing or using PulseFit AI ("the Service"), you agree to be bound by these Terms of Service.
                                    If you do not agree to these terms, do not use the Service.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">2. Waitlist Terms</h2>
                                <p className="leading-relaxed mb-4">
                                    <strong className="text-gym-white">No Guarantee of Access:</strong> Joining the waitlist does not guarantee
                                    access to PulseFit AI. We will grant access on a rolling basis as capacity allows.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-gym-white">Early Access Pricing:</strong> Early access members who join the waitlist
                                    will receive lifetime discounted pricing, locked in at the rate offered at the time of their access grant.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">3. Health Disclaimer</h2>
                                <div className="p-6 bg-gym-orange/10 border-l-4 border-gym-orange mb-4">
                                    <p className="font-bold text-gym-white mb-2">IMPORTANT: NOT MEDICAL ADVICE</p>
                                    <p className="leading-relaxed">
                                        PulseFit AI provides fitness coaching and training recommendations, but it is NOT a substitute
                                        for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare
                                        provider before starting any new exercise or nutrition program.
                                    </p>
                                </div>
                                <p className="leading-relaxed">
                                    You acknowledge that:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                                    <li>Exercise carries inherent risks</li>
                                    <li>You are responsible for your own health and safety</li>
                                    <li>You should stop exercising if you experience pain or discomfort</li>
                                    <li>PulseFit AI is not liable for injuries or health issues resulting from use of the Service</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">4. Feature Availability</h2>
                                <p className="leading-relaxed">
                                    <strong className="text-gym-white">Features May Change:</strong> We reserve the right to modify,
                                    add, or remove features at any time. Some features may be in beta or development and may not
                                    function as expected.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">5. User Responsibilities</h2>
                                <p className="leading-relaxed mb-4">You agree to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Provide accurate information</li>
                                    <li>Maintain the security of your account</li>
                                    <li>Use the Service only for lawful purposes</li>
                                    <li>Not share your account with others</li>
                                    <li>Not attempt to reverse engineer or hack the Service</li>
                                    <li>Not use the Service to harm others or violate their rights</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">6. Subscription and Billing</h2>
                                <h3 className="font-display text-xl text-gym-white mb-3 mt-6">6.1 Payment</h3>
                                <p className="leading-relaxed mb-4">
                                    By subscribing to a paid plan, you authorize us to charge your payment method on a recurring basis
                                    (monthly or yearly, depending on your selection).
                                </p>

                                <h3 className="font-display text-xl text-gym-white mb-3 mt-6">6.2 Cancellation</h3>
                                <p className="leading-relaxed mb-4">
                                    You may cancel your subscription at any time. Cancellation takes effect at the end of your current
                                    billing period. No refunds for partial periods.
                                </p>

                                <h3 className="font-display text-xl text-gym-white mb-3 mt-6">6.3 Refunds</h3>
                                <p className="leading-relaxed">
                                    We offer a 30-day money-back guarantee. If you're not satisfied within the first 30 days of your
                                    initial subscription, contact us for a full refund.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">7. Intellectual Property</h2>
                                <p className="leading-relaxed">
                                    All content, features, and functionality of PulseFit AI are owned by us and protected by copyright,
                                    trademark, and other intellectual property laws. You may not copy, modify, distribute, or create
                                    derivative works without our permission.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">8. Limitation of Liability</h2>
                                <p className="leading-relaxed mb-4">
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, PULSEFIT AI SHALL NOT BE LIABLE FOR:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Any injuries, health issues, or damages resulting from use of the Service</li>
                                    <li>Loss of data or interruption of service</li>
                                    <li>Indirect, incidental, or consequential damages</li>
                                    <li>Damages exceeding the amount you paid for the Service in the past 12 months</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">9. Termination</h2>
                                <p className="leading-relaxed">
                                    We reserve the right to suspend or terminate your account at any time for violation of these Terms,
                                    fraudulent activity, or any other reason at our discretion. Upon termination, your right to use
                                    the Service ceases immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">10. Changes to Terms</h2>
                                <p className="leading-relaxed">
                                    We may update these Terms from time to time. We will notify you of significant changes via email
                                    or app notification. Continued use of the Service after changes constitutes acceptance of the updated Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">11. Governing Law</h2>
                                <p className="leading-relaxed">
                                    These Terms are governed by and construed in accordance with applicable laws. Any disputes shall be
                                    resolved through binding arbitration.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">12. Contact Us</h2>
                                <p className="leading-relaxed">
                                    If you have questions about these Terms, please contact us:
                                </p>
                                <div className="mt-4 p-6 bg-gym-charcoal border-l-4 border-gym-orange">
                                    <p className="font-bold text-gym-white">PulseFit AI</p>
                                    <p>Email: <a href="mailto:legal@pulsefit.ai" className="text-gym-orange hover:text-gym-orange/80">legal@pulsefit.ai</a></p>
                                    <p>Support: <a href="mailto:support@pulsefit.ai" className="text-gym-orange hover:text-gym-orange/80">support@pulsefit.ai</a></p>
                                </div>
                            </section>

                        </div>
                    </div>
                </Container>
            </PageSection>
        </main>
    )
}

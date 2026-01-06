import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import Container from '../components/ui/Container'

export const metadata = {
    title: 'Privacy Policy - PulseFit AI',
    description: 'Privacy Policy for PulseFit AI.',
}

export default function PrivacyPage() {
    const lastUpdated = "January 5, 2026"

    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="Legal"
                title={<>Privacy <span className="text-gym-orange">Policy</span></>}
                description={`Last updated: ${lastUpdated}`}
            />

            <PageSection background="dark">
                <Container>
                    <div className="max-w-4xl mx-auto prose prose-invert prose-orange">
                        <div className="space-y-8 text-gym-light-gray">

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">1. Introduction</h2>
                                <p className="leading-relaxed">
                                    PulseFit AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                    when you use our fitness coaching application and services.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">2. Information We Collect</h2>
                                <h3 className="font-display text-xl text-gym-white mb-3 mt-6">2.1 Information You Provide</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Email address</li>
                                    <li>Account credentials</li>
                                    <li>Profile information (age, weight, fitness goals)</li>
                                    <li>Workout data and exercise logs</li>
                                    <li>Nutrition tracking data</li>
                                    <li>Feedback and support communications</li>
                                </ul>

                                <h3 className="font-display text-xl text-gym-white mb-3 mt-6">2.2 Automatically Collected Information</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Device information (type, operating system, unique identifiers)</li>
                                    <li>App usage analytics</li>
                                    <li>Performance metrics and crash reports</li>
                                    <li>IP address and general location data</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">3. How We Use Your Information</h2>
                                <p className="leading-relaxed mb-4">We use your information to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Provide and personalize your AI coaching experience</li>
                                    <li>Generate workout recommendations and nutrition guidance</li>
                                    <li>Track your progress and performance trends</li>
                                    <li>Improve our AI algorithms and app features</li>
                                    <li>Send important updates and notifications</li>
                                    <li>Provide customer support</li>
                                    <li>Detect and prevent fraud or abuse</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">4. Data Sharing and Disclosure</h2>
                                <p className="leading-relaxed mb-4">
                                    <strong className="text-gym-white">We do not sell your personal data to third parties.</strong>
                                </p>
                                <p className="leading-relaxed mb-4">We may share your information with:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-gym-white">Service Providers:</strong> Third-party services that help us operate our app (hosting, analytics, payment processing)</li>
                                    <li><strong className="text-gym-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
                                    <li><strong className="text-gym-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">5. Data Security</h2>
                                <p className="leading-relaxed">
                                    We implement industry-standard security measures to protect your data, including encryption,
                                    secure servers, and regular security audits. However, no method of transmission over the internet
                                    is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">6. Your Rights</h2>
                                <p className="leading-relaxed mb-4">You have the right to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Access your personal data</li>
                                    <li>Correct inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Export your data</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                                <p className="leading-relaxed mt-4">
                                    To exercise these rights, contact us at <a href="mailto:privacy@pulsefit.ai" className="text-gym-orange hover:text-gym-orange/80">privacy@pulsefit.ai</a>
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">7. Data Retention</h2>
                                <p className="leading-relaxed">
                                    We retain your data for as long as your account is active or as needed to provide services.
                                    If you delete your account, we will delete your personal data within 30 days, except where
                                    we are required to retain it for legal purposes.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">8. Children&apos;s Privacy</h2>
                                <p className="leading-relaxed">
                                    PulseFit AI is not intended for users under 18 years of age. We do not knowingly collect
                                    data from children. If you believe we have collected data from a child, please contact us immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">9. Changes to This Policy</h2>
                                <p className="leading-relaxed">
                                    We may update this Privacy Policy from time to time. We will notify you of significant changes
                                    via email or app notification. Continued use of our services after changes constitutes acceptance
                                    of the updated policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-3xl text-gym-white mb-4">10. Contact Us</h2>
                                <p className="leading-relaxed">
                                    If you have questions about this Privacy Policy, please contact us:
                                </p>
                                <div className="mt-4 p-6 bg-gym-charcoal border-l-4 border-gym-orange">
                                    <p className="font-bold text-gym-white">PulseFit AI</p>
                                    <p>Email: <a href="mailto:privacy@pulsefit.ai" className="text-gym-orange hover:text-gym-orange/80">privacy@pulsefit.ai</a></p>
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

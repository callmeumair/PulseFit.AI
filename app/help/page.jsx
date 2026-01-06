import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import FAQItem from '../components/ui/FAQItem'
import Container from '../components/ui/Container'
import Link from 'next/link'

export const metadata = {
    title: 'Help Center - PulseFit AI',
    description: 'Get help and answers to frequently asked questions about PulseFit AI.',
}

export default function HelpPage() {
    const faqs = [
        {
            question: "How does the AI coach work?",
            answer: "Your AI coach analyzes your training history, performance trends, recovery signals, and consistency patterns to provide personalized workout recommendations. It adapts your training volume, intensity, and frequency based on your daily readiness and long-term progress. Think of it as a calm, disciplined human trainer that learns from your data."
        },
        {
            question: "Is this beginner-friendly?",
            answer: "Yes. PulseFit AI works for all experience levels. Whether you're new to the gym or an experienced lifter, the AI coach adapts to your current fitness level and progressively challenges you at the right pace. Beginners get clear guidance and form cues, while advanced lifters get intelligent programming that respects their training history."
        },
        {
            question: "Do I need gym equipment?",
            answer: "Yes. PulseFit AI is built for gym-based training using machines and free weights. The AI coach can substitute exercises based on your available equipment, but the program is designed for people who have access to a gym or home gym setup."
        },
        {
            question: "Is nutrition mandatory?",
            answer: "No. Nutrition guidance is optional. You can use PulseFit AI purely for workout programming and tracking. However, if you want to optimize your results, the nutrition intelligence feature provides calorie and macro targets based on your goals and training load."
        },
        {
            question: "Can I cancel anytime?",
            answer: "Yes. You can cancel your subscription at any time with no questions asked and no hidden fees. If you cancel, you'll retain access until the end of your current billing period."
        },
        {
            question: "How is my data used?",
            answer: "Your data is used solely to provide and improve your AI coaching experience. We collect workout data, performance metrics, and usage analytics to personalize your training. We never sell your data to third parties. For full details, see our Privacy Policy."
        },
        {
            question: "What devices are supported?",
            answer: "PulseFit AI will be available on iOS and Android at launch. You'll be able to access your account from multiple devices, and your data syncs automatically."
        },
        {
            question: "When will the app launch?",
            answer: "We're currently in pre-launch phase. Join the waitlist to get early access and be notified as soon as we launch. Early access members get lifetime discounted pricing."
        },
        {
            question: "Do you offer a free trial?",
            answer: "We offer a Free tier with basic features. For the full AI coaching experience (Pro tier), early access members will get special launch pricing. We may offer trials in the future, but for now, the Free tier is the best way to try PulseFit AI."
        },
        {
            question: "How do I contact support?",
            answer: "You can reach our support team through the Contact page or by emailing support@pulsefit.ai. We typically respond within 24 hours."
        }
    ]

    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="Help Center"
                title={<>Frequently Asked <span className="text-gym-orange">Questions</span></>}
                description="Get answers to common questions about PulseFit AI."
            />

            <PageSection background="dark">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-2">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>

                        <div className="mt-16 p-8 bg-gym-charcoal border border-gym-steel/20 text-center">
                            <h3 className="font-display text-2xl text-gym-white mb-4">
                                Still Have Questions?
                            </h3>
                            <p className="text-gym-light-gray mb-6">
                                Can't find what you're looking for? Get in touch with our support team.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-gym-orange text-gym-black font-bold uppercase tracking-wider hover:bg-gym-orange/90 transition-colors duration-300"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </Container>
            </PageSection>
        </main>
    )
}

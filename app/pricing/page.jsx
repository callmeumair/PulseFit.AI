'use client'
import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import PricingCard from '../components/ui/PricingCard'
import FAQItem from '../components/ui/FAQItem'
import Container from '../components/ui/Container'

export default function PricingPage() {
    const [billingPeriod, setBillingPeriod] = useState('monthly')

    const pricingTiers = [
        {
            name: "Free",
            price: "$0",
            period: null,
            description: "Get started with the basics",
            features: [
                "Basic workout plans",
                "Limited tracking",
                "Manual progression",
                "Basic analytics"
            ],
            buttonText: "Get Started",
            highlighted: false
        },
        {
            name: "Pro",
            price: billingPeriod === 'monthly' ? "$4.99" : "$49",
            period: billingPeriod === 'monthly' ? "month" : "year",
            description: "Full AI-powered coaching",
            features: [
                "Full AI Coach",
                "Personalized workouts",
                "Nutrition intelligence",
                "Advanced analytics",
                "Habit tracking",
                "Progressive overload automation",
                "Recovery-aware coaching",
                "Priority support"
            ],
            buttonText: "Join Waitlist",
            highlighted: true,
            badge: "Most Popular"
        },
        {
            name: "Elite",
            price: billingPeriod === 'monthly' ? "$9.99" : "$99",
            period: billingPeriod === 'monthly' ? "month" : "year",
            description: "Premium coaching experience",
            features: [
                "Everything in Pro",
                "Priority AI coaching",
                "Early access to new features",
                "Advanced performance insights",
                "1-on-1 support",
                "Custom program design"
            ],
            buttonText: "Coming Soon",
            highlighted: false,
            badge: "Future"
        }
    ]

    const faqs = [
        {
            question: "Can I cancel anytime?",
            answer: "Yes. You can cancel your subscription at any time. No questions asked, no hidden fees."
        },
        {
            question: "What's included in the early access pricing?",
            answer: "Early access members get lifetime discounted Pro pricing. This rate is locked in forever—even as we add new features and increase prices for new users."
        },
        {
            question: "Do you offer refunds?",
            answer: "Yes. If you're not satisfied within the first 30 days, we'll refund you in full. No hassle."
        },
        {
            question: "How does billing work?",
            answer: "You can choose monthly or yearly billing. Yearly billing saves you approximately 2 months compared to monthly. All payments are processed securely."
        },
        {
            question: "When will I be charged?",
            answer: "You won't be charged until the app launches and you're granted access. Joining the waitlist is completely free."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, debit cards, and digital payment methods through our secure payment processor."
        }
    ]

    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="Pricing"
                title={<>Simple, <span className="text-gym-orange">Honest</span> Pricing</>}
                description="No hidden fees. No inflated claims. Just straightforward pricing for serious training."
            />

            {/* Early Access Banner */}
            <PageSection background="charcoal">
                <Container>
                    <div className="max-w-4xl mx-auto text-center p-8 bg-gym-orange/10 border border-gym-orange/30">
                        <h3 className="font-display text-2xl md:text-3xl text-gym-white mb-4">
                            🔒 Early Access Pricing
                        </h3>
                        <p className="text-gym-light-gray text-lg">
                            Join the waitlist now and lock in <span className="text-gym-orange font-bold">lifetime discounted pricing</span>.
                            This rate will never increase for early members—even as we add new features.
                        </p>
                    </div>
                </Container>
            </PageSection>

            {/* Billing Toggle */}
            <PageSection background="dark">
                <Container>
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex bg-gym-charcoal border border-gym-steel/20 p-1">
                            <button
                                onClick={() => setBillingPeriod('monthly')}
                                className={`px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 ${billingPeriod === 'monthly'
                                        ? 'bg-gym-orange text-gym-black'
                                        : 'text-gym-light-gray hover:text-gym-white'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingPeriod('yearly')}
                                className={`px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 ${billingPeriod === 'yearly'
                                        ? 'bg-gym-orange text-gym-black'
                                        : 'text-gym-light-gray hover:text-gym-white'
                                    }`}
                            >
                                Yearly
                                <span className="ml-2 text-xs">(Save ~17%)</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingTiers.map((tier, index) => (
                            <PricingCard
                                key={index}
                                {...tier}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </Container>
            </PageSection>

            {/* FAQ Section */}
            <PageSection background="charcoal">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl text-gym-white mb-12 text-center">
                            Frequently Asked <span className="text-gym-orange">Questions</span>
                        </h2>
                        <div className="space-y-2">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </PageSection>
        </main>
    )
}

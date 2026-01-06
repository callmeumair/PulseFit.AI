'use client'
import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import Container from '../components/ui/Container'

export default function CareersPage() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')

    const values = [
        {
            title: "Build for Real People",
            description: "We build for gym-goers, not influencers. Every feature serves real training needs."
        },
        {
            title: "Honest & Direct",
            description: "No hype, no BS. We communicate clearly and build products we'd actually use."
        },
        {
            title: "Long-Term Thinking",
            description: "We optimize for sustainability—in our product, our team, and our approach."
        },
        {
            title: "Remote-First",
            description: "Work from anywhere. We care about output and impact, not where you sit."
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('success')
        setEmail('')
    }

    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="Careers"
                title={<><span className="text-gym-orange">Not Hiring</span> Yet</>}
                description="PulseFit AI is a small, focused team. We'll open roles once we approach public launch."
            />

            <PageSection background="dark">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-3xl md:text-4xl text-gym-white mb-8 text-center">
                            Our <span className="text-gym-orange">Values</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="p-8 bg-gym-charcoal border border-gym-steel/20"
                                >
                                    <h3 className="font-display text-2xl text-gym-white mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gym-light-gray leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="max-w-2xl mx-auto text-center">
                            <h3 className="font-display text-2xl text-gym-white mb-6">
                                Interested in Future Opportunities?
                            </h3>
                            <p className="text-gym-light-gray mb-8">
                                Leave your email and we&apos;ll reach out when we start hiring.
                            </p>
                            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="flex-1 px-4 py-3 bg-gym-charcoal border border-gym-steel/40 text-gym-white placeholder-gym-gray focus:outline-none focus:border-gym-orange"
                                    />
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-gym-orange text-gym-black font-bold uppercase tracking-wider hover:bg-gym-orange/90 transition-colors duration-300"
                                    >
                                        Notify Me
                                    </button>
                                </div>
                                {status === 'success' && (
                                    <p className="mt-4 text-gym-orange">Thanks! We&apos;ll be in touch when we&apos;re hiring.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </Container>
            </PageSection>
        </main>
    )
}

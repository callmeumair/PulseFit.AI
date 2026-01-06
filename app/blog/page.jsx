'use client'
import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import Container from '../components/ui/Container'

export default function BlogPage() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')

    const upcomingTopics = [
        "How AI can improve training consistency",
        "Why most workout plans fail",
        "Strength vs aesthetics: what actually matters",
        "Data-driven fitness vs influencer fitness"
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('success')
        setEmail('')
    }

    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="Blog"
                title={<><span className="text-gym-orange">Coming Soon</span></>}
                description="Thoughtful content on training, consistency, and data-driven fitness."
            />

            <PageSection background="dark">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-3xl md:text-4xl text-gym-white mb-8 text-center">
                            Upcoming <span className="text-gym-orange">Topics</span>
                        </h2>
                        <div className="space-y-4 mb-12">
                            {upcomingTopics.map((topic, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-gym-charcoal border border-gym-steel/20 flex items-start gap-4"
                                >
                                    <span className="text-gym-orange font-display text-2xl">{index + 1}</span>
                                    <p className="text-gym-off-white text-lg pt-1">{topic}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <h3 className="font-display text-2xl text-gym-white mb-6">
                                Get Notified When We Publish
                            </h3>
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
                                    <p className="mt-4 text-gym-orange">Thanks! We&apos;ll notify you when we publish.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </Container>
            </PageSection>
        </main>
    )
}

'use client'
import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import Container from '../components/ui/Container'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        // Simulate sending (replace with actual API call)
        setTimeout(() => {
            setStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        }, 1000)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <main className="min-h-screen bg-gym-black">
            <PageHero
                badge="Contact"
                title={<>Get in <span className="text-gym-orange">Touch</span></>}
                description="Have questions? We're here to help."
            />

            <PageSection background="dark">
                <Container>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="font-display text-3xl text-gym-white mb-6">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gym-light-gray mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gym-charcoal border border-gym-steel/40 text-gym-white placeholder-gym-gray focus:outline-none focus:border-gym-orange"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gym-light-gray mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gym-charcoal border border-gym-steel/40 text-gym-white placeholder-gym-gray focus:outline-none focus:border-gym-orange"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gym-light-gray mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gym-charcoal border border-gym-steel/40 text-gym-white placeholder-gym-gray focus:outline-none focus:border-gym-orange"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gym-light-gray mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gym-charcoal border border-gym-steel/40 text-gym-white placeholder-gym-gray focus:outline-none focus:border-gym-orange resize-none"
                                        placeholder="Tell us more..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full px-8 py-4 bg-gym-orange text-gym-black font-bold uppercase tracking-wider hover:bg-gym-orange/90 transition-colors duration-300 disabled:opacity-50"
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>

                                {status === 'success' && (
                                    <p className="text-gym-orange text-center">
                                        Message sent! We'll get back to you within 24 hours.
                                    </p>
                                )}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="font-display text-3xl text-gym-white mb-6">
                                Other Ways to Reach Us
                            </h2>

                            <div className="space-y-6">
                                <div className="p-6 bg-gym-charcoal border border-gym-steel/20">
                                    <h3 className="font-display text-xl text-gym-white mb-2">
                                        Email Support
                                    </h3>
                                    <a
                                        href="mailto:support@pulsefit.ai"
                                        className="text-gym-orange hover:text-gym-orange/80 transition-colors duration-200"
                                    >
                                        support@pulsefit.ai
                                    </a>
                                    <p className="text-gym-light-gray text-sm mt-2">
                                        We typically respond within 24 hours
                                    </p>
                                </div>

                                <div className="p-6 bg-gym-charcoal border border-gym-steel/20">
                                    <h3 className="font-display text-xl text-gym-white mb-2">
                                        Press Inquiries
                                    </h3>
                                    <a
                                        href="mailto:press@pulsefit.ai"
                                        className="text-gym-orange hover:text-gym-orange/80 transition-colors duration-200"
                                    >
                                        press@pulsefit.ai
                                    </a>
                                    <p className="text-gym-light-gray text-sm mt-2">
                                        For media and partnership inquiries
                                    </p>
                                </div>

                                <div className="p-6 bg-gym-charcoal border border-gym-steel/20">
                                    <h3 className="font-display text-xl text-gym-white mb-2">
                                        Response Time
                                    </h3>
                                    <p className="text-gym-light-gray">
                                        We aim to respond to all inquiries within 24 hours during business days.
                                        For urgent matters, please mention "URGENT" in your subject line.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </PageSection>
        </main>
    )
}

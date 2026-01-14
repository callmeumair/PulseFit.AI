'use client'
import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import PageSection from '../components/ui/PageSection'
import Container from '../components/ui/Container'
import { submitContact } from '../actions/contact/actions'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState('idle') // idle | sending | success | error
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        setErrorMessage('')

        try {
            const result = await submitContact(formData)
            // const result = { success: true, message: "Simulated success" } // Temp fix for debugging

            if (result.success) {
                setStatus('success')
                setFormData({ name: '', email: '', subject: '', message: '' })

                // Reset to idle after 5 seconds
                setTimeout(() => {
                    setStatus('idle')
                }, 5000)
            } else {
                setStatus('error')
                setErrorMessage(result.message)

                // Reset error after 4 seconds
                setTimeout(() => {
                    setStatus('idle')
                    setErrorMessage('')
                }, 4000)
            }
        } catch (error) {
            setStatus('error')
            setErrorMessage('Something went wrong. Please try again.')

            setTimeout(() => {
                setStatus('idle')
                setErrorMessage('')
            }, 4000)
        }
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
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
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
                                    disabled={status === 'sending' || status === 'success'}
                                    className="w-full px-8 py-4 bg-gym-orange text-gym-black font-bold uppercase tracking-wider hover:bg-gym-orange/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
                                </button>

                                {status === 'success' && (
                                    <div className="p-4 bg-gym-orange/10 border border-gym-orange/30 rounded">
                                        <p className="text-gym-orange text-center">
                                            Message sent! We'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                )}

                                {status === 'error' && errorMessage && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded">
                                        <p className="text-red-400 text-center">
                                            {errorMessage}
                                        </p>
                                    </div>
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

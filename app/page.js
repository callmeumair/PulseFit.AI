import Hero from './components/sections/Hero'
import ProofMetrics from './components/sections/ProofMetrics'
import AICoach from './components/sections/AICoach'
import SmartWorkouts from './components/sections/SmartWorkouts'
import Nutrition from './components/sections/Nutrition'
import Analytics from './components/sections/Analytics'
import HowItWorks from './components/sections/HowItWorks'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/sections/Footer'

export const metadata = {
    title: 'PulseFit AI - Your AI-Powered Fitness Coach',
    description: 'Transform your training with intelligent AI coaching, personalized workouts, and data-driven performance analytics. Built for real gym-goers who want sustainable results.',
    alternates: {
        canonical: 'https://pulsefit.ai',
    },
}

export default function Home() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'PulseFit AI',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'iOS, Android',
        offers: {
            '@type': 'Offer',
            price: '4.99',
            priceCurrency: 'USD',
            priceValidUntil: '2026-12-31',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '0',
            bestRating: '5',
            worstRating: '1',
        },
        description: 'AI-powered fitness coaching platform with personalized workouts, nutrition guidance, and performance analytics.',
        featureList: [
            'AI-Powered Coaching',
            'Smart Workouts',
            'Nutrition Intelligence',
            'Performance Analytics',
            'Habit Tracking'
        ],
        screenshot: 'https://pulsefit.ai/og-image.png',
    }

    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'PulseFit AI',
        url: 'https://pulsefit.ai',
        logo: 'https://pulsefit.ai/logo.png',
        description: 'AI-powered fitness coaching for real gym-goers',
        foundingDate: '2025',
        sameAs: [
            'https://twitter.com/pulsefitai',
            'https://instagram.com/pulsefitai',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'support@pulsefit.ai',
            contactType: 'Customer Support',
        },
    }

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />

            <main className="min-h-screen bg-gym-black">
                <Hero />
                <ProofMetrics />
                <AICoach />
                <SmartWorkouts />
                <Nutrition />
                <Analytics />
                <FinalCTA />
                <Footer />
            </main>
        </>
    )
}

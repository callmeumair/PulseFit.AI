import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const bebasNeue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-bebas',
    display: 'swap',
})

export const metadata = {
    metadataBase: new URL('https://pulsefit.ai'),
    title: {
        default: 'PulseFit AI - Your AI-Powered Fitness Coach',
        template: '%s | PulseFit AI'
    },
    description: 'Transform your training with intelligent AI coaching, personalized workouts, and data-driven performance analytics. Built for real gym-goers who want sustainable results.',
    keywords: ['AI fitness coach', 'smart workouts', 'performance analytics', 'nutrition intelligence', 'personalized training', 'gym workouts', 'strength training', 'fitness app'],
    authors: [{ name: 'PulseFit AI', url: 'https://pulsefit.ai' }],
    creator: 'PulseFit AI',
    publisher: 'PulseFit AI',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://pulsefit.ai',
        siteName: 'PulseFit AI',
        title: 'PulseFit AI - Your AI-Powered Fitness Coach',
        description: 'Transform your training with intelligent AI coaching, personalized workouts, and data-driven performance analytics.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'PulseFit AI - AI-Powered Fitness Coach',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PulseFit AI - Your AI-Powered Fitness Coach',
        description: 'Transform your training with intelligent AI coaching and personalized workouts.',
        images: ['/og-image.png'],
        creator: '@pulsefitai',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // Add these when you have them
        // google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
    },
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#FF6B35' },
        { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' }
    ],
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
            <body className="font-body">{children}</body>
        </html>
    )
}

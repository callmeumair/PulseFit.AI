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
    title: 'PulseFit AI - Your AI-Powered Fitness Coach',
    description: 'Transform your training with intelligent coaching, personalized workouts, and data-driven performance analytics. PulseFit AI adapts to your goals and pushes you beyond limits.',
    keywords: 'AI fitness coach, smart workouts, performance analytics, nutrition intelligence, personalized training',
    authors: [{ name: 'PulseFit AI' }],
    openGraph: {
        title: 'PulseFit AI - Your AI-Powered Fitness Coach',
        description: 'Transform your training with intelligent coaching and data-driven performance.',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
            <body className="font-body">{children}</body>
        </html>
    )
}

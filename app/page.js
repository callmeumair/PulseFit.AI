import Hero from './components/sections/Hero'
import ProofMetrics from './components/sections/ProofMetrics'
import AICoach from './components/sections/AICoach'
import SmartWorkouts from './components/sections/SmartWorkouts'
import Nutrition from './components/sections/Nutrition'
import Analytics from './components/sections/Analytics'
import HowItWorks from './components/sections/HowItWorks'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/sections/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <ProofMetrics />
            <AICoach />
            <SmartWorkouts />
            <Nutrition />
            <Analytics />
            <HowItWorks />
            <FinalCTA />
            <Footer />
        </main>
    )
}

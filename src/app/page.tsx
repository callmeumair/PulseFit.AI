import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { VisualData } from '@/components/sections/VisualData'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { SocialProof } from '@/components/sections/SocialProof'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <VisualData />
      <HowItWorks />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  )
}


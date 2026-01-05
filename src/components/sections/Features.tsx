'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { FadeInUp, MotionWrapper } from '@/components/animations/MotionWrapper'
import { slideInLeft, slideInRight } from '@/styles/animations'

const features = [
  {
    title: 'AI Coach',
    description: 'Your silent personal trainer. Analyzes your form, adjusts intensity in real-time, and keeps you accountable without the noise.',
    icon: '🤖',
    layout: 'left',
    stats: '24/7 guidance',
  },
  {
    title: 'Smart Workouts',
    description: 'Personalized routines that adapt to your recovery, goals, and schedule. Every rep is intentional. Every session counts.',
    icon: '💪',
    layout: 'right',
    stats: '10,000+ variations',
  },
  {
    title: 'Nutrition Intelligence',
    description: 'Macro tracking that learns your preferences. Meal planning that fits your life. Fuel your body, not your confusion.',
    icon: '🍎',
    layout: 'left',
    stats: 'Auto-calibrated',
  },
  {
    title: 'Performance Analytics',
    description: 'Deep insights into strength gains, volume progression, and recovery patterns. Data that tells the real story.',
    icon: '📊',
    layout: 'right',
    stats: 'Real-time tracking',
  },
]

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <FadeInUp className="text-center mb-20">
            <h2 className="font-display font-bold text-display text-bone mb-4">
              Everything You Need to Dominate
            </h2>
            <p className="text-xl text-steel-light max-w-2xl mx-auto">
              Four core systems working together to eliminate guesswork and maximize results.
            </p>
          </FadeInUp>
        </MotionWrapper>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <MotionWrapper key={feature.title}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={feature.layout === 'left' ? slideInLeft : slideInRight}
                className={`flex flex-col ${
                  feature.layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-12 lg:gap-16 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="text-4xl">{feature.icon}</span>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {feature.stats}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-h1 text-bone mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-steel-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Visual placeholder */}
                <div className="flex-1 w-full">
                  <Card className="h-64 lg:h-80 flex items-center justify-center bg-gradient-to-br from-iron to-charcoal-light border-primary/20">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{feature.icon}</div>
                      <div className="text-steel-light text-sm">Visual Element</div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}


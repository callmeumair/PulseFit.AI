'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { FadeInUp, MotionWrapper } from '@/components/animations/MotionWrapper'
import { slideInLeft, slideInRight } from '@/styles/animations'

const features = [
  {
    title: 'AI Coach',
    description: 'Form analysis in real-time. Intensity adjustments based on your performance data. Accountability without the motivational noise.',
    icon: '🤖',
    layout: 'left',
    stats: '24/7 guidance',
    contentWidth: 'lg:w-[55%]', // 55/45 split
    spacing: 'mb-24 sm:mb-32',
  },
  {
    title: 'Smart Workouts',
    description: 'Routines that adapt to recovery patterns, training goals, and your actual schedule. Every rep calculated. Every session optimized.',
    icon: '💪',
    layout: 'right',
    stats: '10,000+ variations',
    contentWidth: 'lg:w-[60%]', // 60/40 split
    spacing: 'mb-28 sm:mb-36',
  },
  {
    title: 'Nutrition Intelligence',
    description: 'Macro tracking that learns your eating patterns. Meal planning that fits your life, not the other way around.',
    icon: '🍎',
    layout: 'left',
    stats: 'Auto-calibrated',
    contentWidth: 'lg:w-[55%]',
    spacing: 'mb-24 sm:mb-32',
  },
  {
    title: 'Performance Analytics',
    description: 'Strength progression, volume trends, recovery metrics. Data that reveals what\'s actually happening, not what you hope is happening.',
    icon: '📊',
    layout: 'right',
    stats: 'Real-time tracking',
    contentWidth: 'lg:w-[60%]',
    spacing: 'mb-0',
  },
]

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <FadeInUp className="text-center mb-16 sm:mb-20">
            <h2 className="font-display font-bold text-display text-bone mb-4">
              Everything You Need to Dominate
            </h2>
            <p className="text-xl text-steel-light max-w-2xl mx-auto">
              Four core systems working together to eliminate guesswork and maximize results.
            </p>
          </FadeInUp>
        </MotionWrapper>

        <div>
          {features.map((feature, index) => (
            <MotionWrapper key={feature.title}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={feature.layout === 'left' ? slideInLeft : slideInRight}
                className={`flex flex-col ${
                  feature.layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-10 lg:gap-12 items-center ${feature.spacing}`}
              >
                {/* Content - Varied widths for asymmetry */}
                <div className={`flex-1 ${feature.contentWidth} w-full`}>
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

                {/* Visual placeholder - Varied widths */}
                <div className={`flex-1 ${feature.layout === 'left' ? 'lg:w-[45%]' : 'lg:w-[40%]'} w-full`}>
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

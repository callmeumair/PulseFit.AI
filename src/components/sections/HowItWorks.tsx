'use client'

import { motion } from 'framer-motion'
import { FadeInUp, MotionWrapper } from '@/components/animations/MotionWrapper'
import { staggerContainer } from '@/styles/animations'

const steps = [
  {
    number: '01',
    title: 'Set Your Goals',
    description: 'Tell us what you want to achieve. Strength, endurance, aesthetics, or all of the above.',
    icon: '🎯',
  },
  {
    number: '02',
    title: 'AI Builds Your Plan',
    description: 'Our system analyzes your experience, schedule, and preferences to create a personalized program.',
    icon: '⚙️',
  },
  {
    number: '03',
    title: 'Train & Track',
    description: 'Follow your workouts, log your lifts, and let the AI adjust intensity based on your performance.',
    icon: '📱',
  },
  {
    number: '04',
    title: 'Dominate',
    description: 'Watch your numbers climb. Hit your targets. Become the athlete you know you can be.',
    icon: '🏆',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <FadeInUp className="text-center mb-20">
            <h2 className="font-display font-bold text-display text-bone mb-4">
              Simple. Intelligent. Effective.
            </h2>
            <p className="text-xl text-steel-light max-w-2xl mx-auto">
              Four steps to transform your training. No complexity. No confusion.
            </p>
          </FadeInUp>
        </MotionWrapper>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  },
                },
              }}
              className="relative"
            >
              {/* Connector line (hidden on mobile, visible on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
              )}
              
              <div className="bg-charcoal border border-iron/50 rounded-xl p-8 h-full hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{step.icon}</div>
                  <div className="text-4xl font-display font-bold text-primary/30">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-display font-bold text-h2 text-bone mb-3">
                  {step.title}
                </h3>
                <p className="text-steel-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


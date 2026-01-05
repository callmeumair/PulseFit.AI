'use client'

import { motion } from 'framer-motion'
import { FadeInUp, MotionWrapper } from '@/components/animations/MotionWrapper'
import { staggerContainer } from '@/styles/animations'

const steps = [
  {
    number: '01',
    title: 'Set Your Goals',
    description: 'Define what you want to achieve. Strength, endurance, aesthetics—or all three. Be specific.',
    icon: '🎯',
    width: 'lg:w-full',
    iconSize: 'text-5xl',
  },
  {
    number: '02',
    title: 'AI Builds Your Plan',
    description: 'The system analyzes your experience level, available time, and preferences to create a personalized program.',
    icon: '⚙️',
    width: 'lg:w-[95%]',
    iconSize: 'text-4xl',
  },
  {
    number: '03',
    title: 'Train & Track',
    description: 'Follow your workouts, log your lifts, and let the AI adjust intensity based on your actual performance.',
    icon: '📱',
    width: 'lg:w-full',
    iconSize: 'text-5xl',
  },
  {
    number: '04',
    title: 'Dominate',
    description: 'Watch your numbers climb. Hit your targets. Become the athlete you know you can be.',
    icon: '🏆',
    width: 'lg:w-[95%]',
    iconSize: 'text-4xl',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <FadeInUp className="text-center mb-12 sm:mb-16">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
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
              {/* Connector line - offset, not perfectly straight */}
              {index < steps.length - 1 && (
                <div 
                  className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10"
                  style={{
                    transform: index % 2 === 0 ? 'translateY(2px)' : 'translateY(-2px)',
                  }}
                />
              )}
              
              <div className={`bg-charcoal border border-iron/50 rounded-none p-6 sm:p-8 h-full hover:border-primary/50 transition-colors duration-300 ${step.width}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={step.iconSize}>{step.icon}</div>
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

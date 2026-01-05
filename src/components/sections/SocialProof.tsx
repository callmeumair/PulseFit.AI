'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { FadeInUp, MotionWrapper } from '@/components/animations/MotionWrapper'

const testimonials = [
  {
    name: 'Marcus Chen',
    role: 'Powerlifter',
    achievement: 'Added 85lbs to total in 6 months',
    quote: 'The AI coach caught form issues I didn\'t even know I had. My numbers exploded once I fixed them.',
    metric: '485 → 570 lbs',
    metricLabel: 'Total',
  },
  {
    name: 'Sarah Rodriguez',
    role: 'Bodybuilder',
    achievement: '47% more consistent training',
    quote: 'Finally, a system that adapts to my life instead of forcing me into a rigid schedule. Game changer.',
    metric: '3.2x/week → 4.7x/week',
    metricLabel: 'Frequency',
  },
  {
    name: 'James Park',
    role: 'Athlete',
    achievement: 'Cut 3% body fat, gained strength',
    quote: 'The nutrition tracking is smart enough to work with my chaotic schedule. No more meal prep stress.',
    metric: '15% → 12%',
    metricLabel: 'Body Fat',
  },
]

export function SocialProof() {
  return (
    <section className="py-24 sm:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <FadeInUp className="text-center mb-20">
            <h2 className="font-display font-bold text-display text-bone mb-4">
              Real Athletes. Real Results.
            </h2>
            <p className="text-xl text-steel-light max-w-2xl mx-auto">
              Not promises. Performance outcomes from people who train hard and track everything.
            </p>
          </FadeInUp>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <MotionWrapper key={testimonial.name}>
              <FadeInUp delay={index * 0.1}>
                <Card className="h-full flex flex-col">
                  {/* Metric badge */}
                  <div className="mb-6">
                    <div className="inline-block bg-primary/10 border border-primary/30 rounded-lg px-4 py-2">
                      <div className="text-2xl font-display font-bold text-primary">
                        {testimonial.metric}
                      </div>
                      <div className="text-xs text-steel-light uppercase tracking-wider mt-1">
                        {testimonial.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-bone mb-6 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-iron/50 pt-6">
                    <div className="font-display font-semibold text-bone text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-steel-light mt-1">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary mt-2 font-medium">
                      {testimonial.achievement}
                    </div>
                  </div>
                </Card>
              </FadeInUp>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}


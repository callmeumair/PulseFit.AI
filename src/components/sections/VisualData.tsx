'use client'

import { motion } from 'framer-motion'
import { ProgressRing } from '@/components/ui/ProgressRing'
import { Card } from '@/components/ui/Card'
import { FadeInUp, MotionWrapper } from '@/components/animations/MotionWrapper'

const metrics = [
  { label: 'Strength Gain', value: 87, color: '#FF4500' },
  { label: 'Consistency', value: 94, color: '#10B981' },
  { label: 'Recovery Rate', value: 76, color: '#3B82F6' },
]

const progressData = [
  { label: 'Bench Press', current: 225, target: 275, unit: 'lbs' },
  { label: 'Weekly Volume', current: 18, target: 24, unit: 'hours' },
  { label: 'Body Fat', current: 12, target: 10, unit: '%' },
]

export function VisualData() {
  return (
    <section className="py-24 sm:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <FadeInUp className="text-center mb-20">
            <h2 className="font-display font-bold text-display text-bone mb-4">
              Your Numbers. Your Progress.
            </h2>
            <p className="text-xl text-steel-light max-w-2xl mx-auto">
              Real-time analytics that show exactly where you're winning and where you need to push harder.
            </p>
          </FadeInUp>
        </MotionWrapper>

        {/* Progress Rings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {metrics.map((metric) => (
            <MotionWrapper key={metric.label}>
              <FadeInUp className="flex justify-center">
                <ProgressRing
                  percentage={metric.value}
                  size={180}
                  strokeWidth={10}
                  color={metric.color}
                  label={metric.label}
                />
              </FadeInUp>
            </MotionWrapper>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {progressData.map((item, index) => {
            const percentage = (item.current / item.target) * 100
            return (
              <MotionWrapper key={item.label}>
                <FadeInUp delay={index * 0.1}>
                  <Card className="h-full">
                    <div className="mb-4 flex justify-between items-center">
                      <h3 className="font-display font-semibold text-bone text-lg">
                        {item.label}
                      </h3>
                      <span className="text-primary font-bold">
                        {item.current}/{item.target} {item.unit}
                      </span>
                    </div>
                    <div className="relative h-3 bg-iron rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                      />
                    </div>
                    <div className="mt-2 text-sm text-steel-light">
                      {percentage.toFixed(0)}% to target
                    </div>
                  </Card>
                </FadeInUp>
              </MotionWrapper>
            )
          })}
        </div>

        {/* Chart placeholder */}
        <MotionWrapper>
          <FadeInUp className="mt-20">
            <Card className="h-64 lg:h-80 flex items-center justify-center bg-gradient-to-br from-iron to-charcoal-light border-primary/20">
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <div className="text-steel-light">Performance Trend Chart</div>
                <div className="text-sm text-steel mt-2">Volume, Strength, Recovery over time</div>
              </div>
            </Card>
          </FadeInUp>
        </MotionWrapper>
      </div>
    </section>
  )
}


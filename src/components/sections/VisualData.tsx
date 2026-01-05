'use client'

import { motion } from 'framer-motion'
import { ProgressRing } from '@/components/ui/ProgressRing'
import { Card } from '@/components/ui/Card'
import { FadeInUp, MotionWrapper } from '@/components/animations/MotionWrapper'

const metrics = [
  { label: 'Strength Gain', value: 87, color: '#FF4500', size: 180 },
  { label: 'Consistency', value: 94, color: '#10B981', size: 190 }, // Slightly larger
  { label: 'Recovery Rate', value: 76, color: '#3B82F6', size: 175 }, // Slightly smaller
]

const progressData = [
  { label: 'Bench Press', current: 225, target: 275, unit: 'lbs', height: 'h-20' },
  { label: 'Weekly Volume', current: 18, target: 24, unit: 'hours', height: 'h-24' }, // Taller
  { label: 'Body Fat', current: 12, target: 10, unit: '%', height: 'h-20' },
]

export function VisualData() {
  return (
    <section className="py-16 sm:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <FadeInUp className="text-center mb-16 sm:mb-20">
            <h2 className="font-display font-bold text-display text-bone mb-4">
              Your Numbers. Your Progress.
            </h2>
            <p className="text-xl text-steel-light max-w-2xl mx-auto">
              Real-time analytics that show exactly where you're winning and where you need to push harder.
            </p>
          </FadeInUp>
        </MotionWrapper>

        {/* Progress Rings - Offset positioning, varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-16 sm:mb-20">
          {metrics.map((metric, index) => (
            <MotionWrapper key={metric.label}>
              <FadeInUp className="flex justify-center" delay={index * 0.1}>
                <div className={index === 1 ? 'mt-2' : index === 2 ? '-mt-1' : ''}>
                  <ProgressRing
                    percentage={metric.value}
                    size={metric.size}
                    strokeWidth={10}
                    color={metric.color}
                    label={metric.label}
                  />
                </div>
              </FadeInUp>
            </MotionWrapper>
          ))}
        </div>

        {/* Progress Bars - Varied card heights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {progressData.map((item, index) => {
            const percentage = (item.current / item.target) * 100
            return (
              <MotionWrapper key={item.label}>
                <FadeInUp delay={index * 0.1}>
                  <Card className={`${item.height} flex flex-col justify-between`}>
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
          <FadeInUp className="mt-16 sm:mt-20">
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

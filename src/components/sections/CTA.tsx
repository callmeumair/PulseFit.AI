'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { fadeInUp } from '@/styles/animations'

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-charcoal overflow-hidden">
      {/* Dark immersive background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />
      
      {/* Subtle pattern overlay - offset */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 translate-x-4 translate-y-4" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 69, 0, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Content - Offset headline slightly left */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center sm:text-left sm:ml-4"
        >
          <h2 className="font-display font-bold text-display text-bone mb-6">
            Stop Guessing.
            <br />
            <span className="text-primary">Start Dominating.</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-steel-light mb-4 leading-relaxed max-w-2xl sm:max-w-none">
            Every day you wait is another day of suboptimal training.
          </p>
          
          <p className="text-lg text-steel mb-10 sm:mb-12 max-w-2xl">
            While others rely on generic programs and guesswork, you'll have AI-powered precision 
            tracking every rep, optimizing every session, and pushing you toward your goals faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
            <Button size="lg" variant="primary" className="w-full sm:w-auto min-w-[200px]">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Pricing
            </Button>
          </div>

          {/* Urgency indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 sm:mt-12 text-sm text-steel-light"
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Join 12,000+ athletes already training smarter
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

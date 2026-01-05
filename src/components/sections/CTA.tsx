'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { fadeInUp } from '@/styles/animations'

export function CTA() {
  return (
    <section className="relative py-32 sm:py-40 bg-charcoal overflow-hidden">
      {/* Dark immersive background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 69, 0, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-display font-bold text-display text-bone mb-6">
            Stop Guessing.
            <br />
            Start Dominating.
          </h2>
          
          <p className="text-xl sm:text-2xl text-steel-light mb-4 leading-relaxed">
            Every day you wait is another day of suboptimal training.
          </p>
          
          <p className="text-lg text-steel mb-12 max-w-2xl mx-auto">
            While others rely on generic programs and guesswork, you'll have AI-powered precision 
            tracking every rep, optimizing every session, and pushing you toward your goals faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="primary">
              Start Training Now
            </Button>
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </div>

          {/* Urgency indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-sm text-steel-light"
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


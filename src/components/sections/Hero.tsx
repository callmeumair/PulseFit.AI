'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { fadeInUp } from '@/styles/animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Kinetic background */}
      <div className="absolute inset-0 grain-texture" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-led/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="font-display font-bold text-hero text-bone mb-6 tracking-tight"
        >
          Train Smarter.
          <br />
          <span className="text-primary">Build Your Edge.</span>
        </motion.h1>
        
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xl sm:text-2xl text-steel-light max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          AI-powered fitness that adapts to your body, tracks your progress, and pushes you beyond your limits. 
          No guesswork. Just results.
        </motion.p>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" variant="primary">
            Start Training
          </Button>
          <Button size="lg" variant="outline">
            See How It Works
          </Button>
        </motion.div>
        
        {/* Stats preview */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div>
            <div className="text-3xl sm:text-4xl font-display font-bold text-primary">47%</div>
            <div className="text-sm text-steel-light mt-2">More Consistent</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-display font-bold text-primary">2.3x</div>
            <div className="text-sm text-steel-light mt-2">Faster Progress</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-display font-bold text-primary">89%</div>
            <div className="text-sm text-steel-light mt-2">Goal Achievement</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


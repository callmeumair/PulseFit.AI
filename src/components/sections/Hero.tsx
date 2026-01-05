'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

// Subtle fade-in animation - mechanical, not organic
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Subtle grain texture - minimal opacity */}
      <div className="absolute inset-0 grain-texture" />
      
      {/* Subtle animated background elements - offset positions, less centered */}
      <motion.div
        className="absolute top-[22%] right-[28%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-[26%] left-[22%] w-96 h-96 bg-success/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Content Container - centered, maximum width constraint */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Headline - Hero typography, strong hierarchy */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="font-display font-bold text-hero text-bone mb-6"
        >
          Train Smarter.
          <br />
          <span className="text-primary">Build Your Edge.</span>
        </motion.h1>
        
        {/* Subheadline - Body typography, secondary text color */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-body text-steel-light max-w-3xl mx-auto mb-10"
        >
          AI-powered fitness that adapts to your body, tracks your progress, and pushes you beyond your limits. 
          No guesswork. Just results.
        </motion.p>
        
        {/* Action Buttons - Large breathing space, centered, varied sizes */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20"
        >
          <Button size="lg" variant="primary" className="w-full sm:w-auto min-w-[180px]">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            See How It Works
          </Button>
        </motion.div>
        
        {/* Metrics Preview - Three-column grid with offset middle, varied sizes */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto"
        >
          <div className="text-left sm:text-center">
            <div className="text-h1 font-display font-bold text-primary">47%</div>
            <div className="text-small text-steel-light mt-2">More Consistent</div>
          </div>
          <div className="text-center -mt-2 sm:mt-0">
            <div className="text-h1 font-display font-bold text-primary text-[clamp(1.75rem,4vw,2.5rem)]">2.3x</div>
            <div className="text-small text-steel-light mt-2">Faster Progress</div>
          </div>
          <div className="text-right sm:text-center">
            <div className="text-h1 font-display font-bold text-primary">89%</div>
            <div className="text-small text-steel-light mt-2">Goal Achievement</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

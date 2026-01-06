'use client'
import { motion } from 'framer-motion'

export default function PricingCard({
    name,
    price,
    period = 'month',
    description,
    features = [],
    highlighted = false,
    badge = null,
    buttonText = 'Get Started',
    onButtonClick,
    delay = 0
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={`relative p-8 ${highlighted
                    ? 'bg-gym-orange/5 border-2 border-gym-orange'
                    : 'bg-gym-charcoal border border-gym-steel/20'
                } transition-all duration-300 hover:border-gym-orange/50`}
        >
            {badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gym-orange text-gym-black text-xs uppercase tracking-wider font-bold">
                        {badge}
                    </span>
                </div>
            )}

            <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-gym-white mb-2">
                    {name}
                </h3>
                <p className="text-gym-light-gray text-sm mb-6">
                    {description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                    <span className="font-display text-5xl text-gym-white">
                        {price}
                    </span>
                    {period && (
                        <span className="text-gym-gray text-sm">
                            /{period}
                        </span>
                    )}
                </div>
            </div>

            <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gym-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gym-off-white text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={onButtonClick}
                className={`w-full py-4 px-6 font-bold uppercase tracking-wider transition-all duration-300 ${highlighted
                        ? 'bg-gym-orange text-gym-black hover:bg-gym-orange/90'
                        : 'bg-gym-steel/20 text-gym-white border border-gym-steel/40 hover:border-gym-orange hover:bg-gym-orange/10'
                    }`}
            >
                {buttonText}
            </button>
        </motion.div>
    )
}

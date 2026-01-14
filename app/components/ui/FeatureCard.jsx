'use client'
import { motion } from 'framer-motion'

export default function FeatureCard({
    icon,
    title,
    description,
    features = [],
    badge = null,
    delay = 0
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="relative p-8 bg-gym-charcoal border border-gym-steel/20 hover:border-gym-orange/30 transition-all duration-300"
        >
            {badge && (
                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gym-orange/10 border border-gym-orange/30 text-gym-orange text-xs uppercase tracking-wider font-bold">
                        {badge}
                    </span>
                </div>
            )}

            {icon && (
                <div className="mb-6 text-gym-orange">
                    {icon}
                </div>
            )}

            <h3 className="font-display text-2xl md:text-3xl text-gym-white mb-4">
                {title}
            </h3>

            <p className="text-gym-light-gray mb-6 leading-relaxed">
                {description}
            </p>

            {features.length > 0 && (
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-gym-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gym-off-white text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    )
}

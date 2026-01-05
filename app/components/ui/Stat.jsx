'use client'
import { motion } from 'framer-motion'

export default function Stat({ number, label, suffix = '', delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="text-center"
        >
            <div className="font-display text-5xl md:text-6xl lg:text-7xl text-gym-orange mb-2">
                {number}{suffix}
            </div>
            <div className="text-gym-light-gray text-sm md:text-base uppercase tracking-wider">
                {label}
            </div>
        </motion.div>
    )
}

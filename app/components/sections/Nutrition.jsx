'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '../ui/Section'
import Container from '../ui/Container'

export default function Nutrition() {
    return (
        <Section background="default">
            <Container>
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    {/* Visual - Left side (takes 2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-2"
                    >
                        <div className="relative bg-gym-charcoal p-8">
                            {/* Background image - blurred and subtle */}
                            <div className="absolute inset-0 overflow-hidden">
                                <Image
                                    src="/assets/images/pexels-mahmutyilmaz-35175521.jpg"
                                    alt="Nutrition and training preparation"
                                    fill
                                    className="object-cover opacity-20 blur-sm"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gym-charcoal/80" />
                            </div>

                            {/* Nutrition metrics display */}
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b border-gym-steel">
                                    <span className="text-gym-light-gray text-xs uppercase tracking-wider">Daily Macros</span>
                                    <span className="text-gym-orange text-xs font-bold">OPTIMIZED</span>
                                </div>

                                {/* Macro bars */}
                                <div className="space-y-4">
                                    {[
                                        { label: 'PROTEIN', value: 180, max: 200, color: 'bg-gym-orange' },
                                        { label: 'CARBS', value: 220, max: 250, color: 'bg-gym-white' },
                                        { label: 'FATS', value: 65, max: 80, color: 'bg-gym-light-gray' },
                                    ].map((macro, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-xs text-gym-gray">{macro.label}</span>
                                                <span className="text-xs text-gym-white font-bold">{macro.value}g / {macro.max}g</span>
                                            </div>
                                            <div className="h-2 bg-gym-dark">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${(macro.value / macro.max) * 100}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                                    className={`h-full ${macro.color}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Calorie ring */}
                                <div className="pt-6 border-t border-gym-steel">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-gym-gray mb-1">CALORIES</div>
                                            <div className="font-display text-4xl text-gym-white">2,450</div>
                                            <div className="text-xs text-gym-light-gray">of 2,600 target</div>
                                        </div>
                                        <div className="relative w-24 h-24">
                                            <svg className="transform -rotate-90" viewBox="0 0 100 100">
                                                <circle
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    stroke="#3A3A3A"
                                                    strokeWidth="8"
                                                    fill="none"
                                                />
                                                <motion.circle
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    stroke="#E84A27"
                                                    strokeWidth="8"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    initial={{ strokeDasharray: "251.2", strokeDashoffset: "251.2" }}
                                                    whileInView={{ strokeDashoffset: "25.12" }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: 0.8 }}
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="font-display text-xl text-gym-orange">94%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -inset-2 bg-gym-orange/5 blur-lg -z-10" />
                        </div>
                    </motion.div>

                    {/* Content - Right side (takes 3 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <div className="inline-block px-3 py-1 bg-gym-orange/10 border border-gym-orange/30 text-gym-orange text-xs uppercase tracking-wider font-bold mb-6">
                            Nutrition Intelligence
                        </div>

                        <h2 className="font-display text-5xl md:text-6xl lg:text-display-md text-gym-white mb-6 leading-tight">
                            FUEL YOUR
                            <br />
                            <span className="text-gym-orange">PERFORMANCE</span>
                        </h2>

                        <p className="text-lg text-gym-off-white mb-8 leading-relaxed">
                            Precision nutrition that adapts to your training intensity, body composition goals,
                            and metabolic response. No restrictive diets. Just smart fueling.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'Macro Optimization',
                                    description: 'Perfect protein, carb, and fat ratios for your goals'
                                },
                                {
                                    title: 'Meal Timing',
                                    description: 'When to eat for maximum performance and recovery'
                                },
                                {
                                    title: 'Smart Substitutions',
                                    description: 'Hit your targets with foods you actually enjoy'
                                },
                                {
                                    title: 'Supplement Guidance',
                                    description: 'Evidence-based recommendations, zero BS'
                                },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="bg-gym-charcoal p-6 border-l-2 border-gym-steel hover:border-gym-orange transition-colors duration-300"
                                >
                                    <h4 className="font-display text-xl text-gym-white mb-2">{feature.title}</h4>
                                    <p className="text-sm text-gym-light-gray">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}

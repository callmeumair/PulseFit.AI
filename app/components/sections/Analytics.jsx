'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '../ui/Section'
import Container from '../ui/Container'

export default function Analytics() {
    return (
        <Section background="gradient">
            <Container size="wide">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 bg-gym-orange/10 border border-gym-orange/30 text-gym-orange text-xs uppercase tracking-wider font-bold mb-6">
                            Performance Analytics
                        </div>
                        <h2 className="font-display text-5xl md:text-6xl lg:text-display-md text-gym-white mb-6">
                            DATA THAT
                            <br />
                            <span className="text-gym-orange">DRIVES RESULTS</span>
                        </h2>
                        <p className="text-lg text-gym-off-white max-w-2xl mx-auto">
                            Track every metric that matters. Visualize your progress.
                            Make informed decisions backed by real data.
                        </p>
                    </motion.div>
                </div>

                {/* Dashboard visualization */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative bg-gym-charcoal p-6 md:p-10"
                >
                    {/* Subtle background texture */}
                    <div className="absolute inset-0 overflow-hidden">
                        <Image
                            src="/assets/images/pexels-gu-ko-2150570603-35376509.jpg"
                            alt="Training environment"
                            fill
                            className="object-cover opacity-[0.08] blur-md"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gym-charcoal/90" />
                    </div>

                    <div className="relative z-10">
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            {/* Volume Chart */}
                            <div className="md:col-span-2 bg-gym-dark p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="text-xs text-gym-gray mb-1">TRAINING VOLUME</div>
                                        <div className="font-display text-2xl text-gym-white">12 WEEKS</div>
                                    </div>
                                    <div className="flex gap-4 text-xs">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-gym-orange" />
                                            <span className="text-gym-light-gray">Volume</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-gym-white" />
                                            <span className="text-gym-light-gray">Intensity</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Line chart visualization */}
                                <div className="relative h-48">
                                    <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                                        {/* Grid lines */}
                                        {[0, 1, 2, 3, 4].map((i) => (
                                            <line
                                                key={i}
                                                x1="0"
                                                y1={i * 37.5}
                                                x2="400"
                                                y2={i * 37.5}
                                                stroke="#3A3A3A"
                                                strokeWidth="1"
                                            />
                                        ))}

                                        {/* Volume line */}
                                        <motion.polyline
                                            points="0,120 50,100 100,85 150,95 200,70 250,60 300,50 350,45 400,35"
                                            fill="none"
                                            stroke="#E84A27"
                                            strokeWidth="3"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, delay: 0.5 }}
                                        />

                                        {/* Intensity line */}
                                        <motion.polyline
                                            points="0,100 50,95 100,105 150,90 200,85 250,80 300,70 350,65 400,55"
                                            fill="none"
                                            stroke="#F5F5F5"
                                            strokeWidth="2"
                                            strokeDasharray="5,5"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, delay: 0.7 }}
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Stats column */}
                            <div className="space-y-6">
                                <div className="bg-gym-dark p-6">
                                    <div className="text-xs text-gym-gray mb-2">TOTAL WORKOUTS</div>
                                    <div className="font-display text-5xl text-gym-orange mb-1">127</div>
                                    <div className="text-xs text-gym-light-gray">+23% vs last period</div>
                                </div>

                                <div className="bg-gym-dark p-6">
                                    <div className="text-xs text-gym-gray mb-2">AVG INTENSITY</div>
                                    <div className="font-display text-5xl text-gym-white mb-1">8.4</div>
                                    <div className="text-xs text-gym-light-gray">out of 10</div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Strength Gain', value: '+18%', trend: 'up' },
                                { label: 'Body Fat', value: '-3.2%', trend: 'down' },
                                { label: 'Consistency', value: '94%', trend: 'up' },
                                { label: 'Recovery Score', value: '8.7', trend: 'up' },
                            ].map((metric, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                    className="bg-gym-dark p-4 text-center"
                                >
                                    <div className="text-xs text-gym-gray mb-2">{metric.label}</div>
                                    <div className="font-display text-2xl text-gym-orange">{metric.value}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gym-orange/5 blur-2xl -z-10" />
                </motion.div>
            </Container>
        </Section>
    )
}

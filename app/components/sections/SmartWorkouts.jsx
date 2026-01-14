'use client'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Container from '../ui/Container'
import ResponsiveVideo from '../ui/ResponsiveVideo'

export default function SmartWorkouts() {
    const workoutTypes = [
        {
            title: 'STRENGTH',
            description: 'Progressive overload protocols tailored to your muscle fiber composition',
            intensity: 'HIGH',
            size: 'large',
            hasVideo: true
        },
        {
            title: 'CARDIO',
            description: 'Heart rate zone optimization for maximum fat burn and endurance',
            intensity: 'MEDIUM',
            size: 'small'
        },
        {
            title: 'MOBILITY',
            description: 'Dynamic flexibility routines that prevent injury and improve range',
            intensity: 'LOW',
            size: 'small'
        },
        {
            title: 'HIIT',
            description: 'Metabolic conditioning that adapts to your recovery capacity',
            intensity: 'EXTREME',
            size: 'medium'
        },
    ]

    return (
        <Section background="charcoal">
            <Container>
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 bg-gym-orange/10 border border-gym-orange/30 text-gym-orange text-xs uppercase tracking-wider font-bold mb-6">
                            Smart Workouts
                        </div>
                        <h2 className="font-display text-5xl md:text-6xl lg:text-display-md text-gym-white mb-6">
                            EVERY WORKOUT
                            <br />
                            <span className="text-gym-orange">ENGINEERED</span> FOR YOU
                        </h2>
                        <p className="text-lg text-gym-off-white max-w-2xl mx-auto">
                            No cookie-cutter programs. Your workouts evolve with your body,
                            schedule, and goals. Every rep counts.
                        </p>
                    </motion.div>
                </div>

                {/* Non-uniform grid layout */}
                <div className="grid md:grid-cols-2 gap-6">
                    {workoutTypes.map((workout, index) => {
                        const sizeClasses = {
                            large: 'md:col-span-2',
                            medium: 'md:col-span-1',
                            small: 'md:col-span-1'
                        }

                        const intensityColors = {
                            'EXTREME': 'text-gym-orange border-gym-orange',
                            'HIGH': 'text-gym-orange-light border-gym-orange-light',
                            'MEDIUM': 'text-gym-light-gray border-gym-light-gray',
                            'LOW': 'text-gym-gray border-gym-gray'
                        }

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`${sizeClasses[workout.size]} group`}
                            >
                                <div className="relative overflow-hidden bg-gym-dark p-8 md:p-10 h-full border-l-4 border-gym-steel hover:border-gym-orange transition-all duration-300">
                                    {/* Video background for STRENGTH card only */}
                                    {workout.hasVideo && (
                                        <>
                                            <div className="absolute inset-0">
                                                <ResponsiveVideo
                                                    src="/assets/images/videos/14505122_3840_2160_25fps.mp4"
                                                    className="w-full h-full"
                                                    overlay={false}
                                                />
                                            </div>
                                            {/* Heavy dark overlay */}
                                            <div className="absolute inset-0 bg-gym-dark/85" />
                                        </>
                                    )}

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="font-display text-3xl md:text-4xl text-gym-white group-hover:text-gym-orange transition-colors duration-300">
                                                {workout.title}
                                            </h3>
                                            <span className={`text-xs px-3 py-1 border ${intensityColors[workout.intensity]} uppercase tracking-wider font-bold`}>
                                                {workout.intensity}
                                            </span>
                                        </div>
                                        <p className="text-gym-light-gray leading-relaxed">
                                            {workout.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-3 text-gym-light-gray">
                        <div className="w-12 h-px bg-gym-steel" />
                        <span className="text-sm uppercase tracking-wider">Plus yoga, pilates, and custom routines</span>
                        <div className="w-12 h-px bg-gym-steel" />
                    </div>
                </motion.div>
            </Container>
        </Section>
    )
}

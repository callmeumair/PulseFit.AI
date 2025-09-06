'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Camera, 
  Target, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  CheckCircle,
  Play,
  BarChart3,
  Smartphone,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function FeaturesPage() {
  const [activeDemo, setActiveDemo] = useState('workout')

  const mainFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Personalization',
      description: 'Our advanced machine learning algorithms analyze your fitness data, preferences, and goals to create truly personalized workout plans.',
      features: [
        'Adaptive workout difficulty',
        'Personalized nutrition recommendations',
        'Goal-based training programs',
        'Progress tracking and optimization'
      ]
    },
    {
      icon: Camera,
      title: 'Computer Vision Coaching',
      description: 'Real-time form analysis and coaching using advanced computer vision technology to prevent injuries and maximize results.',
      features: [
        'Real-time form correction',
        'Movement pattern analysis',
        'Injury prevention alerts',
        'Performance optimization tips'
      ]
    },
    {
      icon: Target,
      title: 'Smart Goal Setting',
      description: 'Set and achieve your fitness goals with AI-guided recommendations and milestone tracking.',
      features: [
        'SMART goal framework',
        'Milestone celebrations',
        'Progress visualization',
        'Adaptive goal adjustment'
      ]
    }
  ]

  const additionalFeatures = [
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into your fitness journey with detailed analytics and progress reports.'
    },
    {
      icon: Users,
      title: 'Community Features',
      description: 'Connect with like-minded fitness enthusiasts and share your achievements.'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your data is protected with enterprise-grade security and privacy controls.'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Access your fitness journey on any device with seamless synchronization.'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Available in multiple languages with localized content and support.'
    },
    {
      icon: BarChart3,
      title: 'Health Integration',
      description: 'Connect with your favorite health apps and wearables for complete tracking.'
    }
  ]

  const demoScenarios = {
    workout: {
      title: 'AI Workout Generation',
      description: 'See how our AI creates personalized workouts based on your preferences.',
      steps: [
        'Analyzing your fitness level...',
        'Considering your available equipment...',
        'Optimizing for your goals...',
        'Generating personalized workout...'
      ]
    },
    nutrition: {
      title: 'Smart Nutrition Planning',
      description: 'Get AI-powered meal recommendations tailored to your dietary needs.',
      steps: [
        'Analyzing your dietary preferences...',
        'Calculating nutritional requirements...',
        'Finding optimal meal combinations...',
        'Creating your meal plan...'
      ]
    },
    coaching: {
      title: 'Real-time Coaching',
      description: 'Experience computer vision-powered form analysis and coaching.',
      steps: [
        'Initializing camera feed...',
        'Analyzing movement patterns...',
        'Detecting form deviations...',
        'Providing real-time feedback...'
      ]
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 gradient-primary text-primary-foreground border-0">
                <Zap className="w-4 h-4 mr-2" />
                Advanced AI Features
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Powerful Features for{' '}
              <span className="text-gradient">Every Fitness Goal</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Discover the cutting-edge AI technology that makes PulseFit.AI the most 
              advanced fitness platform available today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Try Our AI Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Experience how our AI technology works with interactive demos
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="workout">Workout AI</TabsTrigger>
                  <TabsTrigger value="nutrition">Nutrition AI</TabsTrigger>
                  <TabsTrigger value="coaching">Coaching AI</TabsTrigger>
                </TabsList>
                
                <TabsContent value="workout" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Brain className="w-5 h-5 mr-2 text-primary" />
                        {demoScenarios.workout.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {demoScenarios.workout.description}
                      </p>
                      <div className="space-y-3">
                        {demoScenarios.workout.steps.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{step}</span>
                          </motion.div>
                        ))}
                      </div>
                      <Button className="mt-6 gradient-primary hover:shadow-glow">
                        <Play className="w-4 h-4 mr-2" />
                        Try Demo
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="nutrition" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Target className="w-5 h-5 mr-2 text-primary" />
                        {demoScenarios.nutrition.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {demoScenarios.nutrition.description}
                      </p>
                      <div className="space-y-3">
                        {demoScenarios.nutrition.steps.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{step}</span>
                          </motion.div>
                        ))}
                      </div>
                      <Button className="mt-6 gradient-primary hover:shadow-glow">
                        <Play className="w-4 h-4 mr-2" />
                        Try Demo
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="coaching" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Camera className="w-5 h-5 mr-2 text-primary" />
                        {demoScenarios.coaching.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {demoScenarios.coaching.description}
                      </p>
                      <div className="space-y-3">
                        {demoScenarios.coaching.steps.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{step}</span>
                          </motion.div>
                        ))}
                      </div>
                      <Button className="mt-6 gradient-primary hover:shadow-glow">
                        <Play className="w-4 h-4 mr-2" />
                        Try Demo
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="shadow-glow-lg">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Interactive AI Demo</h3>
                      <p className="text-muted-foreground text-sm">
                        Experience our AI technology in action
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Core AI Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              The technology that sets us apart from traditional fitness apps
            </motion.p>
          </div>
          
          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="shadow-glow">
                    <CardContent className="p-8">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <feature.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                          <p className="text-muted-foreground">Feature Preview</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              More Amazing Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Everything you need for a complete fitness experience
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience AI-Powered Fitness?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who have transformed their fitness journey with our advanced AI technology.
            </p>
            <Button size="lg" className="gradient-primary hover:shadow-glow-lg text-lg px-8 py-6">
              Start Your Free Trial
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

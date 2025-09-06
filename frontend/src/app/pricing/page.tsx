'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Check, 
  X, 
  Zap, 
  Crown, 
  Building2, 
  ArrowRight,
  Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for getting started with AI fitness',
      icon: Zap,
      color: 'text-muted-foreground',
      bgColor: 'bg-muted',
      popular: false,
      features: [
        'Basic AI workout plans',
        'Limited nutrition tracking',
        'Community access',
        'Basic progress tracking',
        'Mobile app access'
      ],
      limitations: [
        'No real-time coaching',
        'Limited AI personalization',
        'Basic analytics only'
      ],
      cta: 'Get Started Free',
      ctaVariant: 'outline' as const
    },
    {
      name: 'Pro',
      price: { monthly: 29, annual: 290 },
      description: 'Advanced AI features for serious fitness enthusiasts',
      icon: Crown,
      color: 'text-primary',
      bgColor: 'gradient-primary',
      popular: true,
      features: [
        'Advanced AI workout plans',
        'Real-time form coaching',
        'Personalized nutrition plans',
        'Advanced analytics & insights',
        'Priority support',
        'Unlimited workout history',
        'Custom goal setting',
        'Integration with wearables',
        'Export data & reports'
      ],
      limitations: [],
      cta: 'Start Pro Trial',
      ctaVariant: 'default' as const
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', annual: 'Custom' },
      description: 'Complete solution for organizations and teams',
      icon: Building2,
      color: 'text-accent-foreground',
      bgColor: 'gradient-accent',
      popular: false,
      features: [
        'Everything in Pro',
        'Team management dashboard',
        'Custom AI model training',
        'White-label solution',
        'API access & integrations',
        'Dedicated account manager',
        'Custom reporting & analytics',
        'SSO & advanced security',
        '24/7 phone support',
        'Custom deployment options'
      ],
      limitations: [],
      cta: 'Contact Sales',
      ctaVariant: 'outline' as const
    }
  ]

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial for the Pro plan. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time with no cancellation fees.'
    },
    {
      question: 'Do you offer student discounts?',
      answer: 'Yes, we offer 50% off for students with valid student ID. Contact support for details.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data remains accessible for 30 days after cancellation. You can export it anytime.'
    }
  ]


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
                <Crown className="w-4 h-4 mr-2" />
                Simple, Transparent Pricing
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Choose Your{' '}
              <span className="text-gradient">Fitness Journey</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Start free and upgrade as you grow. No hidden fees, no surprises. 
              Cancel anytime.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="bg-muted p-1 rounded-lg flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  !isAnnual 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-md transition-all duration-200 relative ${
                  isAnnual 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual
                {isAnnual && (
                  <Badge className="absolute -top-2 -right-2 text-xs bg-primary text-primary-foreground">
                    Save 17%
                  </Badge>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full ${plan.popular ? 'shadow-glow-lg border-primary' : 'hover:shadow-glow'}`}>
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 ${plan.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`w-8 h-8 ${plan.color}`} />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <p className="text-muted-foreground">{plan.description}</p>
                    
                    <div className="mt-6">
                      {typeof plan.price.monthly === 'number' ? (
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold">
                            ${isAnnual ? plan.price.annual : plan.price.monthly * 12}
                          </span>
                          <span className="text-muted-foreground ml-2">
                            /{isAnnual ? 'year' : 'month'}
                          </span>
                        </div>
                      ) : (
                        <div className="text-4xl font-bold">Custom</div>
                      )}
                      
                      {isAnnual && typeof plan.price.monthly === 'number' && typeof plan.price.annual === 'number' && plan.price.monthly > 0 && (
                        <p className="text-sm text-muted-foreground mt-2">
                          ${Math.round(plan.price.annual / 12)}/month billed annually
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button 
                      className={`w-full mb-6 ${
                        plan.ctaVariant === 'default' 
                          ? 'gradient-primary hover:shadow-glow' 
                          : ''
                      }`}
                      variant={plan.ctaVariant}
                      size="lg"
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">What's included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {plan.limitations.length > 0 && (
                        <>
                          <h4 className="font-semibold text-muted-foreground">Limitations:</h4>
                          <ul className="space-y-3">
                            {plan.limitations.map((limitation, limitationIndex) => (
                              <li key={limitationIndex} className="flex items-start space-x-3">
                                <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Compare All Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              See exactly what you get with each plan
            </motion.p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 font-semibold">Free</th>
                  <th className="text-center py-4 px-6 font-semibold">Pro</th>
                  <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'AI Workout Plans', free: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
                  { feature: 'Real-time Coaching', free: '❌', pro: '✅', enterprise: '✅' },
                  { feature: 'Nutrition Tracking', free: 'Limited', pro: 'Full', enterprise: 'Full' },
                  { feature: 'Analytics & Reports', free: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
                  { feature: 'Team Management', free: '❌', pro: '❌', enterprise: '✅' },
                  { feature: 'API Access', free: '❌', pro: '❌', enterprise: '✅' },
                  { feature: 'Support', free: 'Community', pro: 'Priority', enterprise: '24/7 Phone' },
                  { feature: 'Custom Deployment', free: '❌', pro: '❌', enterprise: '✅' }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.free}</td>
                    <td className="py-4 px-6 text-center">{row.pro}</td>
                    <td className="py-4 px-6 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Everything you need to know about our pricing
            </motion.p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
              Ready to Start Your AI Fitness Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who have transformed their fitness with PulseFit.AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary hover:shadow-glow-lg text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

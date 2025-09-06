'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Target, 
  Users, 
  Zap, 
  Award,
  Linkedin,
  Twitter,
  Github,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Google AI researcher with 10+ years in machine learning. Passionate about making fitness accessible through technology.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Computer vision expert and former Apple engineer. Led development of breakthrough fitness tracking algorithms.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Health Science',
      bio: 'Certified sports physiologist with PhD in Exercise Science. Ensures our AI recommendations are scientifically sound.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Alex Kim',
      role: 'Head of Product',
      bio: 'Former Peloton product manager with deep expertise in fitness technology and user experience design.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'David Park',
      role: 'Lead AI Engineer',
      bio: 'Machine learning specialist with expertise in computer vision and real-time processing systems.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Design',
      bio: 'Award-winning UX designer with focus on accessibility and inclusive design in health technology.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Health First',
      description: 'We prioritize user safety and health above all else. Every feature is designed with medical expertise.'
    },
    {
      icon: Target,
      title: 'Personalization',
      description: 'We believe fitness should be tailored to each individual. Our AI adapts to your unique needs and goals.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Fitness is better together. We foster supportive communities where everyone can thrive.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We push the boundaries of what&apos;s possible with AI and technology to deliver breakthrough results.'
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'PulseFit.AI Founded',
      description: 'Started with a vision to revolutionize fitness through AI technology.'
    },
    {
      year: '2024',
      title: 'First AI Model Deployed',
      description: 'Launched our first computer vision model for form analysis.'
    },
    {
      year: '2024',
      title: '10,000 Users',
      description: 'Reached our first major milestone with 10,000 active users.'
    },
    {
      year: '2024',
      title: 'Series A Funding',
      description: 'Raised $15M to accelerate product development and team growth.'
    }
  ]

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '2M+', label: 'Workouts Completed' },
    { value: '95%', label: 'User Satisfaction' },
    { value: '15+', label: 'Team Members' }
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
                <Heart className="w-4 h-4 mr-2" />
                About Our Mission
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              We're Building the{' '}
              <span className="text-gradient">Future of Fitness</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Founded by AI researchers and fitness experts, PulseFit.AI is on a mission to make 
              personalized fitness accessible to everyone through cutting-edge artificial intelligence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that everyone deserves access to personalized, effective fitness guidance. 
                Traditional fitness apps offer one-size-fits-all solutions, but we know that every 
                person's body, goals, and circumstances are unique.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                That's why we've built PulseFit.AI - an AI-powered platform that learns from your 
                behavior, adapts to your needs, and provides real-time coaching that's as personal 
                as having a trainer by your side.
              </p>
              <div className="flex items-center space-x-4">
                <Button className="gradient-primary hover:shadow-glow">
                  Join Our Mission
                </Button>
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-glow-lg">
                <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Making Fitness Accessible</h3>
                      <p className="text-muted-foreground">
                        Through AI innovation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              The passionate experts behind PulseFit.AI
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      {member.social.linkedin && (
                        <Button variant="ghost" size="sm" className="p-2">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button variant="ghost" size="sm" className="p-2">
                          <Twitter className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.github && (
                        <Button variant="ghost" size="sm" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Key milestones in our mission to revolutionize fitness
            </motion.p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-lg font-bold text-primary">{milestone.year}</span>
                    <span className="text-lg font-semibold">{milestone.title}</span>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
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
              Join Us on This Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you&apos;re a user, potential team member, or partner, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary hover:shadow-glow-lg text-lg px-8 py-6">
                Start Your Fitness Journey
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

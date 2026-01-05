// Design system tokens for PulseFit AI
export const colors = {
  base: {
    charcoal: '#0B0B0D',
    charcoalLight: '#111',
  },
  primary: {
    DEFAULT: '#FF4500',
    dark: '#DC4500',
    light: '#FF6B33',
  },
  secondary: {
    DEFAULT: '#475569',
    light: '#64748B',
    dark: '#334155',
  },
  text: {
    bone: '#FAFAF9',
    muted: '#D1D5DB',
  },
  accents: {
    chalk: '#E5E7EB',
    iron: '#1F2937',
    led: '#10B981',
  },
} as const

export const spacing = {
  section: {
    sm: '4rem', // 64px
    md: '6rem', // 96px
    lg: '8rem', // 128px
  },
} as const

export const typography = {
  hero: {
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    lineHeight: '0.9',
    letterSpacing: '-0.02em',
  },
  display: {
    fontSize: 'clamp(2rem, 5vw, 4.5rem)',
    lineHeight: '1.1',
    letterSpacing: '-0.01em',
  },
} as const


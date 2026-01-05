import type { Config } from 'tailwindcss'
import { colors, typography, spacing, borderRadius, shadows } from './src/styles/design-system'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Color System - Instrument readout aesthetic
      colors: {
        // Backgrounds - Near-black base
        charcoal: {
          DEFAULT: colors.background.base,
          light: colors.background.elevated,
        },
        // Text Hierarchy
        bone: colors.text.primary,
        steel: {
          DEFAULT: colors.text.muted,
          light: colors.text.secondary,
          dark: colors.text.disabled,
        },
        // Primary Accent - Active effort indicator
        primary: {
          DEFAULT: colors.accent.primary.DEFAULT,
          dark: colors.accent.primary.dark,
          light: colors.accent.primary.light,
        },
        // Success - Achievement threshold
        success: {
          DEFAULT: colors.accent.success.DEFAULT,
          dark: colors.accent.success.dark,
          light: colors.accent.success.light,
        },
        // Danger - Critical states
        danger: {
          DEFAULT: colors.accent.danger.DEFAULT,
          dark: colors.accent.danger.dark,
          light: colors.accent.danger.light,
        },
        // Neutral UI Elements
        iron: colors.neutral.iron,
        chalk: colors.neutral.chalk,
        // Background semantic names
        'bg-base': colors.background.base,
        'bg-elevated': colors.background.elevated,
        'bg-interactive': colors.background.interactive,
      },
      
      // Typography - Equipment label aesthetic
      fontFamily: {
        sans: [...typography.fontFamily.body],
        display: [...typography.fontFamily.display],
      },
      fontSize: {
        hero: [
          typography.fontSize.hero.size,
          {
            lineHeight: typography.fontSize.hero.lineHeight,
            letterSpacing: typography.fontSize.hero.letterSpacing,
          },
        ],
        display: [
          typography.fontSize.display.size,
          {
            lineHeight: typography.fontSize.display.lineHeight,
            letterSpacing: typography.fontSize.display.letterSpacing,
          },
        ],
        h1: [
          typography.fontSize.h1.size,
          {
            lineHeight: typography.fontSize.h1.lineHeight,
            letterSpacing: typography.fontSize.h1.letterSpacing,
          },
        ],
        h2: [
          typography.fontSize.h2.size,
          {
            lineHeight: typography.fontSize.h2.lineHeight,
            letterSpacing: typography.fontSize.h2.letterSpacing,
          },
        ],
        h3: [
          typography.fontSize.h3.size,
          {
            lineHeight: typography.fontSize.h3.lineHeight,
            letterSpacing: typography.fontSize.h3.letterSpacing,
          },
        ],
        h4: [
          typography.fontSize.h4.size,
          {
            lineHeight: typography.fontSize.h4.lineHeight,
            letterSpacing: typography.fontSize.h4.letterSpacing,
          },
        ],
        body: [
          typography.fontSize.body.size,
          {
            lineHeight: typography.fontSize.body.lineHeight,
            letterSpacing: typography.fontSize.body.letterSpacing,
          },
        ],
        small: [
          typography.fontSize.small.size,
          {
            lineHeight: typography.fontSize.small.lineHeight,
            letterSpacing: typography.fontSize.small.letterSpacing,
          },
        ],
        caption: [
          typography.fontSize.caption.size,
          {
            lineHeight: typography.fontSize.caption.lineHeight,
            letterSpacing: typography.fontSize.caption.letterSpacing,
          },
        ],
      },
      
      // Spacing Scale - 4px base unit, systematic
      spacing: {
        // Base scale (numeric keys for Tailwind)
        '0': spacing.scale[0],
        '1': spacing.scale[1],
        '2': spacing.scale[2],
        '3': spacing.scale[3],
        '4': spacing.scale[4],
        '5': spacing.scale[5],
        '6': spacing.scale[6],
        '8': spacing.scale[8],
        '10': spacing.scale[10],
        '12': spacing.scale[12],
        '16': spacing.scale[16],
        '20': spacing.scale[20],
        '24': spacing.scale[24],
        '32': spacing.scale[32],
        // Semantic spacing (named keys)
        xs: spacing.semantic.xs,
        sm: spacing.semantic.sm,
        md: spacing.semantic.md,
        lg: spacing.semantic.lg,
        xl: spacing.semantic.xl,
        '2xl': spacing.semantic['2xl'],
        '3xl': spacing.semantic['3xl'],
        '4xl': spacing.semantic['4xl'],
        '5xl': spacing.semantic['5xl'],
      },
      
      // Border Radius - Minimal, structural
      borderRadius: {
        ...borderRadius,
      },
      
      // Shadows - Functional or absent (only flat values, exclude nested border object)
      boxShadow: {
        none: shadows.none,
        sm: shadows.sm,
        md: shadows.md,
      },
      
      // Animations - Mechanical, not organic
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

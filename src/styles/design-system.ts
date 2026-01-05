/**
 * PulseFit AI Design System Tokens
 * 
 * Visual Language: "A biometric display in a dark training facility"
 * 
 * Principles:
 * - Colors are information, not decoration
 * - Typography feels like equipment labels
 * - Spacing is systematic and intentional
 * - Border radius is minimal and structural
 * - Shadows are functional or absent
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================
// Colors must feel like instrument readouts. Backgrounds stay near-black.
// Accents appear only when data demands differentiation.

export const colors = {
  // Backgrounds - Near-black base, gym floor darkness
  background: {
    base: '#0B0B0D',        // Primary charcoal - darkest surface
    elevated: '#111111',     // Subtle lift from base (cards, modals)
    interactive: '#151518',  // Hover states, minimal differentiation
  },

  // Text Hierarchy - High contrast primary, reduced contrast secondary
  text: {
    primary: '#FAFAF9',      // Bone - primary text, maximum contrast
    secondary: '#64748B',    // Steel light - secondary text, reduced contrast
    muted: '#475569',        // Steel - metadata, tertiary info
    disabled: '#334155',     // Steel dark - disabled states
  },

  // Accent Colors - Only where data demands differentiation
  accent: {
    primary: {
      DEFAULT: '#FF4500',    // Orange-red - active effort indicator
      dark: '#DC4500',       // Pressed/active state
      light: '#FF6B33',      // Hover state
    },
    success: {
      DEFAULT: '#10B981',    // LED green - achievement threshold, success states
      dark: '#059669',        // Pressed state
      light: '#34D399',       // Hover state
    },
    danger: {
      DEFAULT: '#EF4444',    // Red - critical states, errors, warnings
      dark: '#DC2626',       // Pressed state
      light: '#F87171',      // Hover state
    },
  },

  // Neutral UI Elements - Structural colors, not decorative
  neutral: {
    iron: '#1F2937',         // Dark gray - borders, dividers, subtle backgrounds
    chalk: '#E5E7EB',         // Light gray - subtle UI elements, disabled borders
    steel: {
      DEFAULT: '#475569',    // Base steel - secondary UI elements
      light: '#64748B',      // Lighter steel - hover states
      dark: '#334155',       // Darker steel - pressed states
    },
  },
} as const

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================
// Typography should feel like equipment labels—clear, authoritative, no flourish.
// Tight letter spacing on headings, generous line-height on body.

export const typography = {
  // Font Families
  fontFamily: {
    display: ['var(--font-space-grotesk)', 'system-ui', '-apple-system', 'sans-serif'],
    body: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
  },

  // Type Scale - Command-level hierarchy
  fontSize: {
    hero: {
      size: 'clamp(3rem, 8vw, 7rem)',      // Massive, command-level
      lineHeight: '0.9',
      letterSpacing: '-0.02em',
    },
    display: {
      size: 'clamp(2rem, 5vw, 4.5rem)',   // Section headers
      lineHeight: '1.1',
      letterSpacing: '-0.01em',
    },
    h1: {
      size: 'clamp(1.875rem, 4vw, 3rem)', // Primary headings
      lineHeight: '1.2',
      letterSpacing: '-0.01em',
    },
    h2: {
      size: 'clamp(1.5rem, 3vw, 2.25rem)', // Secondary headings
      lineHeight: '1.3',
      letterSpacing: '-0.005em',
    },
    h3: {
      size: 'clamp(1.25rem, 2.5vw, 1.875rem)', // Tertiary headings
      lineHeight: '1.4',
      letterSpacing: '0',
    },
    h4: {
      size: 'clamp(1.125rem, 2vw, 1.5rem)',
      lineHeight: '1.4',
      letterSpacing: '0',
    },
    body: {
      size: '1rem',                        // Base body text
      lineHeight: '1.6',                   // Generous for readability
      letterSpacing: '0',
    },
    small: {
      size: '0.875rem',                    // Small text, labels
      lineHeight: '1.5',
      letterSpacing: '0',
    },
    caption: {
      size: '0.75rem',                     // Metadata, captions
      lineHeight: '1.4',
      letterSpacing: '0.01em',
    },
  },
} as const

// ============================================================================
// SPACING SCALE
// ============================================================================
// Systematic spacing reinforces precision. Every gap should feel intentional.
// Base unit: 4px (allows fine control)

export const spacing = {
  // Base scale (4px increments)
  scale: {
    0: '0px',
    1: '4px',      // 0.25rem
    2: '8px',      // 0.5rem
    3: '12px',     // 0.75rem
    4: '16px',     // 1rem
    5: '20px',     // 1.25rem
    6: '24px',     // 1.5rem
    8: '32px',     // 2rem
    10: '40px',    // 2.5rem
    12: '48px',    // 3rem
    16: '64px',    // 4rem
    20: '80px',    // 5rem
    24: '96px',    // 6rem
    32: '128px',   // 8rem
  },

  // Semantic spacing for common use cases
  semantic: {
    xs: '4px',     // Tight spacing (icons, badges)
    sm: '8px',     // Small gaps (form fields, compact lists)
    md: '16px',    // Default spacing (card padding, component gaps)
    lg: '24px',    // Large gaps (section spacing, card margins)
    xl: '32px',    // Extra large (major section breaks)
    '2xl': '48px', // Section padding
    '3xl': '64px', // Large section padding
    '4xl': '96px', // Hero section spacing
    '5xl': '128px', // Maximum section spacing
  },

  // Section spacing (based on scale, not random rem values)
  section: {
    sm: '64px',    // 16 * 4px
    md: '96px',    // 24 * 4px
    lg: '128px',   // 32 * 4px
  },
} as const

// ============================================================================
// BORDER RADIUS
// ============================================================================
// Gym equipment is angular. Avoid soft, friendly curves.
// Radius should feel structural, not decorative.

export const borderRadius = {
  none: '0px',     // Sharp, technical (default for cards/containers)
  sm: '2px',       // Minimal rounding (buttons, inputs)
  md: '4px',       // Slight rounding (hover states, elevated elements)
  full: '9999px',  // Fully rounded (progress indicators, badges - functional only)
} as const

// ============================================================================
// SHADOW SYSTEM
// ============================================================================
// Shadows add visual noise. A technical interface should feel flat and precise.
// If elevation is needed, use border or color contrast instead.

export const shadows = {
  // No decorative shadows - flat aesthetic preferred
  // If functional elevation is absolutely necessary:
  none: 'none',
  
  // Single-layer, minimal blur, tight offset (use sparingly)
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',      // Subtle elevation
  md: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',      // Moderate elevation (rarely used)
  
  // Alternative: Use border-based elevation
  border: {
    subtle: '0 0 0 1px rgba(255, 255, 255, 0.05)',  // Subtle border lift
    elevated: '0 0 0 1px rgba(255, 255, 255, 0.1)',  // More visible border
  },
} as const

// ============================================================================
// EXPORT ALL TOKENS
// ============================================================================

export const designTokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
} as const

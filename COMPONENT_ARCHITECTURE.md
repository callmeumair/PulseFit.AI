# PulseFit AI Component Architecture
## Structure Definition - No Styles Applied

---

## ARCHITECTURE PRINCIPLES

**Reusability:** Components should be composable and reusable across different contexts. Shared logic and UI patterns extracted into base components.

**Separation of Concerns:** 
- Page components: Composition and data flow
- Section components: Layout and content structure
- UI components: Presentational logic and interaction
- Data/Content: Separated from presentation

**Scalability:** 
- Component hierarchy supports easy extension
- Props interfaces allow flexibility without breaking changes
- Clear boundaries between layers

---

## COMPONENT HIERARCHY

```
src/
├── app/
│   └── page.tsx                    # Page-level composition
├── components/
│   ├── sections/                   # Section-level components
│   │   ├── Hero.tsx
│   │   ├── ProofMetrics.tsx
│   │   ├── CoreSystems.tsx
│   │   ├── AnalyticsVisualization.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   ├── ui/                         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── MetricBadge.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── SystemCard.tsx
│   │   ├── StepCard.tsx
│   │   ├── LinkGroup.tsx
│   │   └── ProgressRing.tsx
│   └── layout/                     # Layout components
│       ├── Container.tsx
│       ├── Grid.tsx
│       └── Stack.tsx
└── types/                          # Type definitions
    └── homepage.ts
```

---

## PAGE-LEVEL COMPONENTS

### `app/page.tsx`

**Responsibility:** 
- Compose all sections in correct order
- Handle page-level data fetching (if needed)
- Manage global page state (if any)

**Structure:**
```typescript
export default function HomePage() {
  return (
    <main>
      <Hero {...heroProps} />
      <ProofMetrics {...proofProps} />
      <CoreSystems {...systemsProps} />
      <AnalyticsVisualization {...analyticsProps} />
      <HowItWorks {...howItWorksProps} />
      <FinalCTA {...ctaProps} />
      <Footer {...footerProps} />
    </main>
  )
}
```

**Props:** None (page-level component)

**Dependencies:**
- All section components
- Data/content (can be imported or fetched)

---

## SECTION COMPONENTS

### 1. `sections/Hero.tsx`

**Responsibility:**
- Render hero section with headline, subheadline, CTA buttons, and metric badges
- Handle hero-specific animations and interactions
- Manage hero content structure

**Props:**
```typescript
interface HeroProps {
  headline: {
    primary: string
    accent?: string  // Optional accent text
  }
  subheadline: string
  actions: {
    primary: {
      label: string
      href?: string
      onClick?: () => void
    }
    secondary: {
      label: string
      href?: string
      onClick?: () => void
    }
  }
  metrics: Array<{
    value: string | number
    label: string
  }>
}
```

**Internal Structure:**
- Container (full viewport height)
- Headline component
- Subheadline component
- Action buttons group
- Metrics badges row

**Dependencies:**
- `ui/Button`
- `ui/MetricBadge`
- `layout/Container`
- `layout/Stack`

---

### 2. `sections/ProofMetrics.tsx`

**Responsibility:**
- Display proof metrics section with header and metric grid
- Render three-column metric display
- Handle metric data presentation

**Props:**
```typescript
interface ProofMetricsProps {
  header: {
    title: string
    description: string
  }
  metrics: Array<{
    value: string | number
    label: string
    context?: string  // Optional one-line context
  }>
}
```

**Internal Structure:**
- Section header
- Three-column grid (responsive to single column on mobile)
- Metric cards

**Dependencies:**
- `ui/SectionHeader`
- `ui/MetricBadge`
- `layout/Container`
- `layout/Grid`

---

### 3. `sections/CoreSystems.tsx`

**Responsibility:**
- Display four core systems in alternating split layout
- Manage system content and visual pairing
- Handle alternating layout logic

**Props:**
```typescript
interface CoreSystemsProps {
  header: {
    title: string
    description: string
  }
  systems: Array<{
    id: string
    label: string  // System identifier
    title: string  // System name
    description: string
    visual: ReactNode  // Visual component or placeholder
    layout?: 'left' | 'right'  // Content position (auto-alternates if not provided)
  }>
}
```

**Internal Structure:**
- Section header
- System list (alternating layout)
- Each system: SystemCard component

**Dependencies:**
- `ui/SectionHeader`
- `ui/SystemCard`
- `layout/Container`

---

### 4. `sections/AnalyticsVisualization.tsx`

**Responsibility:**
- Display analytics visualization section
- Render main visualization area
- Show supporting metrics below visualization

**Props:**
```typescript
interface AnalyticsVisualizationProps {
  header: {
    title: string
    description: string
  }
  visualization: ReactNode  // Main visualization component
  supportingMetrics: Array<{
    value: string | number
    label: string
  }>
  explanation?: string  // Optional explanatory text
}
```

**Internal Structure:**
- Section header
- Visualization area (centered, 70% width)
- Supporting metrics row (three metrics)
- Explanation text (optional)

**Dependencies:**
- `ui/SectionHeader`
- `ui/MetricBadge`
- `layout/Container`
- `layout/Stack`

---

### 5. `sections/HowItWorks.tsx`

**Responsibility:**
- Display four-step process flow
- Render horizontal step sequence with connectors
- Handle responsive stacking on mobile

**Props:**
```typescript
interface HowItWorksProps {
  header: {
    title: string
    description: string
  }
  steps: Array<{
    number: string  // Step number (e.g., "01")
    icon?: ReactNode  // Optional icon/symbol
    title: string
    description: string
  }>
  showConnectors?: boolean  // Show visual connectors between steps
}
```

**Internal Structure:**
- Section header
- Steps grid (horizontal on desktop, vertical on mobile)
- Step cards with connectors

**Dependencies:**
- `ui/SectionHeader`
- `ui/StepCard`
- `layout/Container`
- `layout/Grid`

---

### 6. `sections/FinalCTA.tsx`

**Responsibility:**
- Display final call-to-action section
- Render centered CTA with headline, body, and action button
- Handle conversion action

**Props:**
```typescript
interface FinalCTAProps {
  headline: string
  body: string
  action: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryLink?: {
    label: string
    href: string
  }
}
```

**Internal Structure:**
- Centered container
- Headline
- Body text
- Primary action button
- Secondary link (optional)

**Dependencies:**
- `ui/Button`
- `layout/Container`
- `layout/Stack`

---

### 7. `sections/Footer.tsx`

**Responsibility:**
- Display footer with navigation links and company info
- Render multi-column link groups
- Handle footer content structure

**Props:**
```typescript
interface FooterProps {
  logo?: ReactNode
  linkGroups: Array<{
    title: string
    links: Array<{
      label: string
      href: string
    }>
  }>
  bottomRow: {
    copyright: string
    socialLinks?: Array<{
      label: string
      href: string
      icon?: ReactNode
    }>
  }
}
```

**Internal Structure:**
- Multi-column grid (four columns on desktop)
- Link groups
- Bottom row (logo, copyright, social links)

**Dependencies:**
- `ui/LinkGroup`
- `layout/Container`
- `layout/Grid`

---

## REUSABLE UI COMPONENTS

### `ui/Button.tsx`

**Responsibility:**
- Render button with variants and sizes
- Handle button interactions and states
- Provide consistent button styling interface

**Props:**
```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string  // If provided, renders as link
  fullWidth?: boolean
}
```

**Usage:** Used in Hero, FinalCTA, and throughout the application

---

### `ui/Card.tsx`

**Responsibility:**
- Provide card container with consistent structure
- Handle card hover states and interactions
- Render card content wrapper

**Props:**
```typescript
interface CardProps {
  children: ReactNode
  hover?: boolean
  interactive?: boolean  // Makes card clickable
  onClick?: () => void
}
```

**Usage:** Used in ProofMetrics, CoreSystems, AnalyticsVisualization

---

### `ui/MetricBadge.tsx`

**Responsibility:**
- Display metric value with label
- Handle metric formatting and presentation
- Provide consistent metric display

**Props:**
```typescript
interface MetricBadgeProps {
  value: string | number
  label: string
  context?: string  // Optional context text
  size?: 'sm' | 'md' | 'lg'
  highlight?: boolean  // Emphasize this metric
}
```

**Usage:** Used in Hero, ProofMetrics, AnalyticsVisualization

---

### `ui/SectionHeader.tsx`

**Responsibility:**
- Render consistent section headers
- Display title and description
- Handle section header layout

**Props:**
```typescript
interface SectionHeaderProps {
  title: string
  description: string
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
}
```

**Usage:** Used in all section components

---

### `ui/SystemCard.tsx`

**Responsibility:**
- Display individual system card in split layout
- Render system content and visual side-by-side
- Handle alternating layout positioning

**Props:**
```typescript
interface SystemCardProps {
  label: string
  title: string
  description: string
  visual: ReactNode
  layout: 'left' | 'right'  // Content position
  index: number  // For animation delays
}
```

**Usage:** Used in CoreSystems section

---

### `ui/StepCard.tsx`

**Responsibility:**
- Display individual step in process flow
- Render step number, icon, title, and description
- Handle step card interactions

**Props:**
```typescript
interface StepCardProps {
  number: string
  icon?: ReactNode
  title: string
  description: string
  index: number  // For animation and connector logic
  isLast?: boolean  // Hide connector if last
}
```

**Usage:** Used in HowItWorks section

---

### `ui/LinkGroup.tsx`

**Responsibility:**
- Render group of related links
- Display link group title and links
- Handle link group structure

**Props:**
```typescript
interface LinkGroupProps {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}
```

**Usage:** Used in Footer section

---

### `ui/ProgressRing.tsx`

**Responsibility:**
- Display circular progress indicator
- Render percentage-based progress visualization
- Handle progress ring styling

**Props:**
```typescript
interface ProgressRingProps {
  percentage: number
  size?: number
  strokeWidth?: number
  color?: string
  label?: string
}
```

**Usage:** Used in AnalyticsVisualization (if needed)

---

## LAYOUT COMPONENTS

### `layout/Container.tsx`

**Responsibility:**
- Provide consistent container width and padding
- Handle responsive container behavior
- Center content with max-width constraints

**Props:**
```typescript
interface ContainerProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: boolean
}
```

**Usage:** Used in all section components

---

### `layout/Grid.tsx`

**Responsibility:**
- Render responsive grid layouts
- Handle grid column configuration
- Manage grid spacing and alignment

**Props:**
```typescript
interface GridProps {
  children: ReactNode
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  gap?: 'sm' | 'md' | 'lg'
  align?: 'start' | 'center' | 'end'
}
```

**Usage:** Used in ProofMetrics, CoreSystems, HowItWorks, Footer

---

### `layout/Stack.tsx`

**Responsibility:**
- Render vertical or horizontal stack layouts
- Handle stack spacing and alignment
- Manage stack direction

**Props:**
```typescript
interface StackProps {
  children: ReactNode
  direction?: 'row' | 'column'
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
}
```

**Usage:** Used in Hero, FinalCTA, and throughout sections

---

## TYPE DEFINITIONS

### `types/homepage.ts`

**Responsibility:**
- Define all TypeScript interfaces for homepage components
- Export shared types
- Provide type safety across components

**Exports:**
```typescript
export interface HeroProps { ... }
export interface ProofMetricsProps { ... }
export interface CoreSystemsProps { ... }
export interface AnalyticsVisualizationProps { ... }
export interface HowItWorksProps { ... }
export interface FinalCTAProps { ... }
export interface FooterProps { ... }
```

---

## DATA SEPARATION

**Content Structure:**
- Content should be separated from components
- Can be stored in:
  - JSON files (`data/homepage.json`)
  - TypeScript constants (`data/homepage.ts`)
  - CMS/API (fetched in page component)

**Example Structure:**
```typescript
// data/homepage.ts
export const homepageContent = {
  hero: {
    headline: { primary: 'Train Smarter.', accent: 'Build Your Edge.' },
    subheadline: 'AI-powered fitness that adapts...',
    actions: { ... },
    metrics: [ ... ]
  },
  proofMetrics: { ... },
  coreSystems: { ... },
  // etc.
}
```

---

## COMPONENT RESPONSIBILITY MATRIX

| Component | Layout | Content | Interaction | Animation |
|-----------|--------|---------|-------------|-----------|
| Page | ✅ | ✅ | ❌ | ❌ |
| Section | ✅ | ✅ | ⚠️ | ⚠️ |
| UI | ❌ | ❌ | ✅ | ⚠️ |
| Layout | ✅ | ❌ | ❌ | ❌ |

**Legend:**
- ✅ Primary responsibility
- ⚠️ Secondary responsibility
- ❌ Not responsible

---

## COMPOSITION PATTERNS

### Pattern 1: Section Composition
```typescript
<Section>
  <SectionHeader {...headerProps} />
  <Container>
    <Grid columns={{ mobile: 1, desktop: 3 }}>
      {items.map(item => <Card key={item.id}>{item.content}</Card>)}
    </Grid>
  </Container>
</Section>
```

### Pattern 2: Split Layout
```typescript
<Container>
  <Grid columns={{ mobile: 1, desktop: 2 }}>
    <Stack>{content}</Stack>
    <div>{visual}</div>
  </Grid>
</Container>
```

### Pattern 3: Centered CTA
```typescript
<Container>
  <Stack align="center" gap="lg">
    <h2>{headline}</h2>
    <p>{body}</p>
    <Button>{actionLabel}</Button>
  </Stack>
</Container>
```

---

## SCALABILITY CONSIDERATIONS

1. **New Sections:** Add new section component following existing pattern
2. **New UI Components:** Add to `ui/` directory with consistent props interface
3. **Layout Variations:** Extend layout components with new props, maintain backward compatibility
4. **Content Management:** Content structure allows easy updates without component changes
5. **Type Safety:** TypeScript interfaces ensure consistency and catch errors early

---

## NEXT STEPS

1. Create component files with structure (no styles)
2. Implement props interfaces
3. Add layout components
4. Wire up page composition
5. Add content/data layer
6. Apply styles (separate step)


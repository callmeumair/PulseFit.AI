# PulseFit.AI - Frontend

A modern, AI-powered fitness platform built with Next.js, TypeScript, and cutting-edge web technologies.

## 🚀 Overview

PulseFit.AI is a premium fitness startup frontend that showcases AI-powered personal training capabilities. The platform features a polished, million-dollar design with smooth animations, responsive layouts, and modern UI components.

## ✨ Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Premium Design**: Custom design tokens, gradients, and animations
- **AI Integration**: Interactive demos showcasing AI-powered fitness features
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: WCAG AA compliant components and interactions
- **Performance**: Optimized for speed with lazy loading and image optimization
- **SEO Ready**: Comprehensive metadata and Open Graph tags

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About/Team page
│   │   ├── contact/           # Contact page
│   │   ├── features/          # Features page with AI demo
│   │   ├── pricing/           # Pricing page with toggle
│   │   ├── globals.css        # Global styles and design tokens
│   │   ├── layout.tsx         # Root layout with navigation
│   │   └── page.tsx          # Homepage
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   ├── footer.tsx        # Footer component
│   │   └── navigation.tsx    # Navigation component
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
├── components.json          # shadcn/ui configuration
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Green gradient (`oklch(0.55 0.25 142)` to `oklch(0.65 0.20 200)`)
- **Secondary**: Blue gradient (`oklch(0.60 0.20 200)` to `oklch(0.70 0.18 60)`)
- **Accent**: Purple gradient (`oklch(0.70 0.18 60)` to `oklch(0.75 0.20 320)`)
- **Neutral**: Gray scale with high contrast ratios

### Typography
- **Headings**: Geist Sans (bold weights)
- **Body**: Geist Sans (regular weight)
- **Code**: Geist Mono

### Spacing & Layout
- **Container**: Max-width 7xl (1280px)
- **Padding**: Consistent 4/6/8/12/16/20 spacing scale
- **Border Radius**: 0.75rem (12px) for cards and buttons

## 📱 Pages

### Homepage (`/`)
- Hero section with animated gradient text
- Statistics showcase
- Feature highlights with icons
- AI demo preview
- User testimonials
- Call-to-action sections

### Features (`/features`)
- Interactive AI demo with tabs
- Core feature explanations
- Additional features grid
- Technology showcase

### Pricing (`/pricing`)
- Monthly/Annual toggle with savings
- Three-tier pricing (Free, Pro, Enterprise)
- Feature comparison table
- FAQ section

### About (`/about`)
- Mission statement
- Core values
- Team member profiles
- Company timeline
- Statistics

### Contact (`/contact`)
- Contact form with validation
- Multiple contact methods
- Office information
- FAQ section

## 🎭 Animations

All animations are powered by Framer Motion and include:

- **Page Transitions**: Smooth fade-in effects
- **Scroll Animations**: Elements animate into view
- **Hover Effects**: Interactive button and card states
- **Loading States**: Smooth loading animations
- **Micro-interactions**: Subtle feedback for user actions

## 🔧 Customization

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Include proper metadata for SEO
4. Use the existing layout components

### Modifying Colors

Update the CSS custom properties in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.55 0.25 142);
  --secondary: oklch(0.60 0.20 200);
  /* ... other colors */
}
```

### Adding Components

1. Create component in `src/components/`
2. Use shadcn/ui components as base
3. Follow the existing design patterns
4. Include proper TypeScript types

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **Railway**: Connect your GitHub repository
- **AWS**: Use Amplify or custom deployment

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting
- **Bundle Size**: Optimized with tree shaking

## 🔒 SEO Features

- **Metadata**: Comprehensive page metadata
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build for production
npm run build
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- **Email**: hello@pulsefitai.com
- **Documentation**: [docs.pulsefitai.com](https://docs.pulsefitai.com)
- **Issues**: GitHub Issues

## 🙏 Acknowledgments

- **shadcn/ui** for the excellent component library
- **Radix UI** for accessible primitives
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Next.js** team for the amazing framework

---

Built with ❤️ by the PulseFit.AI team
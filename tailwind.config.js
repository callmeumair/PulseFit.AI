/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Athletic dark theme
                'gym-black': '#0A0A0A',
                'gym-charcoal': '#1A1A1A',
                'gym-dark': '#0F0F0F',
                'gym-steel': '#3A3A3A',
                'gym-gray': '#6B6B6B',
                'gym-light-gray': '#9B9B9B',
                'gym-orange': '#E84A27',
                'gym-orange-dark': '#C23D1F',
                'gym-orange-light': '#FF5C35',
                'gym-white': '#F5F5F5',
                'gym-off-white': '#E0E0E0',
            },
            fontFamily: {
                display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
                body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display-xl': ['7rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'display-lg': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'display-md': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
                'display-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '34': '8.5rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.7s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
                'slide-in-right': 'slideInRight 0.7s ease-out forwards',
                'scale-in': 'scaleIn 0.5s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-athletic': 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
            },
        },
    },
    plugins: [],
}

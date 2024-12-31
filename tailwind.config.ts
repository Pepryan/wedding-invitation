import type { Config } from "tailwindcss";

const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        'wedding-primary': '#F3E9DD',
        'wedding-secondary': '#D4C1B0',
        'wedding-accent': '#BFA89B',
        'wedding-text': '#4A3F35',
        'wedding-gold': '#D4AF37',
      },
      fontFamily: {
        sans: ['var(--font-primary)', ...fontFamily.sans],
        serif: ['var(--font-secondary)', ...fontFamily.serif],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'wedding-pattern': "url('/public/images/pattern/subtle-pattern.webp')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'float-1': 'float 8s ease-in-out infinite',
        'float-2': 'float 10s ease-in-out infinite',
        'float-3': 'float 12s ease-in-out infinite',
        'move-bg': 'moveBackground 60s linear infinite',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        moveBackground: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '400px 400px' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

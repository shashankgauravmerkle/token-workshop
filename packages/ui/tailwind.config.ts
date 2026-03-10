import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ─── Dodie Thayer x Tory Burch Palette ──────────────────────────────
        cream: {
          50:  '#FDFCF9',
          100: '#FAF8F2',
          200: '#F5F0E8',
          300: '#EDE5D4',
          400: '#E0D5BC',
          500: '#C9BBA0',
        },
        sage: {
          50:  '#F2F5F0',
          100: '#E0E9DC',
          200: '#C2D4BA',
          300: '#9DB88E',
          400: '#8B9E7E',
          500: '#6E8360',
          600: '#4A6741',
          700: '#3A5232',
        },
        terracotta: {
          50:  '#FBF0EB',
          100: '#F5DDD3',
          200: '#E9B9A5',
          300: '#D98A6D',
          400: '#C4714A',
          500: '#A85A36',
          600: '#8A4428',
        },
        blush: {
          50:  '#FDF5F2',
          100: '#FAE8E2',
          200: '#F2CEBF',
          300: '#E8C4B8',
          400: '#D9A895',
          500: '#C48C76',
        },
        gold: {
          300: '#D4B87A',
          400: '#C4A060',
          500: '#B8965A',
          600: '#9E7E42',
          700: '#7A5E28',
        },
        brand: {
          black: '#1A1A1A',
          white: '#FAFAF7',
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'Georgia', "'Times New Roman'", 'serif'],
        sans:  ["'Inter'", "'Helvetica Neue'", 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.25em',
        wider: '0.05em',
      },
      boxShadow: {
        card:    '0 8px 30px -4px rgb(26 26 26 / 0.08), 0 2px 6px -2px rgb(26 26 26 / 0.04)',
        subtle:  '0 1px 3px 0 rgb(26 26 26 / 0.06), 0 1px 2px -1px rgb(26 26 26 / 0.04)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        spring:    'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      maxWidth: {
        content: '1440px',
        prose:   '720px',
      },
      aspectRatio: {
        'product':    '3 / 4',
        'hero':       '16 / 9',
        'hero-tall':  '4 / 5',
        'editorial':  '2 / 3',
        'square':     '1 / 1',
      },
    },
  },
  plugins: [],
}

export default config

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
        wood: {
          50: '#fdf8f0',
          100: '#f9edda',
          200: '#f2d9b0',
          300: '#e8bf7e',
          400: '#dca04a',
          500: '#d4882a',
          600: '#c47020',
          700: '#a3571b',
          800: '#83451c',
          900: '#6b3919',
          950: '#3a1d0a',
        },
        bark: {
          50: '#f7f4f0',
          100: '#ece5da',
          200: '#d9ccb8',
          300: '#c1ad8e',
          400: '#a98c67',
          500: '#97774f',
          600: '#816344',
          700: '#694f39',
          800: '#574232',
          900: '#4a382c',
          950: '#271d16',
        },
        cream: '#fdf6eb',
        charcoal: '#1a1208',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
        accent: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'wood-grain': "url('/wood-texture.svg')",
        'hero-overlay': 'linear-gradient(135deg, rgba(26,18,8,0.85) 0%, rgba(58,29,10,0.7) 100%)',
      },
      boxShadow: {
        'wood': '0 4px 24px rgba(164, 87, 27, 0.2), 0 1px 6px rgba(26,18,8,0.1)',
        'wood-lg': '0 8px 40px rgba(164, 87, 27, 0.3), 0 2px 12px rgba(26,18,8,0.15)',
        'glass': '0 8px 32px rgba(26, 18, 8, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

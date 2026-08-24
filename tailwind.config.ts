import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        arven: {
          bg: '#0F0F1E',
          gold: '#ffd700',
          magenta: '#D946EF',
          cyan: '#00F2FE',
          red: '#FF3333',
          green: '#00A86B',
          dark: '#0F0F1E',
          darker: '#080812',
          text: '#FFFFFF',
          'text-secondary': '#E5E5E5',
          'text-tertiary': '#CCCCCC',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out',
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
        pulseGlow: {
          '0%': { 'box-shadow': '0 0 20px rgba(255, 215, 0, 0.5)' },
          '50%': { 'box-shadow': '0 0 40px rgba(255, 215, 0, 0.8)' },
          '100%': { 'box-shadow': '0 0 20px rgba(255, 215, 0, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}

export default config



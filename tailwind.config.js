/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        diwali: {
          dark: '#0d0d0d',
          black: '#171717',
          charcoal: '#222222',
          gold: '#ffd700',
          amber: '#ff9100',
          flame: '#ff4500',
          crimson: '#dc2626',
          marigold: '#f59e0b',
          lightBg: '#fafafa',
        }
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        DEFAULT: '4px',
        'md': '4px',
        'lg': '4px',
        'xl': '4px',
        '2xl': '4px',
        '3xl': '4px',
        'full': '9999px',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'sans-serif'],
        ui: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'diwali-gradient': 'linear-gradient(to bottom, #0c061a, #1c0d38, #2e104d)',
        'gold-gradient': 'linear-gradient(135deg, #ffe066 0%, #f59e0b 50%, #d97706 100%)',
        'flame-gradient': 'linear-gradient(135deg, #ff9100 0%, #ff4500 50%, #dc2626 100%)',
      },
      animation: {
        'flicker': 'flicker 1.8s infinite alternate',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1', transform: 'scale(1) rotate(-1deg)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05) rotate(1deg)' },
          '70%': { opacity: '0.95', transform: 'scale(0.98) rotate(0deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 0 35px rgba(255, 145, 0, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

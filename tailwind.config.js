/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.15)' },
        },
        'pulse-orbit': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.85' },
          '50%':      { transform: 'scale(1.12)', opacity: '1' },
        },
        'orbit-slow': {
          '0%':   { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        // Gentle floating movement for nodes (subtle, organic drift)
        'gentle-float': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '20%':      { transform: 'translate(3px, -2px)' },
          '40%':      { transform: 'translate(1px, 4px)' },
          '60%':      { transform: 'translate(-4px, 1px)' },
          '80%':      { transform: 'translate(2px, -3px)' },
        },
        // Subtle flowing dash for lines (gives "energy flowing" feeling)
        dash: {
          'to': { 'stroke-dashoffset': '-40' },  // adjust -40 for faster/slower flow
        },
      },
      animation: {
        pulse:        'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-orbit': 'pulse-orbit 6s ease-in-out infinite',
        'orbit-slow':  'orbit-slow 25s linear infinite',
        'gentle-float': 'gentle-float 18s ease-in-out infinite',
        dash:          'dash 12s linear infinite',
        'pulse-slow':  'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
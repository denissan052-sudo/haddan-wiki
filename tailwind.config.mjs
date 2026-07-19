/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'haddan': {
          bg: '#0a0a0f',
          'bg-secondary': '#12121a',
          card: '#1a1a25',
          'card-hover': '#222230',
          border: '#2a2a3a',
          'border-accent': '#3a3a50',
          text: '#e8e6e1',
          'text-secondary': '#a0a0a0',
          muted: '#6a6a7a',
          gold: '#c9a84c',
          'gold-light': '#e0c06e',
          'gold-dark': '#9a7d3a',
          red: '#c44a4a',
          green: '#5a9a5a',
          blue: '#5a7aaa',
          purple: '#7a5aaa',
          cyan: '#4a9a9a',
          orange: '#aa7a4a'
        }
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'sans': ['Noto Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};

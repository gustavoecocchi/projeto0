import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#05070d',
        card: '#0d121d',
        foreground: '#e5e7eb',
        muted: '#91a0b5',
        border: '#1b2231',
        primary: '#7c9cff',
        accent: '#1b2435'
      }
    }
  },
  plugins: []
} satisfies Config;

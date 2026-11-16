/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#08080A',
        surface: {
          DEFAULT: '#0F0F12',
          raised: '#16161A',
        },
        line: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.16)',
        },
        accent: {
          DEFAULT: '#8E7CFF',
          soft: '#BCB2FF',
        },
      },
      fontFamily: {
        sans: ['"Geist"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        shine: 'shine 3.2s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 6s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '60%, 100%': { transform: 'translateX(220%) skewX(-20deg)' },
        },
        'gradient-pan': {
          from: { backgroundPosition: '0% 50%' },
          to: { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
}

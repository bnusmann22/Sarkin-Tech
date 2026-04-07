/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        backgroundImage: {
        'grid-pattern': "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)"
      },
      colors: {
        background: '#f8fafc',
        foreground: '#111827',
        border: '#e5e7eb',
        primary: '#2563eb',
        'muted-foreground': '#6b7280',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
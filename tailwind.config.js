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
        // Core neutrals
        'pure-white': '#FFFFFF',
        'cool-gray': '#EAEAEA',
        'charcoal': '#333333',
        'classic-black': '#000000',

        // Branding
        'deep-indigo': '#0B2A6C',
        'electric-blue': '#00B0F0',
        'golden-ochre': '#D4A017',
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        jost: ['Jost', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
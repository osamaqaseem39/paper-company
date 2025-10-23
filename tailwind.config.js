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
        
        // Status colors
        'success-green': '#28a745',
        'error-red': '#dc3545',
        'warning-yellow': '#ffc107',
        
        // Additional grays for consistency
        'gray-50': '#f9fafb',
        'gray-100': '#f3f4f6',
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'gray-400': '#9ca3af',
        'gray-500': '#6b7280',
        'gray-600': '#4b5563',
        'gray-700': '#374151',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
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
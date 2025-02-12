/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [import('@tailwindcss/line-clamp')],
})

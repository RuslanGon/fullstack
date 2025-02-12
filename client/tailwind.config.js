/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    async () => {
      const lineClamp = await import('@tailwindcss/line-clamp');
      return lineClamp.default; // Access the default export
    },
  ],
};
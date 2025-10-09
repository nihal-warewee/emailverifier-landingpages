/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'softer': "0 8px 32px rgba(0,0,0,0.05), 0 -2px 5px rgba(0,0,0,0.03)"
      }
    },
  },
  plugins: [],
};

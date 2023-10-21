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
        window: 'rgba(45, 42, 46, 1)',
        activity: 'rgba(25, 24, 26, 1)',
        title: 'rgba(34, 31, 34, 1)',
        shaded: '#b1b1b0',
        border: '#434042',
      },
    },
    screens: {
      xs: '480px',
      sm: '900px',
      md: '1200px',
    },
  },
  plugins: [],
}

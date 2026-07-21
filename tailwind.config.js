/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nemy: {
          bg: '#050b14',
          surface: '#0d1b2d',
          surface2: '#11243a',
          text: '#f7f9fc',
          muted: '#9dafc3',
          cyan: '#2fd8ff',
          blue: '#397cff',
          violet: '#744bff',
          green: '#23d4a2',
        },
      },
      boxShadow: { nemy: '0 30px 90px rgba(0,0,0,.42)' },
      borderRadius: { nemy: '1.75rem' },
    },
  },
  plugins: [],
}

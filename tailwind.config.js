/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'serif'],
        nunito: ['Nunito', 'serif'],
        poppins: ['Poppins', 'serif'],
        tinos: ['Tinos', 'serif'],
        kufam: ['Kufam', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


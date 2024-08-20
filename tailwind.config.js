/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "md":"640px",
        "xl":"900px",
        "2xl": "1100px",
      },
    },
    extend: {
      boxShadow: {
        'custom': '0px 2.99px 8.97px -1.49px rgba(0, 0, 0, 0.12)',
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {

        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '50%': { opacity: 0, transform: 'translateY(6px)' },
          '75%': { opacity: 1, transform: 'translateY(3px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        
        'fade-in-side': {
          '0%': { opacity: 0, transform: 'translatex(10px)' },
          '50%': { opacity: 0, transform: 'translatex(6px)' },
          '75%': { opacity: 1, transform: 'translatex(3px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'disappear':{
          '0%': {
            opacity: 1
          },
          '20%': {
            color: "#fff"
          },
          '100%': {
            opacity: 0
          }
        },
        'appear':{
          '0%': {
            opacity: 0
          },
          '70%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },

        
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-side': 'fade-in-side 0.5s ease-in-out forwards',
        'extend': 'extend 2s ease-in-out forwards',
        'disappear': 'disappear 2.2s ease-in-out forwards',
        'appear': 'appear 3s ease-in-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
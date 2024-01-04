/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },

      keyframes: {
        'text-slide-4': {
          '0%, 20%': {
              transform: 'translateY(0%)',
          },
          '25%, 45%': {
              transform: 'translateY(-20%)',
          },
          '50%, 70%': {
              transform: 'translateY(-40%)',
          },
          '75%, 95%': {
              transform: 'translateY(-60%)',
          },                            
          '100%': {
              transform: 'translateY(-80%)',
          },
      },

        'text-slide-3': {
          '0%, 26.66%': {
              transform: 'translateY(0%)',
          },
          '33.33%, 60%': {
              transform: 'translateY(-25%)',
          },
          '66.66%, 93.33%': {
              transform: 'translateY(-50%)',
          },
          '100%': {
              transform: 'translateY(-75%)',
          },
        },
      },

    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
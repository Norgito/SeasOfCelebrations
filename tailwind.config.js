/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Lobster'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px'
    },
    extend: {
      colors: {
        primary: 'rgb(215,238,248)',
        secondary: '#c84ff4',
        extra: '#d245f3'
      },
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
}


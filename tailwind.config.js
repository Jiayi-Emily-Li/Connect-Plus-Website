/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'lilac': '#EF94EF',
        'skyblue': '#87CEEB',
        'sandstone': '#FFE599',
        'navyblue': '#161B4F'
      },
      fontFamily: {
       primaryTitle: ["MONTSERRAT"],
       secondaryTitle: ["Lexend"],
       body: ["Nunito"]
      },
      animation: {
        'fade-in': 'fadeIn 5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'bounce-in': 'bounceIn 4s ease',
      },
      keyframes: {
        bounceIn: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
}

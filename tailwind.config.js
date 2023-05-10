/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#ff9319',
        red_orange: '#f38e82',
        light_brown: '#655A56',
        gray: '#f9f5f3',
        brown: '#918581',
        dark_gray: '#f2efee'
      },
      backgroundImage: {
        orange_to_red: 'linear-gradient(to right bottom,#fbdb89,#f48982)'
      }
    },
  },
  plugins: [require("daisyui")],
}

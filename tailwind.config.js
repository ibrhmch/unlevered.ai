/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'unleveredpurple': '#070415',
        'unleveredpurple-light': '#2b0f51',
        'unlevered-textpurple': '#948CF2',
        'unlevered-green': '#00FFC0',
        'unlevered-red': '#ff5959',
      },
    },
  },
  plugins: [],
}


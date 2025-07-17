// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        neonblue: '#00eaff',
        neonred: '#ff005c',
        neonpurple: '#a259ff',
        neonyellow: '#fff500',
        neonpink: '#ff00c8',
        darkbg: '#0a0a1e',
      },
    },
  },
  plugins: [],
} 
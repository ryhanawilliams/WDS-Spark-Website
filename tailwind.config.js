module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#87CEEB',
        'lime-green': '#32CD32',
        'dark-green': '#228B22',
        'teal-water': '#008B8B',
        'orange-accent': '#FF8C00',
        'brown-footer': '#8B4513',
        'hero-start': '#72D5FF',
        'hero-end': '#448099'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'metropolis': ['Metropolis', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Fredoka', 'sans-serif'],
      sans: ['Inter', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark': {
        'bg': '#1f1f1f',
        'component': '#303636',
        'text': '#eaf6ff',
        'primary': '#ff8100',
        'secondary': '#ff6700'
      },

      'light': {
        'bg': '#fff5de',
        'component':  '#ecebff',
        'text': '#0891b2',
        'primary': '#3f3cbb',
        'secondary': '#3ab7bf'
      },


      'primary': '#3f3cbb',
      'secondary': '#3ab7bf',
      'background': '#fff5de',
      'silver': '#ecebff',
      'tahiti': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '4rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    }, 
    extend: {},
  },
  plugins: [],
}

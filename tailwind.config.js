/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',  "./node_modules/flowbite/**/*.js"],
  // darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      dark_color: '#1A1818',
      light_color: '#FFEAEC',
      // currentColor: 'currentColor',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


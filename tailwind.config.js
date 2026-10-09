/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: '#FFFFFF',
          secondary: '#F7F7F5',
          ivory: '#F2F0EA',
          ivoryLight: '#FAF9F6',
          text: '#171717',
          secondaryText: '#686868',
          gold: '#C6A56B',
          goldHover: '#B59458',
          goldLight: '#E8D9BF',
          goldSubtle: '#F9F6F0',
          border: '#E8E5DF',
          borderLight: '#F0EEEA',
          green: '#34765C',
          greenLight: '#EBF4F0',
          dark: '#1C1B19',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 2px 10px 0 rgba(23, 23, 23, 0.03), 0 10px 30px -5px rgba(23, 23, 23, 0.05)',
        'luxury-hover': '0 8px 30px -4px rgba(198, 165, 107, 0.12), 0 4px 15px -2px rgba(23, 23, 23, 0.04)',
        'luxury-card': '0 1px 3px 0 rgba(23, 23, 23, 0.04), 0 6px 18px 0 rgba(23, 23, 23, 0.02)',
      }
    },
  },
  plugins: [],
}

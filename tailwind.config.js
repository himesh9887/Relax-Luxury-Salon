/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        gold: '#D4AF37',
        pearl: '#F8FAFC',
        blush: '#F8E7E0',
        sage: '#8FA998',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 24px 80px rgba(15, 23, 42, 0.18)',
        glow: '0 18px 45px rgba(212, 175, 55, 0.28)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5E7A0 45%, #B88918 100%)',
      },
    },
  },
  plugins: [],
};

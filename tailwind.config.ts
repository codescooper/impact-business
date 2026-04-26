import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#06377c',
        'brand-navy': '#03193f',
        'brand-gold': '#d79b21',
        'brand-ink': '#081327',
        impact: '#00a86b',
      },
      boxShadow: {
        soft: '0 12px 35px rgba(3, 25, 63, 0.14)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 10% 15%, rgba(215, 155, 33, 0.18), transparent 30%), radial-gradient(circle at 90% 0%, rgba(6, 55, 124, 0.18), transparent 35%), linear-gradient(140deg, #f6f9ff 0%, #ffffff 35%, #edf4ff 100%)',
      },
    },
  },
  plugins: [],
};

export default config;

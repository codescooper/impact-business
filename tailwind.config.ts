import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#081327',
        impact: '#00a86b',
        gold: '#d4af37',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(8, 19, 39, 0.12)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 10% 20%, rgba(212, 175, 55, 0.15), transparent 30%), radial-gradient(circle at 90% 0%, rgba(0, 168, 107, 0.2), transparent 45%)',
      },
    },
  },
  plugins: [],
};

export default config;

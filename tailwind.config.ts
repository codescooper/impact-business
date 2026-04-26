import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0b3d86',
        'brand-navy': '#051c49',
        'brand-gold': '#d88900',
        'brand-ink': '#11233d',
      },
      boxShadow: {
        soft: '0 14px 40px rgba(5, 28, 73, 0.10)',
      },
      backgroundImage: {
        surface:
          'radial-gradient(circle at 10% 10%, rgba(216, 137, 0, 0.14), transparent 30%), radial-gradient(circle at 90% 0%, rgba(11, 61, 134, 0.16), transparent 30%), linear-gradient(135deg, #f8fbff 0%, #ffffff 45%, #edf4ff 100%)',
      },
    },
  },
  plugins: [],
};

export default config;

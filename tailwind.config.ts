import type { Config } from 'tailwindcss';
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

const customFontSize = {
  '18': '18px',
  '8': '8px',
  '30':'30px'
};

const customCell = {
  width: '200px',
}

const customWidth = {
  '48': '40.28213rem',
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        amaranth: ['Amaranth', 'sans-serif'],
        'inria-sans': ['Inria Sans', 'sans-serif'],
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      },
      colors: {
        customBlue: '#044357',

        h1Blue:'1081EB',
        hey:'#fef2f2'
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '900',
        bold: '1000',
      },
      fontSize: {
        ...customFontSize,
      },
      width: {
        ...customWidth,

        ...customCell,

      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Poppins', variants: ['400', '500', '600', '700'] },
        { family: 'Amaranth', variants: ['400', '700'] },
        { family: 'Inria Sans', variants: ['400', '700'] },
        { family: 'Kumbh Sans', variants: ['400', '700'] },
      ],
      formats: ['woff2'],
    }),
  ],
};

export default config;


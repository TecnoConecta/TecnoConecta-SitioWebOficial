/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'scroll-infinito': 'scroll-infinito 25s reverse linear infinite'
      },
      keyframes: {
        'scroll-infinito': {
          from : { transform: 'translateX(0)' },
          to: { transform: 'translateX(-70%)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
};

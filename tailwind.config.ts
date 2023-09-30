import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'front-cover': "url('/assets/images/front-cover.png')",
        hero: "url('/assets/images/front-cover.png')",
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        corinthia: ['var(--font-corinthia)', ...fontFamily.sans],
        'cormorant-upright': [
          'var(--font-cormorant-upright)',
          ...fontFamily.sans,
        ],
      },
      colors: {
        red: '#BB4A4A',
      },
    },
  },
  plugins: [],
}
export default config

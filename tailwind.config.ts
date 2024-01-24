import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', ...fontFamily.sans],
        rochester: ['var(--font-rochester)'],
        'cormorant-upright': ['var(--font-cormorant-upright)'],
        cal: ['var(--font-cal)'],
      },
      colors: {
        red: '#BB4A4A',
        accent: '#6D1E1E',
        foreground: '#515151',
        secondary: '#8B8B8B',
        input: '#DB7B7B',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config

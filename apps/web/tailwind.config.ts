import type { Config } from 'tailwindcss'
import baseConfig from '@token-workshop/ui/tailwind'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  presets: [baseConfig],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config

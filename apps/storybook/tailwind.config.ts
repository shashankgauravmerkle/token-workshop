import type { Config } from 'tailwindcss'
import baseConfig from '@token-workshop/ui/tailwind'

const config: Config = {
  content: [
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  presets: [baseConfig],
}

export default config

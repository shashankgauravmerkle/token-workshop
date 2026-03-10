import type { Preview } from '@storybook/react'
import '../storybook.css'

const preview: Preview = {
  parameters: {
    // ─── Backgrounds ──────────────────────────────────────────────────────
    backgrounds: {
      default: 'cream',
      values: [
        { name: 'cream',     value: '#F5F0E8' },
        { name: 'ivory',     value: '#FAFAF7' },
        { name: 'white',     value: '#FFFFFF' },
        { name: 'dark',      value: '#1A1A1A' },
        { name: 'sage',      value: '#4A6741' },
        { name: 'terracotta',value: '#C4714A' },
      ],
    },

    // ─── Viewport ─────────────────────────────────────────────────────────
    viewport: {
      viewports: {
        mobile:  { name: 'Mobile (375)',  styles: { width: '375px',  height: '812px'  }, type: 'mobile'  },
        tablet:  { name: 'Tablet (768)',  styles: { width: '768px',  height: '1024px' }, type: 'tablet'  },
        desktop: { name: 'Desktop (1280)',styles: { width: '1280px', height: '900px'  }, type: 'desktop' },
        wide:    { name: 'Wide (1440)',   styles: { width: '1440px', height: '900px'  }, type: 'desktop' },
      },
      defaultViewport: 'desktop',
    },

    // ─── Controls ─────────────────────────────────────────────────────────
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },

    // ─── Actions ──────────────────────────────────────────────────────────
    actions: { argTypesRegex: '^on[A-Z].*' },

    // ─── Docs ─────────────────────────────────────────────────────────────
    docs: {
      toc: true,
    },

    // ─── Accessibility ────────────────────────────────────────────────────
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }],
      },
    },
  },
  tags: ['autodocs'],
}

export default preview

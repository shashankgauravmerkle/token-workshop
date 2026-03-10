/**
 * Dodie Thayer for Tory Burch — Typography Tokens
 *
 * Editorial luxury typography pairing:
 * - Playfair Display: Refined serif for editorial headlines
 * - Inter: Clean humanist sans-serif for body and UI
 */

export const typography = {
  // ─── Font Families ────────────────────────────────────────────────────────
  fontFamily: {
    serif:  ["'Playfair Display'", 'Georgia', "'Times New Roman'", 'serif'],
    sans:   ["'Inter'", "'Helvetica Neue'", 'Arial', 'sans-serif'],
    mono:   ["'JetBrains Mono'", "'Fira Code'", 'Consolas', 'monospace'],
  },

  // ─── Font Sizes ───────────────────────────────────────────────────────────
  fontSize: {
    '2xs':  ['0.625rem',  { lineHeight: '1rem'    }],   // 10px
    xs:     ['0.75rem',   { lineHeight: '1rem'    }],   // 12px
    sm:     ['0.875rem',  { lineHeight: '1.25rem' }],   // 14px
    base:   ['1rem',      { lineHeight: '1.5rem'  }],   // 16px
    lg:     ['1.125rem',  { lineHeight: '1.75rem' }],   // 18px
    xl:     ['1.25rem',   { lineHeight: '1.75rem' }],   // 20px
    '2xl':  ['1.5rem',    { lineHeight: '2rem'    }],   // 24px
    '3xl':  ['1.875rem',  { lineHeight: '2.25rem' }],   // 30px
    '4xl':  ['2.25rem',   { lineHeight: '2.5rem'  }],   // 36px
    '5xl':  ['3rem',      { lineHeight: '1.1'     }],   // 48px
    '6xl':  ['3.75rem',   { lineHeight: '1'       }],   // 60px
    '7xl':  ['4.5rem',    { lineHeight: '1'       }],   // 72px
    '8xl':  ['6rem',      { lineHeight: '1'       }],   // 96px
    '9xl':  ['8rem',      { lineHeight: '1'       }],   // 128px
  },

  // ─── Font Weights ─────────────────────────────────────────────────────────
  fontWeight: {
    thin:       '100',
    light:      '300',
    regular:    '400',
    medium:     '500',
    semibold:   '600',
    bold:       '700',
    extrabold:  '800',
  },

  // ─── Letter Spacing ───────────────────────────────────────────────────────
  letterSpacing: {
    tightest: '-0.05em',
    tighter:  '-0.025em',
    tight:    '-0.01em',
    normal:   '0em',
    wide:     '0.025em',
    wider:    '0.05em',
    widest:   '0.15em',
    luxury:   '0.25em',    // Editorial all-caps labels
  },

  // ─── Line Heights ─────────────────────────────────────────────────────────
  lineHeight: {
    none:       '1',
    tight:      '1.1',
    snug:       '1.25',
    normal:     '1.5',
    relaxed:    '1.625',
    loose:      '2',
  },

  // ─── Typographic Scale Presets ────────────────────────────────────────────
  presets: {
    displayHero: {
      fontFamily: 'serif',
      fontSize:   '7xl',
      fontWeight: 'light',
      letterSpacing: 'tight',
      lineHeight: 'tight',
    },
    displayLarge: {
      fontFamily: 'serif',
      fontSize:   '5xl',
      fontWeight: 'regular',
      letterSpacing: 'tight',
      lineHeight: 'tight',
    },
    displayMedium: {
      fontFamily: 'serif',
      fontSize:   '4xl',
      fontWeight: 'regular',
      letterSpacing: 'normal',
      lineHeight: 'snug',
    },
    headingLarge: {
      fontFamily: 'serif',
      fontSize:   '3xl',
      fontWeight: 'regular',
      letterSpacing: 'normal',
      lineHeight: 'snug',
    },
    headingMedium: {
      fontFamily: 'serif',
      fontSize:   '2xl',
      fontWeight: 'regular',
      lineHeight: 'snug',
    },
    headingSmall: {
      fontFamily: 'sans',
      fontSize:   'xl',
      fontWeight: 'medium',
      lineHeight: 'normal',
    },
    labelLuxury: {
      fontFamily: 'sans',
      fontSize:   'xs',
      fontWeight: 'medium',
      letterSpacing: 'luxury',
      lineHeight: 'normal',
    },
    bodyLarge: {
      fontFamily: 'sans',
      fontSize:   'lg',
      fontWeight: 'regular',
      lineHeight: 'relaxed',
    },
    bodyBase: {
      fontFamily: 'sans',
      fontSize:   'base',
      fontWeight: 'regular',
      lineHeight: 'normal',
    },
    bodySmall: {
      fontFamily: 'sans',
      fontSize:   'sm',
      fontWeight: 'regular',
      lineHeight: 'normal',
    },
    caption: {
      fontFamily: 'sans',
      fontSize:   'xs',
      fontWeight: 'regular',
      letterSpacing: 'wide',
      lineHeight: 'normal',
    },
    price: {
      fontFamily: 'sans',
      fontSize:   'base',
      fontWeight: 'medium',
      letterSpacing: 'normal',
    },
  },
} as const

export type TypographyToken = typeof typography

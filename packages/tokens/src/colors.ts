/**
 * Dodie Thayer for Tory Burch — Color Tokens
 *
 * Palette inspired by Dodie Thayer's signature hand-painted lacquerware:
 * earthy botanicals, warm neutrals, coastal garden hues.
 */

export const colors = {
  // ─── Brand Core ───────────────────────────────────────────────────────────
  brand: {
    black: '#1A1A1A',    // Warm near-black — primary text
    white: '#FAFAF7',    // Ivory white — primary backgrounds
    gold: '#B8965A',     // Burnished gold — accent, borders, hover states
  },

  // ─── Dodie Thayer Botanical Palette ───────────────────────────────────────
  cream: {
    50:  '#FDFCF9',
    100: '#FAF8F2',
    200: '#F5F0E8',   // Primary page background
    300: '#EDE5D4',
    400: '#E0D5BC',
    500: '#C9BBA0',
  },

  sage: {
    50:  '#F2F5F0',
    100: '#E0E9DC',
    200: '#C2D4BA',
    300: '#9DB88E',
    400: '#8B9E7E',   // Primary sage — botanical motif colour
    500: '#6E8360',
    600: '#4A6741',   // Forest green — deep accent
    700: '#3A5232',
  },

  terracotta: {
    50:  '#FBF0EB',
    100: '#F5DDD3',
    200: '#E9B9A5',
    300: '#D98A6D',
    400: '#C4714A',   // Primary terracotta — warm accent
    500: '#A85A36',
    600: '#8A4428',
  },

  blush: {
    50:  '#FDF5F2',
    100: '#FAE8E2',
    200: '#F2CEBF',
    300: '#E8C4B8',   // Soft blush — secondary backgrounds, cards
    400: '#D9A895',
    500: '#C48C76',
  },

  // ─── Neutrals ─────────────────────────────────────────────────────────────
  neutral: {
    0:   '#FFFFFF',
    50:  '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },

  // ─── Semantic ─────────────────────────────────────────────────────────────
  semantic: {
    success: '#5A8B5A',
    warning: '#C4714A',
    error:   '#B84040',
    info:    '#4A7A8B',
  },
} as const

export type ColorToken = typeof colors

/**
 * Dodie Thayer for Tory Burch — Shadow Tokens
 *
 * Soft editorial shadows — no harsh drop shadows.
 */

export const shadows = {
  none:   'none',
  xs:     '0 1px 2px 0 rgb(26 26 26 / 0.04)',
  sm:     '0 1px 3px 0 rgb(26 26 26 / 0.06), 0 1px 2px -1px rgb(26 26 26 / 0.04)',
  md:     '0 4px 6px -1px rgb(26 26 26 / 0.06), 0 2px 4px -2px rgb(26 26 26 / 0.04)',
  lg:     '0 10px 15px -3px rgb(26 26 26 / 0.06), 0 4px 6px -4px rgb(26 26 26 / 0.04)',
  xl:     '0 20px 25px -5px rgb(26 26 26 / 0.06), 0 8px 10px -6px rgb(26 26 26 / 0.04)',
  '2xl':  '0 25px 50px -12px rgb(26 26 26 / 0.12)',
  inner:  'inset 0 2px 4px 0 rgb(26 26 26 / 0.05)',
  /** Editorial card hover lift effect */
  card:   '0 8px 30px -4px rgb(26 26 26 / 0.08), 0 2px 6px -2px rgb(26 26 26 / 0.04)',
  /** Hero media overlay */
  overlay:'inset 0 0 0 1px rgb(250 250 247 / 0.12)',
} as const

export const borderRadius = {
  none: '0',
  xs:   '2px',
  sm:   '4px',
  md:   '6px',
  lg:   '8px',
  xl:   '12px',
  '2xl':'16px',
  '3xl':'24px',
  full: '9999px',
} as const

export type ShadowToken = typeof shadows
export type BorderRadiusToken = typeof borderRadius

/**
 * Dodie Thayer for Tory Burch — Animation Tokens
 */

export const animation = {
  duration: {
    instant:  '50ms',
    fast:     '150ms',
    normal:   '250ms',
    slow:     '400ms',
    slower:   '600ms',
    slowest:  '900ms',
  },
  easing: {
    linear:   'linear',
    easeIn:   'cubic-bezier(0.4, 0, 1, 1)',
    easeOut:  'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut:'cubic-bezier(0.4, 0, 0.2, 1)',
    /** Soft spring — for reveals and hover lifts */
    spring:   'cubic-bezier(0.34, 1.56, 0.64, 1)',
    /** Luxury editorial feel */
    editorial:'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
} as const

export type AnimationToken = typeof animation

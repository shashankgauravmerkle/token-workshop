export * from './colors'
export * from './typography'
export * from './spacing'
export * from './shadows'
export * from './animation'

/** Convenience re-export of all tokens as a single object */
import { colors }     from './colors'
import { typography } from './typography'
import { spacing }    from './spacing'
import { shadows, borderRadius } from './shadows'
import { animation }  from './animation'

export const tokens = {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  animation,
} as const

export type Tokens = typeof tokens

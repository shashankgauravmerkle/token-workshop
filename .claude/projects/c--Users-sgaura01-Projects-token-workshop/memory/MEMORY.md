# token-workshop — Project Memory

## Architecture
Turborepo monorepo. Dodie Thayer × Tory Burch design system.

**Apps:**
- `apps/web` — Next.js 15 app (port 3000) — `npm run dev` from root
- `apps/storybook` — Storybook 8 (port 6006) — `npm run storybook` from root

**Packages:**
- `packages/tokens` — Design tokens (colors, typography, spacing, shadows, animation)
- `packages/ui` — Atomic component library (atoms → molecules → organisms)
- `packages/tsconfig` — Shared TS configs
- `packages/eslint-config` — Shared ESLint

## Design Tokens
Palette: cream-200 (#F5F0E8), sage-400 (#8B9E7E), sage-600 (#4A6741), terracotta-400 (#C4714A), blush-300 (#E8C4B8), gold-500 (#B8965A), brand-black (#1A1A1A), brand-white (#FAFAF7)
Typography: Playfair Display (serif headings) + Inter (sans body)
Spacing: 8px grid, max-content 1440px

## Component Hierarchy (Atomic Design)
- **Atoms:** Button, Text, Badge, Tag, Link, Icon, Divider
- **Molecules:** ProductCard, NavigationItem, SearchBar, MediaCaption
- **Organisms:** Header, HeroBanner, ProductGrid, EditorialBlock, CollectionCarousel, Footer

## Key conventions
- All components use `cva` + `cn()` (clsx + tailwind-merge) for variant styling
- `React.forwardRef` on all components
- Stories live alongside components as `*.stories.tsx`
- Storybook autodocs enabled via `tags: ['autodocs']`
- Install: `npm install` from repo root (npm workspaces)

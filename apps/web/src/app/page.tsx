'use client'

import {
  Header,
  HeroBanner,
  EditorialBlock,
  CollectionCarousel,
  ProductGrid,
  Footer,
} from '@token-workshop/ui'
import type { ProductCardProps } from '@token-workshop/ui'
import { ArtistFeature }    from '@/components/sections/ArtistFeature'
import { BotanicalMoodBoard } from '@/components/sections/BotanicalMoodBoard'
import { CollabStats }      from '@/components/sections/CollabStats'

// ─── Placeholder imagery ────────────────────────────────────────────────────
const HERO        = 'https://via.placeholder.com/1440x900/4A6741/F5F0E8?text=Dodie+Thayer+x+Tory+Burch'
const EDIT_1      = 'https://via.placeholder.com/800x1066/8B9E7E/FAFAF7?text=Campaign+Image+1'
const EDIT_2      = 'https://via.placeholder.com/800x1066/E8C4B8/C4714A?text=Campaign+Image+2'
const DETAIL      = 'https://via.placeholder.com/300x300/C4714A/FAFAF7?text=Detail'
const PORTRAIT    = 'https://via.placeholder.com/700x900/EDE5D4/8B9E7E?text=Dodie+Thayer'
const GRID_HERO   = 'https://via.placeholder.com/1440x600/4A6741/F5F0E8?text=Shop+the+Collection'
const P           = 'https://via.placeholder.com/400x533/F5F0E8/8B9E7E?text=Product'
const P2          = 'https://via.placeholder.com/400x533/E8C4B8/C4714A?text=Hover'

// ─── Product data ───────────────────────────────────────────────────────────
const CAROUSEL_PRODUCTS: ProductCardProps[] = [
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Lettuce Leaf Vase',    name: 'Dodie Thayer Lettuce Leaf Ceramic Vase',    category: 'Home',         price: '$285.00', badge: 'new',       href: '/dodie-thayer/lettuce-leaf-vase' },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Salad Bowl',           name: 'Hand-Painted Salad Bowl Set',               category: 'Home',         price: '$320.00', badge: 'exclusive', href: '/dodie-thayer/salad-bowl',      colourCount: 2 },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Garden Tote',          name: 'Garden Party Canvas Tote',                  category: 'Bags',         price: '$350.00',                     href: '/dodie-thayer/garden-tote' },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Ceramic Planter',      name: 'Botanical Ceramic Planter',                 category: 'Home',         price: '$199.00', badge: 'sale', originalPrice: '$265.00', href: '/dodie-thayer/planter' },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Embroidered Clutch',   name: 'Dodie Thayer Embroidered Clutch',           category: 'Bags',         price: '$285.00', badge: 'new',       href: '/dodie-thayer/clutch',          colourCount: 3 },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Lettuce Leaf Earrings',name: 'Lettuce Leaf Drop Earrings',                category: 'Accessories',  price: '$165.00', badge: 'new',       href: '/dodie-thayer/earrings' },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Botanical Scarf',      name: 'Hand-Printed Botanical Silk Scarf',         category: 'Accessories',  price: '$210.00',                     href: '/dodie-thayer/scarf' },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Dinner Plate Set',     name: 'Ceramic Dinner Plate Set of 4',             category: 'Home',         price: '$485.00', soldOut: true, badge: 'soldOut', href: '/dodie-thayer/plates' },
]

const GRID_PRODUCTS: ProductCardProps[] = CAROUSEL_PRODUCTS.slice(0, 6)

// ─── Page ───────────────────────────────────────────────────────────────────
export default function DodieThaverPage() {
  return (
    <>
      {/* ── Navigation ─────────────────────────────────────────────────── */}
      <Header transparent bagCount={0} />

      <main>
        {/* ── 1. Hero ────────────────────────────────────────────────────
            Full-bleed campaign image with centred overlay text.
            Transparent header sits on top.
        ── */}
        <HeroBanner
          imageSrc={HERO}
          imageAlt="Dodie Thayer for Tory Burch — Spring Summer 2024 Campaign"
          eyebrow="Now Available"
          title="Dodie Thayer for Tory Burch"
          subtitle="A Botanical Collaboration"
          body="Hand-crafted ceramics and accessories inspired by the coastal gardens of East Hampton."
          ctaLabel="Shop the Collection"
          secondaryCtaLabel="View Lookbook"
          layout="centered-overlay"
          overlayOpacity={0.4}
          minHeight="100vh"
        />

        {/* ── 2. Collection Carousel ─────────────────────────────────────
            Horizontal scroll of all collaboration products.
        ── */}
        <CollectionCarousel
          eyebrow="The Collection"
          title="Shop Dodie Thayer"
          products={CAROUSEL_PRODUCTS}
          ctaLabel="View All"
          ctaHref="/dodie-thayer"
          visibleCards={4}
          className="py-20"
        />

        {/* ── 3. Editorial — The Story ───────────────────────────────────
            Split layout: image left, story text right.
        ── */}
        <EditorialBlock
          layout="text-right"
          background="white"
          eyebrow="The Story"
          title="Where Art Meets Craft"
          body="Dodie Thayer began painting her signature lettuce ware in the early 1970s from her studio in Martinez, California. Each piece is individually hand-sculpted and painted with layers of vibrant glaze — no two are ever alike."
          pullQuote="I wanted each piece to feel like it was grown, not made."
          pullQuoteAuthor="Dodie Thayer"
          ctaLabel="Read the Story"
          ctaHref="/dodie-thayer/story"
          imageSrc={EDIT_1}
          imageAlt="Dodie Thayer hand-painting a ceramic vase"
          detailImageSrc={DETAIL}
          detailImageAlt="Close-up of lettuce leaf glaze detail"
        />

        {/* ── 4. Artist Feature ─────────────────────────────────────────
            Full-width portrait with pull stats (bespoke section).
        ── */}
        <ArtistFeature
          imageSrc={PORTRAIT}
          imageAlt="Portrait of Dodie Thayer"
          name="Dodie Thayer"
          role="Ceramic Artist & Collaborator"
          quote="The lettuce leaf became my signature — it felt both playful and deeply serious at the same time."
          body="Born in California in the 1940s, Dodie Thayer has been creating her beloved lettuce ware for over five decades. Her work sits in collections from the Smithsonian to the homes of Jackie Kennedy and Bunny Mellon."
          ctaLabel="About the Artist"
          ctaHref="/dodie-thayer/story"
        />

        {/* ── 5. Botanical Mood Board ────────────────────────────────────
            3-column editorial image grid (bespoke section).
        ── */}
        <BotanicalMoodBoard
          images={[
            { src: 'https://via.placeholder.com/600x800/8B9E7E/FAFAF7?text=Garden', alt: 'Garden inspiration', caption: 'East Hampton Gardens' },
            { src: 'https://via.placeholder.com/600x400/E8C4B8/C4714A?text=Studio', alt: 'Studio', caption: 'The Studio, Martinez CA' },
            { src: 'https://via.placeholder.com/600x400/EDE5D4/4A6741?text=Detail', alt: 'Glaze detail', caption: 'Layers of colour' },
            { src: 'https://via.placeholder.com/600x800/C4714A/FAFAF7?text=Campaign', alt: 'Campaign shot', caption: 'Spring–Summer 2024' },
          ]}
        />

        {/* ── 6. Editorial — The Craft ──────────────────────────────────
            Split layout reversed: text left, image right.
        ── */}
        <EditorialBlock
          layout="text-left"
          background="sage"
          eyebrow="The Craft"
          title="Rooted in Handcraft"
          body="Every piece in the Dodie Thayer for Tory Burch collection begins as raw earthenware clay. The signature ruffled edges are formed by hand, each leaf pressed individually before being bisque-fired, glazed, and fired once more at high temperature."
          ctaLabel="Shop Ceramics"
          ctaHref="/dodie-thayer/ceramics"
          imageSrc={EDIT_2}
          imageAlt="Ceramics in the kiln"
        />

        {/* ── 7. Collab Stats ────────────────────────────────────────────
            Brand numbers bar (bespoke section).
        ── */}
        <CollabStats
          stats={[
            { value: '50+',   label: 'Years of Craft' },
            { value: '100%',  label: 'Handmade' },
            { value: '24',    label: 'Unique Pieces' },
            { value: '5',     label: 'Colourways' },
          ]}
        />

        {/* ── 8. Full Product Grid ──────────────────────────────────────
            Browseable product grid with filter controls.
        ── */}
        <section className="py-20">
          <ProductGrid
            title="Shop All"
            subtitle="Dodie Thayer for Tory Burch — Spring / Summer 2024"
            products={GRID_PRODUCTS}
            columns={3}
            totalCount={24}
            onLoadMore={() => console.log('load more')}
          />
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <Footer />
    </>
  )
}

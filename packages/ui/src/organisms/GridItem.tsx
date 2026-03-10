"use client";

import { ImageCarousel, CarouselImage } from "../molecules/ImageCarousel";
import { AddToCartCTA } from "../molecules/AddToCartCTA";
import { VariantSelector } from "../molecules/VariantSelector";
import { Title } from "../atoms/Title";
import { Price } from "../atoms/Price";
import styles from "./GridItem.module.css";

export interface GridItemProps {
  images: CarouselImage[];
  title: string;
  price: number;
  currency?: string;
  variants?: string[];
  selectedVariant?: string;
  onVariantChange?: (v: string) => void;
  onAddToCart?: () => void;
  addToCartLoading?: boolean;
  className?: string;
}

export const GridItem = ({
  images,
  title,
  price,
  currency,
  variants,
  selectedVariant,
  onVariantChange,
  onAddToCart,
  addToCartLoading,
  className = "",
}: GridItemProps) => (
  <article className={`${styles.card} ${className}`}>
    <ImageCarousel images={images} />
    <div className={styles.body}>
      <Title>{title}</Title>
      <Price amount={price} currency={currency} />
      {variants && variants.length > 0 && (
        <VariantSelector
          variants={variants}
          selected={selectedVariant}
          onChange={onVariantChange}
        />
      )}
      <AddToCartCTA onAdd={onAddToCart} loading={addToCartLoading} className={styles.cta} />
    </div>
  </article>
);

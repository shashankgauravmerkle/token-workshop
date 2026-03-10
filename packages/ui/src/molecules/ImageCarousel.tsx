"use client";

import { useState } from "react";
import styles from "./ImageCarousel.module.css";

export interface CarouselImage {
  src: string;
  alt: string;
}

export interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
}

export const ImageCarousel = ({ images, className = "" }: ImageCarouselProps) => {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className={`${styles.carousel} ${className}`}>
      <img className={styles.image} src={images[index]!.src} alt={images[index]!.alt} />
      {images.length > 1 && (
        <>
          <button className={`${styles.nav} ${styles.prev}`} onClick={prev} aria-label="Previous image">
            &#8249;
          </button>
          <button className={`${styles.nav} ${styles.next}`} onClick={next} aria-label="Next image">
            &#8250;
          </button>
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

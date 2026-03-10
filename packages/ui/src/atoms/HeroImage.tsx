"use client";

import styles from "./HeroImage.module.css";

export interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const HeroImage = ({ src, alt, className = "" }: HeroImageProps) => (
  <div className={`${styles.container} ${className}`}>
    <img className={styles.image} src={src} alt={alt} />
  </div>
);

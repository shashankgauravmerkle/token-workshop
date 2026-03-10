"use client";

import styles from "./TestimonialImage.module.css";

export interface TestimonialImageProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const TestimonialImage = ({ src, alt, size = "md", className = "" }: TestimonialImageProps) => (
  <div className={`${styles.container} ${styles[size]} ${className}`}>
    <img className={styles.image} src={src} alt={alt} />
  </div>
);

"use client";

import { TestimonialImage } from "../atoms/TestimonialImage";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import styles from "./Testimonial.module.css";

export interface TestimonialProps {
  imageSrc?: string;
  imageAlt?: string;
  quote: string;
  name: string;
  role?: string;
  className?: string;
}

export const Testimonial = ({
  imageSrc,
  imageAlt,
  quote,
  name,
  role,
  className = "",
}: TestimonialProps) => (
  <figure className={`${styles.testimonial} ${className}`}>
    <blockquote className={styles.blockquote}>
      <p className={styles.quote}>{quote}</p>
    </blockquote>
    <figcaption className={styles.author}>
      {imageSrc && <TestimonialImage src={imageSrc} alt={imageAlt ?? name} />}
      <div>
        <Title size="sm">{name}</Title>
        {role && <Subtitle>{role}</Subtitle>}
      </div>
    </figcaption>
  </figure>
);

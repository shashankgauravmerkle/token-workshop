"use client";

import { ReactNode } from "react";
import { HeroImage } from "../atoms/HeroImage";
import { Heading } from "../atoms/Heading";
import { Subtitle } from "../atoms/Subtitle";
import styles from "./Hero.module.css";

export interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export const Hero = ({ imageSrc, imageAlt, title, subtitle, children, className = "" }: HeroProps) => (
  <section className={`${styles.hero} ${className}`}>
    <HeroImage src={imageSrc} alt={imageAlt} className={styles.image} />
    <div className={styles.overlay}>
      <div className={styles.content}>
        <Heading level={1} className={styles.title}>
          {title}
        </Heading>
        {subtitle && <Subtitle className={styles.subtitle}>{subtitle}</Subtitle>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </div>
  </section>
);

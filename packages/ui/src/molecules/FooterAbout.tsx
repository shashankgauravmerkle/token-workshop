"use client";

import { ReactNode } from "react";
import styles from "./FooterAbout.module.css";

export interface FooterAboutProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  href?: string;
  className?: string;
}

export const FooterAbout = ({ icon, title, subtitle, href, className = "" }: FooterAboutProps) => (
  <div className={`${styles.container} ${className}`}>
    {icon && <div className={styles.icon}>{icon}</div>}
    <div>
      {href ? (
        <a href={href} className={styles.titleLink}>
          {title}
        </a>
      ) : (
        <span className={styles.title}>{title}</span>
      )}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  </div>
);

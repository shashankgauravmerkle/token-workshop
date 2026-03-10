"use client";

import styles from "./BreadcrumbItem.module.css";

export interface BreadcrumbItemProps {
  label: string;
  href?: string;
  isLast?: boolean;
  className?: string;
}

export const BreadcrumbItem = ({ label, href, isLast = false, className = "" }: BreadcrumbItemProps) => (
  <span className={`${styles.item} ${className}`}>
    {!isLast && href ? (
      <a href={href} className={styles.link}>
        {label}
      </a>
    ) : (
      <span className={`${styles.current} ${isLast ? styles.last : ""}`}>{label}</span>
    )}
    {!isLast && (
      <span className={styles.separator} aria-hidden>
        /
      </span>
    )}
  </span>
);

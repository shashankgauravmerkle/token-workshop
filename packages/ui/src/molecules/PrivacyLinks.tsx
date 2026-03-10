"use client";

import styles from "./PrivacyLinks.module.css";

export interface PrivacyLink {
  label: string;
  href: string;
}

export interface PrivacyLinksProps {
  links: PrivacyLink[];
  className?: string;
}

export const PrivacyLinks = ({ links, className = "" }: PrivacyLinksProps) => (
  <nav className={`${styles.nav} ${className}`} aria-label="Legal links">
    {links.map((link, i) => (
      <span key={link.href} className={styles.item}>
        <a href={link.href} className={styles.link}>
          {link.label}
        </a>
        {i < links.length - 1 && (
          <span className={styles.divider} aria-hidden>
            ·
          </span>
        )}
      </span>
    ))}
  </nav>
);

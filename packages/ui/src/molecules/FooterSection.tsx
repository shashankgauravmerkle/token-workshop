"use client";

import styles from "./FooterSection.module.css";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSectionProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

export const FooterSection = ({ title, links, className = "" }: FooterSectionProps) => (
  <div className={`${styles.section} ${className}`}>
    <h4 className={styles.title}>{title}</h4>
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} className={styles.link}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

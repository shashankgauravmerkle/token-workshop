"use client";

import { BreadcrumbItem } from "../molecules/BreadcrumbItem";
import styles from "./Breadcrumbs.module.css";

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbEntry[];
  className?: string;
}

export const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => (
  <nav className={`${styles.nav} ${className}`} aria-label="Breadcrumb">
    <ol className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <BreadcrumbItem label={item.label} href={item.href} isLast={i === items.length - 1} />
        </li>
      ))}
    </ol>
  </nav>
);

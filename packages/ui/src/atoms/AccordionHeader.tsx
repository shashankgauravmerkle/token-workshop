"use client";

import { ReactNode } from "react";
import styles from "./AccordionHeader.module.css";

export interface AccordionHeaderProps {
  children: ReactNode;
  expanded?: boolean;
  onClick?: () => void;
  className?: string;
}

export const AccordionHeader = ({ children, expanded = false, onClick, className = "" }: AccordionHeaderProps) => (
  <button
    className={`${styles.header} ${expanded ? styles.expanded : ""} ${className}`}
    onClick={onClick}
    aria-expanded={expanded}
  >
    <span className={styles.label}>{children}</span>
    <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </button>
);

"use client";

import { ReactNode } from "react";
import styles from "./AccordionValue.module.css";

export interface AccordionValueProps {
  children: ReactNode;
  expanded?: boolean;
  className?: string;
}

export const AccordionValue = ({ children, expanded = false, className = "" }: AccordionValueProps) => (
  <div
    className={`${styles.value} ${expanded ? styles.expanded : ""} ${className}`}
    aria-hidden={!expanded}
  >
    <div className={styles.inner}>{children}</div>
  </div>
);

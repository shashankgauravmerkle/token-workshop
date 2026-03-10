"use client";

import styles from "./CartButton.module.css";

export interface CartButtonProps {
  count?: number;
  onClick?: () => void;
  className?: string;
}

export const CartButton = ({ count, onClick, className = "" }: CartButtonProps) => (
  <button
    className={`${styles.button} ${className}`}
    onClick={onClick}
    aria-label={`Cart${count ? `, ${count} items` : ""}`}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
    {count !== undefined && count > 0 && <span className={styles.badge}>{count}</span>}
  </button>
);

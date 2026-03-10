"use client";

import styles from "./WishlistButton.module.css";

export interface WishlistButtonProps {
  count?: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const WishlistButton = ({ count, active = false, onClick, className = "" }: WishlistButtonProps) => (
  <button
    className={`${styles.button} ${active ? styles.active : ""} ${className}`}
    onClick={onClick}
    aria-label={`Wishlist${count ? `, ${count} items` : ""}`}
  >
    <svg viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
    {count !== undefined && count > 0 && <span className={styles.badge}>{count}</span>}
  </button>
);

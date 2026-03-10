"use client";

import styles from "./AddToCartCTA.module.css";

export interface AddToCartCTAProps {
  onAdd?: () => void;
  loading?: boolean;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export const AddToCartCTA = ({
  onAdd,
  loading = false,
  disabled = false,
  label = "Add to Cart",
  className = "",
}: AddToCartCTAProps) => (
  <button
    className={`${styles.button} ${loading ? styles.loading : ""} ${className}`}
    onClick={onAdd}
    disabled={disabled || loading}
  >
    {loading && <span className={styles.spinner} />}
    {loading ? "Adding…" : label}
  </button>
);

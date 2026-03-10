"use client";

import styles from "./VariantSelector.module.css";

export interface VariantSelectorProps {
  label?: string;
  variants: string[];
  selected?: string;
  onChange?: (variant: string) => void;
  className?: string;
}

export const VariantSelector = ({
  label,
  variants,
  selected,
  onChange,
  className = "",
}: VariantSelectorProps) => (
  <div className={`${styles.container} ${className}`}>
    {label && <span className={styles.label}>{label}</span>}
    <div className={styles.options}>
      {variants.map((v) => (
        <button
          key={v}
          className={`${styles.option} ${selected === v ? styles.selected : ""}`}
          onClick={() => onChange?.(v)}
        >
          {v}
        </button>
      ))}
    </div>
  </div>
);

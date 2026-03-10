"use client";

import styles from "./ActionFilter.module.css";

export interface ActionFilterProps {
  filters: string[];
  active?: string[];
  onChange?: (filter: string) => void;
  className?: string;
}

export const ActionFilter = ({ filters, active = [], onChange, className = "" }: ActionFilterProps) => (
  <div className={`${styles.container} ${className}`} role="group" aria-label="Filters">
    {filters.map((f) => (
      <button
        key={f}
        className={`${styles.chip} ${active.includes(f) ? styles.activeChip : ""}`}
        onClick={() => onChange?.(f)}
        aria-pressed={active.includes(f)}
      >
        {f}
      </button>
    ))}
  </div>
);

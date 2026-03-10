"use client";

import styles from "./ActionSort.module.css";

export interface ActionSortProps {
  options: string[];
  selected?: string;
  onChange?: (option: string) => void;
  className?: string;
}

export const ActionSort = ({ options, selected, onChange, className = "" }: ActionSortProps) => (
  <div className={`${styles.container} ${className}`}>
    <label className={styles.label} htmlFor="sort-select">
      Sort by
    </label>
    <select
      id="sort-select"
      className={styles.select}
      value={selected}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

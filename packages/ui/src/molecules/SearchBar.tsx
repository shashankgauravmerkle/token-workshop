"use client";

import { FormEvent } from "react";
import styles from "./SearchBar.module.css";

export interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({
  value = "",
  onChange,
  onSubmit,
  placeholder = "Search…",
  className = "",
}: SearchBarProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit} role="search">
      <input
        className={styles.input}
        type="search"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />
      <button className={styles.button} type="submit" aria-label="Submit search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </form>
  );
};

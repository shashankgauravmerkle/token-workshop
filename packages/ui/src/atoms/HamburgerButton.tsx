"use client";

import styles from "./HamburgerButton.module.css";

export interface HamburgerButtonProps {
  open?: boolean;
  onClick?: () => void;
  className?: string;
}

export const HamburgerButton = ({ open = false, onClick, className = "" }: HamburgerButtonProps) => (
  <button
    className={`${styles.hamburger} ${open ? styles.open : ""} ${className}`}
    onClick={onClick}
    aria-label={open ? "Close menu" : "Open menu"}
    aria-expanded={open}
  >
    <span className={styles.line} />
    <span className={styles.line} />
    <span className={styles.line} />
  </button>
);

"use client";

import styles from "./UserButton.module.css";

export interface UserButtonProps {
  avatarSrc?: string;
  name?: string;
  onClick?: () => void;
  className?: string;
}

export const UserButton = ({ avatarSrc, name, onClick, className = "" }: UserButtonProps) => (
  <button
    className={`${styles.button} ${className}`}
    onClick={onClick}
    aria-label={name ? `User: ${name}` : "User account"}
  >
    {avatarSrc ? (
      <img className={styles.avatar} src={avatarSrc} alt={name ?? "User"} />
    ) : (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )}
  </button>
);

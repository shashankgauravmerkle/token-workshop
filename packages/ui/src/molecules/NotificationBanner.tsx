"use client";

import styles from "./NotificationBanner.module.css";

export interface NotificationBannerProps {
  message: string;
  href?: string;
  onDismiss?: () => void;
  className?: string;
}

export const NotificationBanner = ({
  message,
  href,
  onDismiss,
  className = "",
}: NotificationBannerProps) => (
  <div className={`${styles.banner} ${className}`} role="banner">
    <div className={styles.content}>
      {href ? (
        <a href={href} className={styles.link}>
          {message}
        </a>
      ) : (
        <span className={styles.message}>{message}</span>
      )}
    </div>
    {onDismiss && (
      <button className={styles.dismiss} onClick={onDismiss} aria-label="Dismiss notification">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    )}
  </div>
);

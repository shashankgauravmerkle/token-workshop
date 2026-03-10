"use client";

import { NotificationBanner } from "../molecules/NotificationBanner";
import styles from "./DiscountFloater.module.css";

export interface DiscountFloaterProps {
  message: string;
  href?: string;
  onDismiss?: () => void;
  visible?: boolean;
  position?: "top" | "bottom";
  className?: string;
}

export const DiscountFloater = ({
  message,
  href,
  onDismiss,
  visible = true,
  position = "bottom",
  className = "",
}: DiscountFloaterProps) => {
  if (!visible) return null;

  return (
    <div className={`${styles.floater} ${styles[position]} ${className}`}>
      <NotificationBanner message={message} href={href} onDismiss={onDismiss} />
    </div>
  );
};

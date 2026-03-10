"use client";

import styles from "./Price.module.css";

export interface PriceProps {
  amount: number;
  currency?: string;
  className?: string;
}

export const Price = ({ amount, currency = "USD", className = "" }: PriceProps) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);

  return <span className={`${styles.price} ${className}`}>{formatted}</span>;
};

"use client";

import { ReactNode } from "react";
import styles from "./Icon.module.css";

export interface IconProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

export const Icon = ({ children, size = "md", label, className = "" }: IconProps) => (
  <span
    className={`${styles.icon} ${styles[size]} ${className}`}
    aria-label={label}
    role={label ? "img" : "presentation"}
  >
    {children}
  </span>
);

"use client";

import { ReactNode } from "react";
import styles from "./Title.module.css";

export interface TitleProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Title = ({ children, size = "md", className = "" }: TitleProps) => (
  <p className={`${styles.title} ${styles[size]} ${className}`}>{children}</p>
);

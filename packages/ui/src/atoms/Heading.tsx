"use client";

import { ReactNode } from "react";
import styles from "./Heading.module.css";

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export const Heading = ({ level = 2, children, className = "" }: HeadingProps) => {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  return (
    <Tag className={`${styles.heading} ${styles[`h${level}`]} ${className}`}>
      {children}
    </Tag>
  );
};

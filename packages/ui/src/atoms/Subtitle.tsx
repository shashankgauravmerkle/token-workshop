"use client";

import { ReactNode } from "react";
import styles from "./Subtitle.module.css";

export interface SubtitleProps {
  children: ReactNode;
  className?: string;
}

export const Subtitle = ({ children, className = "" }: SubtitleProps) => (
  <p className={`${styles.subtitle} ${className}`}>{children}</p>
);

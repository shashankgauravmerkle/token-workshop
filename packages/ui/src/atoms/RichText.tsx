"use client";

import styles from "./RichText.module.css";

export interface RichTextProps {
  html: string;
  className?: string;
}

export const RichText = ({ html, className = "" }: RichTextProps) => (
  <div
    className={`${styles.richText} ${className}`}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

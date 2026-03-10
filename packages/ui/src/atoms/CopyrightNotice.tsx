"use client";

import styles from "./CopyrightNotice.module.css";

export interface CopyrightNoticeProps {
  company: string;
  year?: number;
  className?: string;
}

export const CopyrightNotice = ({
  company,
  year = new Date().getFullYear(),
  className = "",
}: CopyrightNoticeProps) => (
  <span className={`${styles.notice} ${className}`}>
    &copy; {year} {company}. All rights reserved.
  </span>
);

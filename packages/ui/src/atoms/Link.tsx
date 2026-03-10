"use client";

import { ReactNode } from "react";
import styles from "./Link.module.css";

export interface LinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

export const Link = ({ href, children, external = false, className = "" }: LinkProps) => (
  <a
    href={href}
    className={`${styles.link} ${className}`}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
  >
    {children}
  </a>
);

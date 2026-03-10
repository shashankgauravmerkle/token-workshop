"use client";

import { Accordion } from "../molecules/Accordion";
import styles from "./CollectionDetail.module.css";

export interface CollectionDetailItem {
  header: string;
  value: string;
}

export interface CollectionDetailProps {
  items: CollectionDetailItem[];
  className?: string;
}

export const CollectionDetail = ({ items, className = "" }: CollectionDetailProps) => (
  <section className={`${styles.section} ${className}`}>
    {items.map((item, i) => (
      <Accordion key={i} header={item.header}>
        {item.value}
      </Accordion>
    ))}
  </section>
);

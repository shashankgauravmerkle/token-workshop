"use client";

import { ReactNode, useState } from "react";
import { AccordionHeader } from "../atoms/AccordionHeader";
import { AccordionValue } from "../atoms/AccordionValue";
import styles from "./Accordion.module.css";

export interface AccordionProps {
  header: ReactNode;
  children: ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export const Accordion = ({
  header,
  children,
  defaultExpanded = false,
  className = "",
}: AccordionProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className={`${styles.accordion} ${className}`}>
      <AccordionHeader expanded={expanded} onClick={() => setExpanded((e) => !e)}>
        {header}
      </AccordionHeader>
      <AccordionValue expanded={expanded}>{children}</AccordionValue>
    </div>
  );
};

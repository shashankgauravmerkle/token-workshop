"use client";

import { FooterAbout, FooterAboutProps } from "../molecules/FooterAbout";
import { FooterSection, FooterSectionProps } from "../molecules/FooterSection";
import { PrivacyLinks, PrivacyLink } from "../molecules/PrivacyLinks";
import { CopyrightNotice } from "../atoms/CopyrightNotice";
import styles from "./Footer.module.css";

export interface FooterProps {
  about: FooterAboutProps;
  sections?: FooterSectionProps[];
  privacyLinks?: PrivacyLink[];
  company: string;
  className?: string;
}

export const Footer = ({
  about,
  sections = [],
  privacyLinks = [],
  company,
  className = "",
}: FooterProps) => (
  <footer className={`${styles.footer} ${className}`}>
    <div className={styles.top}>
      <FooterAbout {...about} className={styles.about} />
      {sections.length > 0 && (
        <div className={styles.sections}>
          {sections.map((section, i) => (
            <FooterSection key={i} {...section} />
          ))}
        </div>
      )}
    </div>
    <div className={styles.bottom}>
      <CopyrightNotice company={company} />
      {privacyLinks.length > 0 && <PrivacyLinks links={privacyLinks} />}
    </div>
  </footer>
);

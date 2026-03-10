"use client";

import { ReactNode } from "react";
import { HamburgerButton } from "../atoms/HamburgerButton";
import { WishlistButton } from "../atoms/WishlistButton";
import { CartButton } from "../atoms/CartButton";
import { UserButton } from "../atoms/UserButton";
import { SearchBar } from "../molecules/SearchBar";
import styles from "./Header.module.css";

export interface HeaderProps {
  logo?: ReactNode;
  menuOpen?: boolean;
  onMenuToggle?: () => void;
  searchValue?: string;
  onSearchChange?: (v: string) => void;
  onSearchSubmit?: (v: string) => void;
  cartCount?: number;
  wishlistCount?: number;
  wishlistActive?: boolean;
  onCartClick?: () => void;
  onWishlistClick?: () => void;
  onUserClick?: () => void;
  className?: string;
}

export const Header = ({
  logo,
  menuOpen = false,
  onMenuToggle,
  searchValue = "",
  onSearchChange,
  onSearchSubmit,
  cartCount,
  wishlistCount,
  wishlistActive,
  onCartClick,
  onWishlistClick,
  onUserClick,
  className = "",
}: HeaderProps) => (
  <header className={`${styles.header} ${className}`}>
    <div className={styles.left}>
      <HamburgerButton open={menuOpen} onClick={onMenuToggle} />
      {logo && <div className={styles.logo}>{logo}</div>}
    </div>
    <div className={styles.center}>
      <SearchBar
        value={searchValue}
        onChange={onSearchChange}
        onSubmit={onSearchSubmit}
        placeholder="Search products…"
      />
    </div>
    <div className={styles.right}>
      <UserButton onClick={onUserClick} />
      <WishlistButton count={wishlistCount} active={wishlistActive} onClick={onWishlistClick} />
      <CartButton count={cartCount} onClick={onCartClick} />
    </div>
  </header>
);

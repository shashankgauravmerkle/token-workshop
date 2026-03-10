"use client";

import { ActionFilter } from "../molecules/ActionFilter";
import { ActionSort } from "../molecules/ActionSort";
import { GridItem, GridItemProps } from "./GridItem";
import styles from "./ProductGrid.module.css";

export interface ProductGridProps {
  items: GridItemProps[];
  filters?: string[];
  activeFilters?: string[];
  onFilterChange?: (filter: string) => void;
  sortOptions?: string[];
  selectedSort?: string;
  onSortChange?: (option: string) => void;
  className?: string;
}

export const ProductGrid = ({
  items,
  filters = [],
  activeFilters,
  onFilterChange,
  sortOptions = [],
  selectedSort,
  onSortChange,
  className = "",
}: ProductGridProps) => (
  <section className={`${styles.section} ${className}`}>
    {(filters.length > 0 || sortOptions.length > 0) && (
      <div className={styles.toolbar}>
        {filters.length > 0 && (
          <ActionFilter filters={filters} active={activeFilters} onChange={onFilterChange} />
        )}
        {sortOptions.length > 0 && (
          <ActionSort
            options={sortOptions}
            selected={selectedSort}
            onChange={onSortChange}
            className={styles.sort}
          />
        )}
      </div>
    )}
    <div className={styles.grid}>
      {items.map((item, i) => (
        <GridItem key={i} {...item} />
      ))}
    </div>
  </section>
);

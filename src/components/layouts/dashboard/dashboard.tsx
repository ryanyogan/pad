"use client";

import { DashboardHeader, DashboardSidebar } from "@/components/dashboard";
import { Group } from "@/types";
import clsx from "clsx";
import { ComponentProps, useCallback, useState } from "react";
import styles from "./dashboard.module.css";

export function DashboardLayout({
  children,
  groups,
  className,
  ...props
}: ComponentProps<"div"> & {
  groups: Group[];
}) {
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  let handleMenuClick = useCallback(() => {
    setIsMenuOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className={clsx(className, styles.container)} {...props}>
      <header className={styles.header}>
        <DashboardHeader isOpen={isMenuOpen} onMenuClick={handleMenuClick} />
      </header>
      <aside className={styles.aside} data-open={isMenuOpen || undefined}>
        <DashboardSidebar groups={groups} />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

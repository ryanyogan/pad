import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./marketing.module.css";

export function MarketingLayout({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={clsx(className, styles.layout)} {...props}>
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter className={styles.footer} />
    </div>
  );
}

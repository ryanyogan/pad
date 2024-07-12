import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./skeleton.module.css";

export function Skeleton({ className, ...props }: ComponentProps<"span">) {
  return <span className={clsx(className, styles.skeleton)} {...props} />;
}

import { GitHubIcon } from "@/icons";
import clsx from "clsx";
import { ComponentProps, useMemo } from "react";
import { LinkButton } from "../ui/button";
import { Container } from "../ui/container";
import styles from "./marketing-footer.module.css";

export function MarketingFooter({
  className,
  ...props
}: ComponentProps<"footer">) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={clsx(className, styles.footer)} {...props}>
      <Container className={styles.container}>
        <span className={styles.copyright}>© {year} Yogan.dev</span>
        <LinkButton
          href="https://github.com/ryanyogan/pad"
          icon={<GitHubIcon />}
          target="_blank"
          variant="secondary"
        >
          View on GitHub
        </LinkButton>
      </Container>
    </footer>
  );
}

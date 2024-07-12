import { SignInIcon } from "@/icons";
import { signIn } from "@/lib/auth";
import clsx from "clsx";
import Link from "next/link";
import { ComponentProps } from "react";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import styles from "./marketing-header.module.css";

export function MarketingHeader({
  className,
  ...props
}: ComponentProps<"header">) {
  return (
    <header className={clsx(className, styles.header)} {...props}>
      <Container className={styles.container}>
        <Link href="/">
          <Logo />
        </Link>
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <Button icon={<SignInIcon />}>Sign in</Button>
        </form>
      </Container>
    </header>
  );
}

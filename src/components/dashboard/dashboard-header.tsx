import { CrossIcon, MenuIcon, SignOutIcon } from "@/icons";
import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { ComponentProps, MouseEventHandler } from "react";
import { Logo } from "../logo";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover } from "../ui/popover";
import styles from "./dashboard-header.module.css";

interface Props extends ComponentProps<"header"> {
  isOpen: boolean;
  onMenuClick: MouseEventHandler<HTMLButtonElement>;
}

export function DashboardHeader({
  isOpen,
  onMenuClick,
  className,
  ...props
}: Props) {
  const { data: session } = useSession();

  return (
    <header className={clsx(className, styles.header)} {...props}>
      <div className={styles.menu}>
        <button className={styles.menuToggle} onClick={onMenuClick}>
          {isOpen ? <CrossIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Logo />
        </Link>
      </div>
      <div className={styles.profile}>
        {session && (
          <Popover
            align="end"
            alignOffset={-6}
            content={
              <div className={styles.profilePopover}>
                <div className={styles.profilePopoverInfo}>
                  <span className={styles.profilePopoverName}>
                    {session.user.info.name}
                  </span>
                  <span className={styles.profilePopoverId}>
                    {session.user.info.id}
                  </span>
                </div>
                <div className={styles.profilePopoverActions}>
                  <Button
                    className={styles.profilePopoverButton}
                    icon={<SignOutIcon />}
                    onClick={() => signOut()}
                  >
                    Sign out
                  </Button>
                </div>
              </div>
            }
            side="bottom"
            sideOffset={6}
          >
            <button className={styles.profileButton}>
              <Avatar
                className={styles.profileAvatar}
                name={session.user.info.name}
                size={32}
                src={session.user.info.avatar}
              />
            </button>
          </Popover>
        )}
      </div>
    </header>
  );
}

"use client";

import { Select } from "@/components/ui/select/select";
import { users } from "@/data/users";
import { signIn } from "next-auth/react";
import styles from "./signin.module.css";

export function DemoLogin() {
  return (
    <div className={styles.actions}>
      <Select
        items={users.map((user) => ({ value: user.id, title: user.name }))}
        onChange={(email) => {
          signIn("credentials", { email });
        }}
        placeholder="Choose a user"
      />
    </div>
  );
}

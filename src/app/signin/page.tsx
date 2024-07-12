import { DASHBOARD_URL } from "@/constants";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { DemoLogin } from "./demo-login";
import styles from "./signin.module.css";

export default async function SignInPage() {
  let session = await auth();

  if (session) {
    redirect(DASHBOARD_URL);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>Sign in to your account</h2>
        <DemoLogin />
      </main>
      <aside className={styles.aside} />
    </div>
  );
}

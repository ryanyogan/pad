import { MarketingLayout } from "@/components/layouts/marketing/marketing";
import { Button, LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SignInIcon } from "@/icons";
import { auth, signIn } from "@/lib/auth";
import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";
import styles from "./page.module.css";

function Feature({
  description,
  title,
  className,
  ...props
}: Omit<ComponentProps<"div">, "title"> & {
  description: ReactNode;
  title: ReactNode;
}) {
  return (
    <div className={clsx(className, styles.featuresFeature)} {...props}>
      <h4 className={styles.featuresFeatureTitle}>{title}</h4>
      <p className={styles.featuresFeatureDescription}>{description}</p>
    </div>
  );
}

export default async function Home() {
  let session = await auth();

  return (
    <MarketingLayout>
      <Container className={styles.section}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>Kickstart working together</h1>
          <p className={styles.heroLead}>
            This is an example using live blocks and yjs, can you tell I am
            bored Yordis? 🤣
          </p>
        </div>
        <div className={styles.heroActions}>
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <Button icon={<SignInIcon />}>Sign in</Button>
          </form>
          <LinkButton
            href="https://ryanyogan.com"
            target="_blank"
            variant="secondary"
          >
            Learn more
          </LinkButton>
        </div>
      </Container>
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <div className={styles.featuresGrid}>
          <Feature
            description={
              <>
                A collaborative whiteboard app with included share menu,
                documents listing, users, groups, permissions, and more.
              </>
            }
            title="Live Blocks"
          />
          <Feature
            description={
              <>
                Best practices followed, using a mixture of SSR and custom API
                endpoints. Modify documents from both client and server.
              </>
            }
            title="Next.js"
          />
          <Feature
            description={
              <>
                Clean and simple, good old fashioned CSS. No frameworks, no
                extra sauce.
              </>
            }
            title="User Interface"
          />
          <Feature
            description={
              <>
                All custom client and server functions are fully typed, and easy
                to update.
              </>
            }
            title="TypeScript"
          />
          <Feature
            description={
              <>
                Complete authentication, compatible with any NextAuth provider,
                including GitHub, Google, Auth0, and many more.
              </>
            }
            title="NextAuth.js"
          />
          <Feature
            description={
              <>
                See data update live using the SWR (state-while-revalidate)
                library.
              </>
            }
            title="SWR"
          />
        </div>
      </Container>
    </MarketingLayout>
  );
}

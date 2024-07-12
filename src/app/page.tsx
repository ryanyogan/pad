import { MarketingLayout } from "@/components/layouts/marketing/marketing";
import { Container } from "@/components/ui/container";
import { auth } from "@/lib/auth";
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
        <div>
          <h1>Kickstart working together</h1>
        </div>
      </Container>
    </MarketingLayout>
  );
}

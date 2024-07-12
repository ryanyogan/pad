import { DashboardLayout } from "@/components/layouts/dashboard/dashboard";
import { auth } from "@/lib/auth";
import { Group } from "@/types";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Dashboard({ children }: { children: ReactNode }) {
  let session = await auth();
  let groups: Group[] = [];

  if (!session) {
    redirect("/");
  }

  return <DashboardLayout groups={groups}>{children}</DashboardLayout>;
}

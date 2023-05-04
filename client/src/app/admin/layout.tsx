import { authOptions } from "@lib/auth";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import DoctorWraper from "./AdminWraper";
interface LayoutProps {
  children: ReactNode
}
export const metadata = {
  title: "Doctor Dashboard",
};
const Layout = async ({ children }: LayoutProps) => {
  const session = await getServerSession(authOptions)
  // console.log(session)
  if (!session) notFound()
  return (
    <DoctorWraper>
      {children}
    </DoctorWraper>
  );
}
export default Layout
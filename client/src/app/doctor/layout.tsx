import { authOptions } from "@lib/auth";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import DoctorWraper from "./DoctorWraper";

export const metadata = {
  title: "Doctor Dashboard",
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions)
  if (session?.role !== 'Doctor') {
    notFound()
  }
  return (
    <DoctorWraper>
      {children}
    </DoctorWraper>
  );
}

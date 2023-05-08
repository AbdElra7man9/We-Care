import Footer from "@Components/app/Footer";
import Header from "@Components/app/Header";
import { authOptions } from "@lib/auth";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import ProfileWraper from "./ProfileWraper";

export const metadata = {
  title: "Profile",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  // const doctor = session?.role === 'Doctor'
  // if (!session || !doctor) {
  //   return notFound()
  // }
  return (
    <>
      <Header isFull={false} />
      <ProfileWraper>
        {children}
      </ProfileWraper>
      <Footer />
    </>
  )
}

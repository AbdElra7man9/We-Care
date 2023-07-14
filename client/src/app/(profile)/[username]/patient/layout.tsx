import Footer from "@Components/app/Footer";
import Header from "@Components/app/Header";
import Chat from "@Components/GPT3.5/Chat";
import { authOptions } from "@lib/auth";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import ProfileWraper from "./ProfileWraper";

export const metadata = {
  title: "Profile",
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const patient = session?.role === 'Patient'
  if (!session || !patient) {
    return notFound()
  }
  return (
    <>
      <Header isFull={false} />
      <Chat />
      <ProfileWraper>
        {children}
      </ProfileWraper>
      <Footer />
    </>
  )
}

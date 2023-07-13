import { authOptions } from "@lib/auth";
import Footer from "./Footer";
import SidePatient from "./overflow/SideBar";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Patient Dashboard",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions)
  if (session?.role !== 'Patient') {
    notFound()
  }
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-7 container max-w-[140rem] px-5'>
        <div className='mt-20 lg:col-span-2 xxl:col-span-1'>
          <SidePatient />
        </div>
        <div className='w-full lg:col-span-2 xxl:col-span-3'>
          <div className='pt-24'>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

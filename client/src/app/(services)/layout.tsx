import Footer from "@Components/app/Footer";
import Header from "@Components/app/Header";

export const metadata = {
  title: "Helth Care",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-16 bg-[#F8F9FA] dark:bg-[#1E293B]">
        <Header isFull={false} />
      </div>
        {children}
      <Footer />
    </>
  );
}

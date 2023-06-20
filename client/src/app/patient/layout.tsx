import Footer from "@Components/app/Footer";
import Header from "@Components/app/Header";

export const metadata = {
  title: "Doctor Dashboard",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header isFull={true} />
      {children}
      <Footer />
    </>
  );
}

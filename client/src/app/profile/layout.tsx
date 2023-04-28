import Footer from "@Components/app/Footer";
import Header from "@Components/app/Header";
import ProfileWraper from "./ProfileWraper";

export const metadata = {
  title: "Profile",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileWraper>
      <Header isFull={false} />
      {children}
      <Footer />
    </ProfileWraper>);
}

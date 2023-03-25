import MainBookingWrapper from "./MainBookingWrapper";

export const metadata = {
  title: "Make appointment",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainBookingWrapper>
      {children}
    </MainBookingWrapper>;
}

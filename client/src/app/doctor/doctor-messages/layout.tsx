import HandleGridView from "./HandleGridView";

export const metadata = {
  title: "Make appointment",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HandleGridView>
      {children}
  </HandleGridView>;
}

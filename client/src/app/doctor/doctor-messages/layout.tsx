import ChatWrapper from "./ChatWrapper";

export const metadata = {
  title: "Make appointment",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChatWrapper>
      {children}
    </ChatWrapper>
  );
}

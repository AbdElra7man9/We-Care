import ChatWrapper from "./ChatWrapper";

export const metadata = {
  title: "Make appointment",
};
export default function RootLayout({
  children, params,
}: {
    children: React.ReactNode; params: {
      foo: string;
    };
}) {
  params.foo = "bar"; 
  return (
    <ChatWrapper>
      {children}
    </ChatWrapper>
  );
}

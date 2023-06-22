import "@styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "@app/Providers";
import { siteConfig } from "@config/site";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Helth",
    "Doctor",
    "Sick",
  ],
  authors: [
    {
      name: "AbdElrahman Shaban",
      url: "https://health-care-red.vercel.app/",
    },
  ],
  creator: "Abdelrahman",
  icons: {
    icon: siteConfig.ogImage,
  },
}
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-whit text-slate-900 antialiased ${inter.className}`}
    >
      <body className="dark:bg-slate-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

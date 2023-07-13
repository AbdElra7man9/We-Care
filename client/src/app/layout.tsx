import "@styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "@app/Providers";
import { siteConfig } from "@config/site";
import RefreshProvider from "./RefreshProvider";
import { Toaster } from "react-hot-toast";

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
      className={`bg-white text-slate-900 antialiased ${inter.className}`}
    >
      <body className="dark:bg-slate-900">
        <Providers>
          <RefreshProvider>
            <div className=" dark:text-gray-500 text-gray-700 transition-colors duration-300 min-h-screen">
              <Toaster position='bottom-center' reverseOrder={false} />
              {children}
            </div>
          </RefreshProvider>
        </Providers>
      </body>
    </html>
  );
}

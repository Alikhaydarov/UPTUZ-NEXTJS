import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { HydrationContext, Client, HydrationProvider } from "react-hydration-provider";
import Provider from "./provider";// import { Providers} from "./providers";
import Header from "@/components/header";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UPT-UZ",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  }
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale} className={inter.className}>
      <body className="dark:bg-gray-900">
        <HydrationProvider>
          <Client>
            <ThemeProvider defaultTheme="system" attribute="class">
              <Header/>
              {children}
            </ThemeProvider>
          </Client>
        </HydrationProvider>
      </body>
    </html>
  );
}

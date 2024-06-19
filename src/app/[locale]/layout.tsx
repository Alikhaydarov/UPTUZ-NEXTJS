import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { HydrationContext, Client, HydrationProvider } from "react-hydration-provider";
import Provider from "./provider";// import { Providers} from "./providers";
// import Header from "@/components/header";
import Hero from "@/components/hero";
import { NextIntlClientProvider, useMessages } from 'next-intl';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UPT-UZ",
  description: "Maqsadimiz har doim sifat",
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
  
  const messages = useMessages()

  return (
    <html lang={locale} className={inter.className}>
      <body className="dark:bg-gray-900">
        <ThemeProvider defaultTheme="system" attribute="class">
          <HydrationProvider>
            <Client>
              <NextIntlClientProvider locale={locale} messages={messages}>
                {/* <Header /> */}
                {children}
              </NextIntlClientProvider >
            </Client>
          </HydrationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

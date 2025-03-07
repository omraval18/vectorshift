import type { Metadata } from "next";
import { Inter,Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const gambarino = localFont({ src: "./Gambarino-Regular.woff2", variable: "--font-gambarino" });


const inter = Inter({ subsets: ["latin"],variable: "--font-inter" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], display: "swap",variable: "--font-bricolage" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={cn(inter.className,GeistSans.variable,gambarino.variable,bricolage.variable)}>
              <ThemeProvider
                  attribute="class"
                  defaultTheme="dark"
                  enableSystem
                  disableTransitionOnChange
        >
                  {children}
              </ThemeProvider>
          </body>
      </html>
  );
}

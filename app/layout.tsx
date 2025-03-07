import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/auth";
import AuthButtons from "@/components/auth-buttons";
import { HomeIcon } from "lucide-react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <body className={`${poppins.className}  antialiased`}>
        <AuthProvider>
          <nav className="bg-sky-950 text-white p-5 h-24 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-3xl tracking-widest gap-2 uppercase"
            >
              <HomeIcon />

              <span>Fire Homes</span>
            </Link>
            <ul className="items-center flex gap-6">
              <li>
                <Link
                  href="/properties-search"
                  className="uppercase tracking-widest hover:underline"
                >
                  Property Search
                </Link>
              </li>
              <li>
                <AuthButtons></AuthButtons>
              </li>
            </ul>
          </nav>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

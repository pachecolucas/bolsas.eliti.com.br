import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ELITI - Questionário Sócio-econômico",
  description: "Verique que tipo de bolsa você pode ganhar na ELITI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-[#F9FAFC]`}>{children}</body>
    </html>
  );
}

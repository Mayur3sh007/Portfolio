import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayuresh Portfolio",
  description: "Mayuresh's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="h-full w-full bg-neutral-950 relative flex flex-col antialiased">

      <BackgroundBeams className="max-h-full w-full " />

        {children}

      </div>
      </body>
    </html>
  );
}

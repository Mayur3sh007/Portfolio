import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="relative min-h-screen w-full bg-neutral-950 flex flex-col antialiased">
          <BackgroundBeams />
          <div className="relative z-10 flex-grow">
            {children}
          </div>
          <Toaster
            position="bottom-left"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: '#5A72A0',
                color: '#FDFFE2',
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}
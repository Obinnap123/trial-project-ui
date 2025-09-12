import type { Metadata } from "next";
import "./globals.css";

import TopBar from "../components/layout/TopBar";
import { MobileMenuProvider } from "@/context/MobileMenuContext";

export const metadata: Metadata = {
  title: "Trial Project",
  description: "Dashboard UI test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <MobileMenuProvider>
          <div className="flex flex-col h-screen lg:p-4 space-y-[10px]">
            <div className="bg-white lg:rounded-[30px]">
              <TopBar />
            </div>
            <div className="flex-1 min-h-0 overflow-auto">
              {children}
            </div>
          </div>
        </MobileMenuProvider>
      </body>
    </html>
  );
}

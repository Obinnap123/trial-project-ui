import type { Metadata } from "next";
import "./globals.css";
import "../styles/scrollbar-hide.css";
import TopBar from "../components/layout/TopBar";

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
        <div className="flex flex-col min-h-screen p-4 space-y-[10px]">
          {/* Top bar in its own white container */}
          <div className="bg-white rounded-[30px]">
            <TopBar />
          </div>
          
          {/* Dashboard content container */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

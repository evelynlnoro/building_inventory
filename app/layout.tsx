import "./globals.css";
import { Inter } from "next/font/google";

import NavBar from "@/app/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Building Inventory",
  description: "Inventory management for better building projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        <div className="mt-20">{children}</div>
      </body>
    </html>
  );
}

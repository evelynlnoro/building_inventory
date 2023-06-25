import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

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
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={`${inter.className}`}>
          <NavBar />
          <div className="mt-20 flex items-center">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}

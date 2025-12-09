import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageWidget from "@/components/LanguageWidget";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Don Esteban Gourmet - Charcutería Europea",
  description: "Sabores de Europa, España y el mundo. Embutidos, quesos y productos seleccionados para compartir, regalar y disfrutar como en el viejo continente.",
  keywords: ["charcutería", "embutidos", "jamones", "quesos", "productos gourmet", "delicatessen"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <LanguageWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}

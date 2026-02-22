import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google"; // Capitalized correctly
import "./globals.css";

// Properly initialize fonts
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  title: "Dinusha | Portfolio",
  description: "Creative Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${ovo.variable} font-outfit antialiased leading-6 overflow-x-hidden dark:bg-darkTheme dark:text-white transition-colors duration-500`}>
        {children}
      </body>
    </html>
  );
}

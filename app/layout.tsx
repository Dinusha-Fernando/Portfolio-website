import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google"; // Capitalized correctly
import "./globals.css";

// Properly initialize fonts
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dinusha's Portfolio",
  description: "Welcome to my portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth  ">
      <body className={`${outfit.className} ${ovo.className}
       antialiased leading-6 overflow-x-hidden dark:bg-darkTheme
       dark:text-white`}>
        {children}
      </body>
    </html>
  );
}

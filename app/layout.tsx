import type { Metadata } from "next";
import { Outfit, Space_Grotesk, JetBrains_Mono, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dinusha Fernando | Software Developer",
  description: "Portfolio of Dinusha Fernando – Software Developer @ Network Wizard SDN BHD. Specializing in Python, FastAPI, Django, React, TypeScript, Node.js, PostgreSQL, Redis, Docker, and full-stack automation solutions.",
  keywords: ["Dinusha Fernando", "Software Developer", "Network Wizard SDN BHD", "ChronoSentinel AI", "FastAPI", "Python", "React", "TypeScript", "Django", "PostgreSQL", "Docker", "Flutter", "Sri Lanka", "Portfolio"],
  authors: [{ name: "Dinusha Fernando" }],
  openGraph: {
    title: "Dinusha Fernando | Software Developer",
    description: "Software Developer with practical experience in full-stack web, backend logic, mobile applications, and automation systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${ovo.variable} font-outfit antialiased leading-relaxed bg-white dark:bg-darkTheme text-slate-900 dark:text-slate-100 transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}

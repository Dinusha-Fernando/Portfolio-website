import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#06060c" },
  ],
};

export const metadata: Metadata = {
  title: "Dinusha Fernando | Software Developer",
  description: "Portfolio of Dinusha Fernando – Software Developer @ Network Wizard SDN BHD. Specializing in Python, FastAPI, Django, React, TypeScript, Node.js, PostgreSQL, Redis, Docker, and full-stack automation solutions.",
  keywords: [
    "Dinusha Fernando",
    "Software Developer",
    "Network Wizard SDN BHD",
    "ChronoSentinel AI",
    "FastAPI",
    "Python",
    "React",
    "TypeScript",
    "Django",
    "PostgreSQL",
    "Docker",
    "Flutter",
    "Sri Lanka",
    "Portfolio",
  ],
  authors: [{ name: "Dinusha Fernando" }],
  openGraph: {
    title: "Dinusha Fernando | Software Developer",
    description:
      "Software Developer with practical experience in full-stack web, backend logic, mobile applications, and automation systems.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Ovo&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
        className="font-outfit antialiased leading-relaxed bg-white dark:bg-darkTheme text-slate-900 dark:text-slate-100 transition-colors duration-500"
      >
        {children}
      </body>
    </html>
  );
}

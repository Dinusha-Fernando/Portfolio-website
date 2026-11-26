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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dinusha-showcase.vercel.app'),
  title: {
    default: 'Dinusha Fernando | Full-Stack Software Engineer & Founder',
    template: '%s | Dinusha Fernando',
  },
  description:
    'Official portfolio of Dinusha Fernando – Associate Software Engineer at Network Wizard SDN BHD & Founder of Zylux Software Solutions. Specializing in Python, FastAPI, Next.js, React, TypeScript, Django, PostgreSQL, Docker, and AI & WhatsApp Automation.',
  keywords: [
    'Dinusha Fernando',
    'Full-Stack Software Engineer',
    'Software Developer',
    'Network Wizard SDN BHD',
    'Zylux Software Solutions',
    'Founder & CEO',
    'FastAPI',
    'Python',
    'React',
    'Next.js',
    'TypeScript',
    'Django',
    'PostgreSQL',
    'Docker',
    'AI Automation',
    'WhatsApp Business Bot',
    'ChronoSentinel AI',
    'Sri Lanka Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Dinusha Fernando', url: 'https://dinusha-showcase.vercel.app' }],
  creator: 'Dinusha Fernando',
  publisher: 'Dinusha Fernando',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dinusha-showcase.vercel.app',
    title: 'Dinusha Fernando | Full-Stack Software Engineer & Founder',
    description:
      'Explore the engineering portfolio, scalable software architectures, AI systems, and enterprise solutions built by Dinusha Fernando.',
    siteName: 'Dinusha Fernando Portfolio',
    images: [
      {
        url: '/dinusha-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dinusha Fernando - Full-Stack Software Engineer & Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinusha Fernando | Full-Stack Software Engineer & Founder',
    description:
      'Associate Software Engineer at Network Wizard SDN BHD & Founder of Zylux Software Solutions. Specializing in high-performance web systems and AI automations.',
    images: ['/dinusha-hero.jpg'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  verification: {
    google: '8CVQ78K_zSaU3K0Oc7uI6-SgIFfPyIh-mvvHt5k8CPw',
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
        <meta
          name="google-site-verification"
          content="8CVQ78K_zSaU3K0Oc7uI6-SgIFfPyIh-mvvHt5k8CPw"
        />
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

import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import PageTransition from "@/components/PageTransition";
import ThemeToggle from "@/components/ThemeToggle";
import FloatingContact from "@/components/FloatingContact";
import ChatWidget from "@/components/ChatWidget";
import RightRail from "@/components/RightRail";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "PISE Bosquemar",
  description: "Plan Integral de Seguridad Educativa — Colegio Bosquemar",
};

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('pise-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full">
        <div className="flex min-h-screen flex-col lg:flex-row">
          <Sidebar />

          <div className="hidden lg:fixed lg:right-6 lg:top-6 lg:z-40 lg:block">
            <ThemeToggle />
          </div>

          <main className="relative flex-1 overflow-hidden px-4 py-8 sm:px-8 lg:px-12 lg:py-10">
            <div className="mx-auto flex max-w-[100rem] items-start gap-10">
              <div className="min-w-0 flex-1">
                <PageTransition>{children}</PageTransition>
              </div>
              <RightRail />
            </div>
          </main>
        </div>
        <FloatingContact />
        <ChatWidget />
      </body>
    </html>
  );
}

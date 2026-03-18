import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { ArrowUpRight, Linkedin, PenSquare } from "lucide-react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavLink } from "@/components/NavLink";

const geistSans = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

const syne = localFont({
  src: "../../node_modules/@fontsource-variable/syne/files/syne-latin-wght-normal.woff2",
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wilfred Grainger - Cloud Architect & Engineer",
  description:
    "Senior Cloud Architect writing about software engineering, infrastructure, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_88%,transparent)]/95 backdrop-blur-md">
            <div className="page-shell">
              <div className="flex min-h-18 items-center justify-between gap-4 py-4">
                <Link href="/" className="min-w-0" aria-label="Wilf Grainger home">
                  <div className="min-w-0">
                    <span className="font-display block text-2xl font-extrabold tracking-tight leading-none sm:text-[2rem]">
                      Wilf Grainger
                    </span>
                    <span className="mt-1 block text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--text-muted)] sm:text-[11px]">
                      Agentic engineering / cloud infrastructure / life
                    </span>
                  </div>
                </Link>

                <nav className="flex items-center gap-2 sm:gap-3">
                  <NavLink href="/">
                    <PenSquare className="h-4 w-4" />
                    <span>Writing</span>
                  </NavLink>
                  <a
                    href="https://www.linkedin.com/in/wilfred-grainger/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-button px-4 py-2.5 text-sm text-[var(--text-muted)]"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="hidden sm:inline">LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <ThemeToggle />
                </nav>
              </div>
            </div>
          </header>

          <main className="flex-1 pt-10 pb-16 sm:pt-14 sm:pb-20">
            <div className="page-shell">{children}</div>
          </main>

          <footer className="pb-10 pt-4">
            <div className="page-shell">
              <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-2xl">
                  Essays on systems, tools, and technical judgment.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/wilfred-grainger/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-link"
                  >
                    LinkedIn
                  </a>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--text-soft)]">
                    {year}
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

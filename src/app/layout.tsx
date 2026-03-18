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
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wilfred Grainger - Cloud Architect & Engineer",
  description:
    "Senior Cloud Architect at AWS Professional Services. Writing about software engineering, infrastructure, and technology.",
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
          <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(180,104,53,0.18),_transparent_58%)] dark:bg-[radial-gradient(circle_at_top,_rgba(224,154,106,0.16),_transparent_56%)]" />
          <header className="sticky top-0 z-50 pt-4 sm:pt-5">
            <div className="page-shell">
              <div className="soft-panel rounded-[1.75rem] px-4 py-3 sm:px-6 lg:px-7">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center justify-between gap-4">
                    <Link
                      href="/"
                      className="group min-w-0"
                      aria-label="Wilf Grainger home"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_var(--accent-soft)]" />
                        <div className="min-w-0">
                          <span className="font-display block text-2xl font-extrabold tracking-tight leading-none sm:text-[2rem]">
                            Wilf Grainger
                          </span>
                          <span className="mt-2 block max-w-xl text-[10px] font-mono tracking-[0.24em] uppercase text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)] sm:text-[11px]">
                            Agentic engineering / cloud infrastructure / life in modern systems
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="lg:hidden">
                      <ThemeToggle />
                    </div>
                  </div>

                  <nav className="flex flex-wrap items-center gap-2 text-sm font-medium shrink-0">
                    <NavLink href="/">
                      <PenSquare className="h-4 w-4" />
                      <span>Writing</span>
                    </NavLink>
                    <a
                      href="https://www.linkedin.com/in/wilfred-grainger/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="surface-button px-4 py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <div className="hidden lg:block">
                      <ThemeToggle />
                    </div>
                  </nav>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.24em] text-[var(--text-soft)] sm:text-[11px]">
                  <span className="eyebrow">Senior Cloud Architect at AWS Professional Services</span>
                  <span className="eyebrow">Writing about systems, tools, and technical judgment</span>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 pt-10 pb-16 sm:pt-14 sm:pb-20">
            <div className="page-shell">{children}</div>
          </main>

          <footer className="pb-10">
            <div className="page-shell">
              <div className="soft-panel rounded-[1.75rem] px-6 py-6 sm:px-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="section-kicker font-mono text-[11px]">Elsewhere</p>
                    <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      Building cloud platforms, writing down what matters.
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                      This site is a running notebook on infrastructure, agentic workflows,
                      software judgment, and the shape of technical work.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 text-sm text-[var(--text-muted)] sm:items-end">
                    <a
                      href="https://www.linkedin.com/in/wilfred-grainger/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 accent-link"
                    >
                      Connect on LinkedIn <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--text-soft)]">
                      Copyright {year} Wilfred Grainger
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

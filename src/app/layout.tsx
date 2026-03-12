import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { Home, FolderGit2, Linkedin } from "lucide-react";
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
  title: "Wilfred Grainger — Cloud Architect & Engineer",
  description: "Senior Cloud Architect at AWS Professional Services. Writing about software engineering, infrastructure, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl h-16 flex items-center justify-between">
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-3 group">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight">
                Wilfred Grainger
              </span>
            </Link>
            <nav className="flex items-center gap-3 sm:gap-5 text-sm font-medium">
              <NavLink href="/">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Blog</span>
              </NavLink>
              <NavLink href="/projects">
                <FolderGit2 className="w-4 h-4" />
                <span className="hidden sm:inline">Projects</span>
              </NavLink>
              <a href="https://www.linkedin.com/in/wilfred-grainger/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-10 sm:py-16">
          {children}
        </main>
        <footer className="border-t border-[var(--border)] py-8 mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
            <p className="font-mono text-xs tracking-wider uppercase">© {new Date().getFullYear()} Wilfred Grainger</p>
            <p className="text-xs">Built with precision & Next.js</p>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

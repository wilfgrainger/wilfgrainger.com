import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Home, BookOpen, FolderGit2, UserRound } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wilfred Grainger - Personal Blog & CV",
  description: "A slick personal blog, portfolio, and CV site by Wilfred Grainger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
          <div className="container mx-auto px-4 max-w-4xl h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg tracking-tight hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              Wilfred Grainger
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="flex items-center gap-2 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home / Blog</span>
              </Link>
              <Link href="/projects" className="flex items-center gap-2 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">
                <FolderGit2 className="w-4 h-4" />
                <span className="hidden sm:inline">Projects</span>
              </Link>
              <Link href="/cv" className="flex items-center gap-2 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">
                <UserRound className="w-4 h-4" />
                <span className="hidden sm:inline">CV</span>
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 container mx-auto px-4 max-w-4xl py-12">
          {children}
        </main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6 mt-12 text-center text-sm text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Wilfred Grainger. Built with Next.js.</p>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Home, FolderGit2, Linkedin } from "lucide-react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wilfred Grainger - Personal Blog",
  description: "A slick personal blog and portfolio site by Wilfred Grainger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-base sm:text-lg tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2 group">
              <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded bg-black border border-neutral-800 shadow-[0_0_15px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(255,0,255,0.4)] transition-shadow duration-300">
                <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] mix-blend-screen opacity-50 z-10"></span>
                <span className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-yellow-500/20 z-0"></span>
                <span className="relative z-20 font-black text-xl italic bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)] tracking-tighter" style={{ fontFamily: 'monospace' }}>W</span>
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 font-extrabold">Wilfred Grainger</span>
            </Link>
            <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
              <Link href="/" className="flex items-center gap-2 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home / Blog</span>
              </Link>
              <Link href="/projects" className="flex items-center gap-2 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">
                <FolderGit2 className="w-4 h-4" />
                <span className="hidden sm:inline">Projects</span>
              </Link>
              <a href="https://www.linkedin.com/in/wilfred-grainger/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8 sm:py-12">
          {children}
        </main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6 mt-12 text-center text-sm text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Wilfred Grainger. Built with Next.js.</p>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

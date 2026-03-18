"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type NavLinkProps = ComponentProps<typeof Link> & {
  children: React.ReactNode;
};

export function NavLink({ href, children, className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const hrefStr = href.toString();
  const isActive =
    hrefStr === "/"
      ? pathname === "/" || pathname.startsWith("/blog")
      : pathname === hrefStr || pathname.startsWith(hrefStr + "/");

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all ${
        isActive
          ? "border-[var(--border-strong)] bg-[var(--surface-strong)] text-[var(--accent)] shadow-[var(--shadow-crisp)]"
          : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)] hover:text-[var(--accent)]"
      } ${className ?? ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}

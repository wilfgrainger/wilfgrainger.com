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
  // The home route "/" also covers blog post sub-pages
  const isActive =
    hrefStr === "/"
      ? pathname === "/" || pathname.startsWith("/blog")
      : pathname === hrefStr || pathname.startsWith(hrefStr + "/");

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 transition-colors ${
        isActive
          ? "text-[var(--accent)] font-semibold"
          : "text-[var(--text-muted)] hover:text-[var(--accent)]"
      } ${className ?? ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}

import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getSortedPostsData } from "@/lib/markdown";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 5);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16 sm:mb-20 animate-fade-up">
        <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[var(--accent)] mb-4">
          Senior Cloud Architect · AWS Professional Services
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05]">
          Hi, I&apos;m Wilfred<span className="text-[var(--accent)]">.</span>
        </h1>
        <p className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl">
          I write about software engineering, cloud infrastructure, and the technology that shapes how we build.
        </p>
        <div className="mt-8 h-px bg-gradient-to-r from-[var(--accent)] via-[var(--border)] to-transparent" />
      </div>

      {/* Section Header */}
      <div className="mb-10 sm:mb-12 animate-fade-up stagger-1 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-1">Recent Posts</h2>
          <p className="text-[var(--text-muted)] text-sm">Thoughts, stories and ideas.</p>
        </div>
        {allPostsData.length > 5 && (
          <Link
            href="/blog"
            className="text-sm font-medium accent-link flex items-center gap-1 shrink-0"
          >
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

      {/* Posts List */}
      <div className="space-y-0 divide-y divide-[var(--border)]">
        {recentPosts.length === 0 ? (
          <p className="text-[var(--text-muted)] italic py-8">No posts found.</p>
        ) : (
          recentPosts.map(({ id, date, title, summary }, index) => (
            <article key={id} className={`animate-fade-up stagger-${Math.min(index + 2, 5)}`}>
              <Link href={`/blog/${id}`} className="group block py-8 sm:py-10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <time dateTime={date} className="font-mono text-xs tracking-wider uppercase text-[var(--text-muted)]">
                    {date ? format(parseISO(date), "MMM dd, yyyy") : 'No Date'}
                  </time>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-[var(--accent)] transition-colors mb-3">
                  {title}
                </h2>
                {summary && (
                  <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
                    {summary}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] group-hover:gap-2.5 transition-all">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

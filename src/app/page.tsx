import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getSortedPostsData } from "@/lib/markdown";
import { ArrowRight, BookOpen, Briefcase, Clock3, Sparkles } from "lucide-react";

export default function Home() {
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 5);
  const latestPost = allPostsData[0];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16 sm:mb-20 animate-fade-up">
        <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[var(--accent)] mb-4">
          Senior Cloud Architect · AWS Professional Services
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.05]">
          Wilfred&apos;s notes on building, learning, and growing
          <span className="text-[var(--accent)]">.</span>
        </h1>
        <p className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl">
          I write about software engineering, cloud infrastructure, and life.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors">
            Read the blog <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
            Explore projects <Briefcase className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">Published posts</p>
            <p className="text-xl font-bold">{allPostsData.length}</p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">Latest post</p>
            <p className="text-sm font-medium truncate">{latestPost?.title ?? "Coming soon"}</p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">Currently focused on</p>
            <p className="text-sm font-medium">Cloud platforms + AI workflows</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {["AWS", "Platform Engineering", "Career Growth", "Vibe Coding", "Life Notes"].map((topic) => (
            <span key={topic} className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
              <Sparkles className="w-3 h-3 mr-1.5 text-[var(--accent)]" />
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-8 h-px bg-gradient-to-r from-[var(--accent)] via-[var(--border)] to-transparent" />
      </div>

      {/* Recent Posts Header */}
      <div className="mb-10 sm:mb-12 animate-fade-up stagger-1 flex items-end justify-between gap-4">
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
      <div className="space-y-0 divide-y divide-[var(--border)] mb-14">
        {recentPosts.length === 0 ? (
          <p className="text-[var(--text-muted)] italic py-8">No posts found.</p>
        ) : (
          recentPosts.map(({ id, date, title, summary }, index) => (
            <article key={id} className={`animate-fade-up stagger-${Math.min(index + 2, 5)}`}>
              <Link href={`/blog/${id}`} className="group block py-8 sm:py-10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <time dateTime={date} className="font-mono text-xs tracking-wider uppercase text-[var(--text-muted)]">
                    {date ? format(parseISO(date), "MMM dd, yyyy") : "No Date"}
                  </time>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                    <Clock3 className="w-3 h-3" />
                    {summary ? "Insight" : "Update"}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-[var(--accent)] transition-colors mb-3">
                  {title}
                </h3>
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

      {/* Footer Callout */}
      <section className="animate-fade-up stagger-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6 sm:p-8">
        <h2 className="font-display text-2xl font-bold tracking-tight mb-2">What you&apos;ll find here</h2>
        <p className="text-[var(--text-muted)] leading-relaxed mb-4">
          Practical cloud lessons, experiments with new tooling, and honest notes on work and life.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/blog" className="inline-flex items-center gap-2 accent-link font-semibold">
            <BookOpen className="w-4 h-4" /> Browse all posts
          </Link>
          <Link href="/projects" className="inline-flex items-center gap-2 accent-link font-semibold">
            <Briefcase className="w-4 h-4" /> See projects
          </Link>
        </div>
      </section>
    </div>
  );
}

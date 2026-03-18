import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ArrowRight } from "lucide-react";
import { getSortedPostsData } from "@/lib/markdown";

export default function Home() {
  const allPostsData = getSortedPostsData();
  const [latestPost] = allPostsData;

  return (
    <div className="reading-shell">
      <section className="animate-fade-up pb-12 pt-2 sm:pb-16">
        <p className="section-kicker font-mono text-[11px] sm:text-xs">
          Senior Cloud Architect
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-[5.4rem] lg:leading-[0.98]">
          Cloud systems, agentic engineering and life.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
          Notes on infrastructure, software judgment, and the changing shape of technical work.
        </p>
      </section>

      {latestPost && (
        <section className="animate-fade-up stagger-1 border-t border-[var(--border)] py-8 sm:py-10">
          <p className="section-kicker font-mono text-[11px] sm:text-xs">Latest</p>
          <article className="pt-4">
            <time
              dateTime={latestPost.date}
              className="meta-line font-mono text-[11px] uppercase tracking-[0.22em]"
            >
              {latestPost.date ? format(parseISO(latestPost.date), "MMMM dd, yyyy") : "No date"}
            </time>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              <Link href={`/blog/${latestPost.id}`} className="hover:text-[var(--accent)]">
                {latestPost.title}
              </Link>
            </h2>
            {latestPost.summary && (
              <p className="mt-4 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                {latestPost.summary}
              </p>
            )}
            <Link
              href={`/blog/${latestPost.id}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium accent-link"
            >
              Read article <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </section>
      )}

      <section className="animate-fade-up stagger-2 border-t border-[var(--border)] py-8 sm:py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker font-mono text-[11px] sm:text-xs">Archive</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Recent posts
            </h2>
          </div>
        </div>

        <div className="mt-6">
          {allPostsData.length === 0 ? (
            <p className="py-6 text-[var(--text-muted)]">No posts found.</p>
          ) : (
            <div className="divide-y divide-[var(--border)]">
              {allPostsData.map(({ id, date, title, summary }, index) => (
                <article
                  key={id}
                  className={`py-6 sm:py-8 ${index === 0 ? "first:pt-0" : ""}`}
                >
                  <time
                    dateTime={date}
                    className="meta-line font-mono text-[11px] uppercase tracking-[0.22em]"
                  >
                    {date ? format(parseISO(date), "MMMM dd, yyyy") : "No date"}
                  </time>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                    <Link href={`/blog/${id}`} className="hover:text-[var(--accent)]">
                      {title}
                    </Link>
                  </h3>
                  {summary && (
                    <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--text-muted)]">
                      {summary}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ArrowRight, NotebookText, Sparkles } from "lucide-react";
import { getSortedPostsData } from "@/lib/markdown";

const focusAreas = [
  "Agentic engineering",
  "Cloud systems",
  "Architecture and delivery",
  "Technology and work",
];

const principles = [
  {
    title: "Systems over slogans",
    body: "Practical writing on how teams actually design, ship, and maintain modern software.",
  },
  {
    title: "Spec before momentum",
    body: "A recurring interest in tools and habits that improve judgment instead of merely accelerating output.",
  },
  {
    title: "Infrastructure with taste",
    body: "Cloud architecture, platform concerns, and the human tradeoffs that sit underneath technical choices.",
  },
];

export default function Home() {
  const allPostsData = getSortedPostsData();
  const [featuredPost, ...recentPosts] = allPostsData;
  const secondaryPosts = recentPosts.slice(0, 4);

  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="hero-panel ink-panel grid-ornament animate-fade-up rounded-[2.25rem] px-6 py-8 sm:px-10 sm:py-12 lg:grid lg:grid-cols-[minmax(0,1.5fr)_minmax(17rem,0.8fr)] lg:gap-10 lg:px-12 lg:py-14">
        <div className="relative z-10">
          <span className="eyebrow section-kicker font-mono text-[11px] sm:text-xs">
            Senior Cloud Architect at AWS Professional Services
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl lg:leading-[0.98]">
            Notes on building cloud systems and working with intelligent tools.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
            I write about agentic engineering, infrastructure, software judgment, and
            the patterns that make technical work hold up after the first burst of
            momentum.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={featuredPost ? `/blog/${featuredPost.id}` : "/"} className="surface-button accent-button">
              <NotebookText className="h-4 w-4" />
              <span>{featuredPost ? "Read the latest essay" : "Explore the writing"}</span>
            </Link>
            <a
              href="https://www.linkedin.com/in/wilfred-grainger/"
              target="_blank"
              rel="noopener noreferrer"
              className="surface-button"
            >
              <Sparkles className="h-4 w-4 text-[var(--accent)]" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="animate-drift mt-8 rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_100%),var(--surface-strong)] p-5 shadow-[var(--shadow-card)] lg:mt-0">
          <p className="section-kicker font-mono text-[11px]">Current focus</p>
          <div className="mt-5 space-y-3">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)]"
              >
                <span>{area}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-[var(--text-muted)]">
            Warm, editorial presentation on the outside; concrete technical thinking
            underneath.
          </p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
        <div className="soft-panel animate-fade-up stagger-1 rounded-[2rem] px-6 py-7 sm:px-8 sm:py-8">
          <p className="section-kicker font-mono text-[11px] sm:text-xs">Positioning</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Writing for people building real systems, not demo theatre.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            The site sits at the intersection of architecture, engineering craft, and
            the way AI is changing how work gets specified, reviewed, and shipped.
          </p>
        </div>

        <div className="soft-panel animate-fade-up stagger-2 rounded-[2rem] px-6 py-7 sm:px-8 sm:py-8">
          <p className="section-kicker font-mono text-[11px] sm:text-xs">At a glance</p>
          <dl className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--text-soft)]">
                Posts
              </dt>
              <dd className="mt-2 font-display text-4xl font-bold tracking-tight">
                {allPostsData.length}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--text-soft)]">
                Themes
              </dt>
              <dd className="mt-2 font-display text-4xl font-bold tracking-tight">4</dd>
            </div>
          </dl>
        </div>
      </section>

      {featuredPost && (
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <Link
            href={`/blog/${featuredPost.id}`}
            className="ink-panel hover-lift animate-fade-up stagger-2 group rounded-[2.1rem] px-6 py-7 sm:px-8 sm:py-8 lg:px-10"
          >
            <p className="section-kicker font-mono text-[11px] sm:text-xs">Featured writing</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--text-soft)]">
              <span className="meta-chip">
                {featuredPost.date ? format(parseISO(featuredPost.date), "MMM dd, yyyy") : "No date"}
              </span>
              <span className="meta-chip">Latest essay</span>
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight text-balance transition-colors group-hover:text-[var(--accent)] sm:text-4xl lg:text-[3.2rem] lg:leading-[1.02]">
              {featuredPost.title}
            </h2>
            {featuredPost.summary && (
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                {featuredPost.summary}
              </p>
            )}
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
              Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <div className="soft-panel animate-fade-up stagger-3 rounded-[2rem] px-6 py-7 sm:px-8 sm:py-8">
            <p className="section-kicker font-mono text-[11px] sm:text-xs">Editorial lens</p>
            <div className="mt-5 space-y-4">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] px-4 py-4"
                >
                  <h3 className="font-display text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="soft-panel animate-fade-up stagger-3 rounded-[2rem] px-6 py-7 sm:px-8 sm:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker font-mono text-[11px] sm:text-xs">Recent writing</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Essays, notes, and field observations.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--text-muted)] sm:text-right sm:text-base">
            A compact archive of recent posts on tooling, architecture, and how the
            practice of engineering is changing.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {secondaryPosts.length === 0 ? (
            <div className="rounded-[1.5rem] border border-dashed border-[var(--border-strong)] px-6 py-10 text-center text-[var(--text-muted)]">
              No posts found.
            </div>
          ) : (
            secondaryPosts.map(({ id, date, title, summary }, index) => (
              <article key={id} className={`animate-fade-up stagger-${Math.min(index + 2, 5)}`}>
                <Link
                  href={`/blog/${id}`}
                  className="hover-lift group block h-full rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] px-5 py-5 shadow-[var(--shadow-crisp)] sm:px-6 sm:py-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <time
                      dateTime={date}
                      className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--text-soft)]"
                    >
                      {date ? format(parseISO(date), "MMM dd, yyyy") : "No date"}
                    </time>
                    <ArrowRight className="h-4 w-4 text-[var(--text-soft)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-balance transition-colors group-hover:text-[var(--accent)]">
                    {title}
                  </h3>
                  {summary && (
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                      {summary}
                    </p>
                  )}
                </Link>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

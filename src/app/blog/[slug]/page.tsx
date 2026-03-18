import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { getPostData, getSortedPostsData } from "@/lib/markdown";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const allPosts = getSortedPostsData();

  let slug = "";
  let postData;

  try {
    ({ slug } = await params);
    postData = await getPostData(slug);
  } catch {
    notFound();
  }

  const relatedPosts = allPosts.filter((post) => post.id !== slug).slice(0, 2);

  return (
    <article className="space-y-8 sm:space-y-10">
      <section className="hero-panel ink-panel animate-fade-up rounded-[2.25rem] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
        <Link
          href="/"
          className="surface-button mb-8 px-4 py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to writing</span>
        </Link>

        <div className="max-w-4xl">
          <p className="section-kicker font-mono text-[11px] sm:text-xs">Essay</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[4.35rem] lg:leading-[1.02]">
            {postData.title}
          </h1>

          <div className="mt-7 flex flex-wrap gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--text-soft)]">
            <span className="meta-chip">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={postData.date}>
                {postData.date ? format(parseISO(postData.date), "MMM dd, yyyy") : "No date"}
              </time>
            </span>
            <span className="meta-chip">
              <Clock className="h-3.5 w-3.5" />
              <span>{postData.readingTime} min read</span>
            </span>
          </div>

          {postData.summary && (
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
              {postData.summary}
            </p>
          )}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
        <div className="soft-panel animate-fade-up stagger-2 rounded-[2rem] px-6 py-8 sm:px-10 sm:py-10">
          <div
            className="reading-shell prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-strong:text-[var(--text-primary)]"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>

        <aside className="space-y-4 xl:sticky xl:top-28">
          <div className="soft-panel animate-fade-up stagger-3 rounded-[1.75rem] px-5 py-5 sm:px-6">
            <p className="section-kicker font-mono text-[11px]">Reading note</p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
              These posts are written as working notes: opinionated, practical, and
              grounded in what holds up under real delivery pressure.
            </p>
          </div>

          {relatedPosts.length > 0 && (
            <div className="soft-panel animate-fade-up stagger-4 rounded-[1.75rem] px-5 py-5 sm:px-6">
              <p className="section-kicker font-mono text-[11px]">More writing</p>
              <div className="mt-4 space-y-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group block rounded-[1.3rem] border border-[var(--border)] bg-[var(--surface)] px-4 py-4 hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-soft)]">
                      {post.date ? format(parseISO(post.date), "MMM dd, yyyy") : "No date"}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-bold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                      {post.title}
                    </h2>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--accent)]">
                      Read next <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}

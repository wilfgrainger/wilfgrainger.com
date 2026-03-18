import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPostData, getSortedPostsData } from "@/lib/markdown";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  let postData;

  try {
    const { slug } = await params;
    postData = await getPostData(slug);
  } catch {
    notFound();
  }

  return (
    <article className="reading-shell">
      <header className="animate-fade-up pb-10 pt-2 sm:pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to writing</span>
        </Link>

        <p className="section-kicker mt-8 font-mono text-[11px] sm:text-xs">Essay</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.02]">
          {postData.title}
        </h1>

        <div className="meta-line mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em]">
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={postData.date}>
              {postData.date ? format(parseISO(postData.date), "MMMM dd, yyyy") : "No date"}
            </time>
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" />
            <span>{postData.readingTime} min read</span>
          </span>
        </div>

        {postData.summary && (
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
            {postData.summary}
          </p>
        )}
      </header>

      <div className="border-t border-[var(--border)] pt-8 sm:pt-10">
        <div
          className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-strong:text-[var(--text-primary)]"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </article>
  );
}

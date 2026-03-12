import { getPostData, getSortedPostsData } from "@/lib/markdown";
import { format, parseISO } from "date-fns";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <article className="max-w-3xl mx-auto">
      <div className="mb-10 animate-fade-up">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
          {postData.title}
        </h1>

        <div className="flex items-center gap-5 font-mono text-xs tracking-wider uppercase text-[var(--text-muted)]">
          <span className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={postData.date}>
              {postData.date ? format(parseISO(postData.date), "MMM dd, yyyy") : 'No Date'}
            </time>
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            {postData.readingTime} min read
          </span>
        </div>
      </div>

      <div className="mt-8 h-px bg-gradient-to-r from-[var(--accent)] via-[var(--border)] to-transparent mb-10 animate-fade-up stagger-1" />

      <div
        className="animate-fade-up stagger-2 prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
        prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline
        prose-img:rounded-xl prose-img:shadow-md
        prose-blockquote:border-l-[var(--accent)] prose-blockquote:text-[var(--text-muted)]
        prose-code:text-[var(--accent)] prose-code:font-mono
        prose-strong:text-[var(--text-primary)]"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
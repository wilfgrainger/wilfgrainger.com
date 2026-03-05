import { getPostData, getSortedPostsData } from "@/lib/markdown";
import { format, parseISO } from "date-fns";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for fast rendering
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
    <article className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          {postData.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-neutral-500 font-medium">
          <Calendar className="w-4 h-4" />
          <time dateTime={postData.date}>
            {postData.date ? format(parseISO(postData.date), "LLLL d, yyyy") : 'No Date'}
          </time>
        </div>
      </div>

      <div
        className="prose prose-lg dark:prose-invert prose-neutral max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
        prose-img:rounded-xl prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
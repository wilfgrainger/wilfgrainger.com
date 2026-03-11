import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getSortedPostsData } from "@/lib/markdown";
import { Calendar, ArrowRight } from "lucide-react";

export default function Home() {
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 5);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-12 sm:mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Hi, I&apos;m Wilfred 👋
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
          I write about software engineering, infrastructure, and technology.
        </p>
      </div>

      <div className="mb-8 sm:mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-4 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Recent Posts</h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">Thoughts, stories and ideas.</p>
        </div>
        {allPostsData.length > 5 && (
          <Link
            href="/blog"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0"
          >
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

      <div className="space-y-12">
        {recentPosts.length === 0 ? (
          <p className="text-neutral-500 italic">No posts found.</p>
        ) : (
          recentPosts.map(({ id, date, title, summary }) => (
            <article key={id} className="group flex flex-col items-start justify-between">
              <Link href={`/blog/${id}`} className="block w-full transition-colors">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={date} className="font-medium">
                    {date ? format(parseISO(date), "LLLL d, yyyy") : 'No Date'}
                  </time>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                  {title}
                </h2>
                {summary && (
                  <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {summary}
                  </p>
                )}
                <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <span>&rarr;</span>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

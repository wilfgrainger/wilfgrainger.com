import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getSortedPostsData } from "@/lib/markdown";
import { Calendar } from "lucide-react";

export default function Home() {
  const allPostsData = getSortedPostsData().slice(0, 5);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-12 sm:mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
          I&apos;m a Senior Cloud Architect Consultant at <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">AWS Professional Services</strong> (Global Financial Services). I write about software engineering, infrastructure, and technology.
        </p>
      </div>

      <div className="mb-8 sm:mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Recent Posts</h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">Thoughts, stories and ideas.</p>
      </div>

      <div className="space-y-12">
        {allPostsData.length === 0 ? (
          <p className="text-neutral-500 italic">No posts found.</p>
        ) : (
          allPostsData.map(({ id, date, title, summary }) => (
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

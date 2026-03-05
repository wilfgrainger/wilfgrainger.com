import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getSortedPostsData } from "@/lib/markdown";
import { Calendar } from "lucide-react";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Blog</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Writings on software engineering, web development, and my tech journey.
        </p>
      </div>

      <ul className="space-y-8">
        {allPostsData.length === 0 ? (
          <p className="text-neutral-500 italic">No posts found.</p>
        ) : (
          allPostsData.map(({ id, date, title, summary }) => (
            <li key={id} className="group flex flex-col items-start justify-between">
              <Link href={`/blog/${id}`} className="block w-full border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 p-4 -ml-4 rounded-xl transition-colors">
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={date}>
                    {date ? format(parseISO(date), "LLLL d, yyyy") : 'No Date'}
                  </time>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {title}
                </h2>
                {summary && (
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {summary}
                  </p>
                )}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
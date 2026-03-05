import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getSortedPostsData } from "@/lib/markdown";
import { Calendar } from "lucide-react";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-3xl mx-auto py-8">
      <section className="mb-16 flex flex-col gap-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Hello, I&apos;m Wilfred Grainger.
        </h1>
        <p className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-2xl">
          I&apos;m a software engineer who loves building clean, modern, and performant web applications.
          Welcome to my digital garden where I share my thoughts, projects, and professional experience.
          <br /><br />
          You can also find me on <a href="https://www.linkedin.com/in/wilfred-grainger/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>.
        </p>
      </section>

      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Latest Posts</h2>
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

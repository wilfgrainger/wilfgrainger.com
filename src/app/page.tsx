import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-12">
      <section className="flex flex-col gap-6">
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

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/blog"
          className="group relative flex flex-col justify-between p-6 h-48 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all overflow-hidden"
        >
          <div>
            <h2 className="text-xl font-bold mb-2">Blog</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Read my latest articles and thoughts on software development.</p>
          </div>
          <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
            View Posts <ArrowRight className="ml-1 w-4 h-4" />
          </div>
        </Link>

        <Link
          href="/projects"
          className="group relative flex flex-col justify-between p-6 h-48 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all overflow-hidden"
        >
          <div>
            <h2 className="text-xl font-bold mb-2">Projects</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Explore the apps, tools, and libraries I&apos;ve built.</p>
          </div>
          <div className="flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
            View Projects <ArrowRight className="ml-1 w-4 h-4" />
          </div>
        </Link>

        <Link
          href="/cv"
          className="group relative flex flex-col justify-between p-6 h-48 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all overflow-hidden"
        >
          <div>
            <h2 className="text-xl font-bold mb-2">CV / Resume</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Check out my professional experience, skills, and education.</p>
          </div>
          <div className="flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
            View CV <ArrowRight className="ml-1 w-4 h-4" />
          </div>
        </Link>
      </section>
    </div>
  );
}

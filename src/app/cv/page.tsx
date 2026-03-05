export default function CVPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">Curriculum Vitae</h1>

      <div className="space-y-12">
        <section className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">Experience</h2>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">Acme Corp</p>
              </div>
              <span className="text-sm text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full mt-2 sm:mt-0">2021 - Present</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Lead development of highly scalable microservices architecture serving millions of requests daily.</li>
              <li>Mentored junior developers and established CI/CD pipelines increasing deployment frequency by 50%.</li>
              <li>Spearheaded the migration to Next.js 14 App Router, drastically improving core web vitals.</li>
            </ul>

            <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 my-6"></div>

            <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Software Developer</h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">TechNova Solutions</p>
              </div>
              <span className="text-sm text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full mt-2 sm:mt-0">2018 - 2021</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Built and maintained robust REST APIs using Node.js and Express.</li>
              <li>Developed complex interactive UIs using React and Redux.</li>
              <li>Optimized database queries resulting in a 30% reduction in load times.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'GraphQL', 'AWS', 'Docker', 'PostgreSQL', 'Redis', 'Git'].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">Education</h2>

          <div className="flex flex-col sm:flex-row sm:justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">B.S. in Computer Science</h3>
              <p className="text-neutral-600 dark:text-neutral-400">University of Technology</p>
            </div>
            <span className="text-sm text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full mt-2 sm:mt-0">2014 - 2018</span>
          </div>
        </section>
      </div>
    </div>
  );
}
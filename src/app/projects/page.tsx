import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "TaskFlow UI",
      description: "A beautifully crafted, accessible task management interface built with Next.js, Tailwind, and Framer Motion. Showcases best practices for component design and state management.",
      url: "https://example.com/taskflow",
      github: "https://github.com/example/taskflow",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "DevTools CLI",
      description: "A fast, compiled command-line tool written in Go that streamlines the setup of new monorepos and local development environments.",
      url: "https://example.com/devtools",
      github: "https://github.com/example/devtools",
      tags: ["Go", "CLI", "Automation"],
    },
    {
      title: "Real-time Metrics Dashboard",
      description: "An analytics dashboard using WebSockets and Redis to stream live metrics from production servers. Features customizable charts and alerting.",
      url: "https://example.com/metrics",
      github: "https://github.com/example/metrics",
      tags: ["TypeScript", "WebSockets", "Redis", "D3.js"],
    },
    {
      title: "OpenSource API Client",
      description: "A highly-rated, type-safe API client library for a popular SaaS platform. Downloaded over 100k times per month on npm.",
      url: "https://example.com/api-client",
      github: "https://github.com/example/api-client",
      tags: ["TypeScript", "npm", "Open Source"],
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Projects</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          A collection of my recent work, open-source contributions, and side projects.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <li
            key={index}
            className="group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors rounded-xl overflow-hidden shadow-sm"
          >
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-bold mb-3">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-1 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs font-medium rounded-md border border-neutral-200 dark:border-neutral-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                >
                  <Github className="w-4 h-4" /> Source
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

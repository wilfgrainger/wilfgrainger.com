import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Gemini CLI",
      description: "An interactive CLI agent specializing in software engineering tasks, built on Google's Gemini models. It automates development cycles from research to deployment.",
      url: "https://github.com/google-gemini/gemini-cli",
      github: "https://github.com/google-gemini/gemini-cli",
      tags: ["TypeScript", "LLM", "CLI", "Google AI"],
    },
    {
      title: "Cloudflare Wrangler Action",
      description: "A major contributor and maintainer of the official GitHub Action used to deploy Cloudflare Workers and Pages using Wrangler.",      
      url: "https://github.com/cloudflare/wrangler-action",
      github: "https://github.com/cloudflare/wrangler-action",
      tags: ["GitHub Actions", "Wrangler", "DevOps", "Cloudflare"],
    },
    {
      title: "find-close-meteorites",
      description: "A Python-based demo that interacts with NASA's Open Data APIs to find and list meteorite landing sites near a given location.",
      url: "https://github.com/wilfgrainger/find-close-meteorites",
      github: "https://github.com/wilfgrainger/find-close-meteorites",
      tags: ["Python", "NASA API", "Data"],
    },
    {
      title: "zerobytemode",
      description: "A project exploring low-level data handling and zero-byte encoding modes, often used in performance-critical JavaScript applications.",
      url: "https://github.com/wilfgrainger/zerobytemode",
      github: "https://github.com/wilfgrainger/zerobytemode",
      tags: ["JavaScript", "Performance", "Low-level"],
    },
    {
      title: "graingersagency",
      description: "The official agency portfolio for Grainger's Agency, built with modern web standards and focused on high-performance delivery.",
      url: "https://github.com/wilfgrainger/graingersagency",
      github: "https://github.com/wilfgrainger/graingersagency",
      tags: ["JavaScript", "HTML", "Portfolio"],
    },
    {
      title: "roots",
      description: "A specialized project focused on calculating function roots and zeros, or serving as a base configuration for complex web apps.",
      url: "https://github.com/wilfgrainger/roots",
      github: "https://github.com/wilfgrainger/roots",
      tags: ["JavaScript", "Python", "Math"],
    },
    {
      title: "mi-five",
      description: "A security-themed demo project exploring modern web security practices and data handling in JavaScript.",
      url: "https://github.com/wilfgrainger/mi-five",
      github: "https://github.com/wilfgrainger/mi-five",
      tags: ["JavaScript", "Security", "Web Development"],
    },
    {
      title: "broono",
      description: "A TypeScript-based utility project designed for streamlined development and modern tooling integration.",
      url: "https://github.com/wilfgrainger/broono",
      github: "https://github.com/wilfgrainger/broono",
      tags: ["TypeScript", "Tooling", "Utility"],
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

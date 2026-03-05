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
      title: "Cloudflare Worker REST API",
      description: "A robust boilerplate for building production-ready REST APIs using Cloudflare Workers, featuring modern routing and D1/KV integration.",
      url: "https://github.com/wilfgrainger/cloudflare-worker-rest-api",
      github: "https://github.com/wilfgrainger/cloudflare-worker-rest-api",
      tags: ["TypeScript", "Cloudflare Workers", "D1", "REST"],
    },
    {
      title: "Worker TypeScript Template",
      description: "A modern starter template for building Cloudflare Workers with TypeScript, including pre-configured Vitest, Prettier, and ESLint.",
      url: "https://github.com/wilfgrainger/worker-typescript-template",
      github: "https://github.com/wilfgrainger/worker-typescript-template",
      tags: ["TypeScript", "Vitest", "Cloudflare Workers"],
    },
    {
      title: "Next.js Cloudflare Pages",
      description: "Templates and examples for deploying high-performance Next.js applications to Cloudflare Pages using the Edge Runtime.",
      url: "https://github.com/wilfgrainger/nextjs-cloudflare-pages",
      github: "https://github.com/wilfgrainger/nextjs-cloudflare-pages",
      tags: ["Next.js", "Cloudflare Pages", "React", "TypeScript"],
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

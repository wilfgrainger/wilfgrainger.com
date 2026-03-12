import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  url: string;
  github: string;
  tags: string[];
}

const projects: Project[] = [
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
  },
  {
    title: "wilfgrainger.com",
    description: "My personal blog and CV site built with Next.js (App Router), TypeScript, and Tailwind CSS.",
    url: "https://wilfgrainger.com",
    github: "https://github.com/wilfgrainger/wilfgrainger.com",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Portfolio"],
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-14 animate-fade-up">
        <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[var(--accent)] mb-4">
          Open Source & Side Projects
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Projects</h1>
        <p className="text-lg text-[var(--text-muted)] max-w-2xl">
          A collection of recent work, open-source contributions, and side projects.
        </p>
      </div>

      <div className="space-y-0 divide-y divide-[var(--border)]">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group py-8 sm:py-10 animate-fade-up stagger-${Math.min(index + 1, 5)}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight group-hover:text-[var(--accent)] transition-colors mb-2">
                  {project.title}
                </h2>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] sm:text-xs tracking-wider uppercase px-2.5 py-1 bg-[var(--surface)] border border-[var(--border)] rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 sm:pt-1 shrink-0">
                {project.url !== project.github && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <Github className="w-4 h-4" /> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

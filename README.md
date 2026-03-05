# Personal Blog & CV Site

This is a personal website, blog, and CV built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS. It is designed to be statically exported and hosted on Cloudflare Pages.

## 🚀 Getting Started Locally

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Writing Blog Posts

Blog posts are written in standard Markdown (`.md`) and are stored in the `content/posts/` directory.

To create a new post, simply create a new `.md` file in that directory. The system uses YAML frontmatter to extract the title, date, and summary.

**Example `content/posts/my-post.md`:**
```yaml
---
title: "My Awesome Title"
date: "2024-03-05"
summary: "A brief summary of what the post is about."
---

Here is my post content written in markdown.
```

## ☁️ Deployment on Cloudflare Pages

This project is configured to generate a static site (`output: 'export'` in `next.config.ts`), making it perfectly suited for hosting on Cloudflare Pages or GitHub Pages.

**Important:** You must use the correct build settings in your Cloudflare Pages dashboard so that it serves the exported React app, *not* the raw repository files (which causes the README to be shown instead).

### Cloudflare Pages Settings

1. Connect your GitHub repository to Cloudflare Pages.
2. Configure the build settings as follows:
   * **Framework preset:** Next.js (Static HTML Export)
   * **Build command:** `npm run build`
   * **Build output directory:** `out`
3. Save and deploy.

### Note on GitHub Hosting

If you are using GitHub Pages instead of Cloudflare Pages, the process is similar. A `.nojekyll` file is included in the `public/` folder so GitHub Pages doesn't attempt to build the site using Jekyll, which would inadvertently render this README as the main webpage instead of your compiled Next.js site.
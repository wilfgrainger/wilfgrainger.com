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

## ☁️ Deployment

This project is configured to generate a static site (`output: 'export'` in `next.config.ts`), making it perfectly suited for hosting on GitHub Pages or Cloudflare Pages.

### GitHub Pages (Automated via GitHub Actions)

This repository includes a GitHub Action (`.github/workflows/nextjs.yml`) that automatically builds and deploys your static Next.js site to GitHub Pages whenever you push to the `main` branch.

To enable this:
1. Go to your repository **Settings**.
2. Navigate to **Pages** on the left sidebar.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.

The action will handle everything automatically. Note: `next.config.ts` has `basePath: '/wilfgrainger.com'` configured to ensure assets load correctly on the GitHub Pages subpath URL (`wilfgrainger.github.io/wilfgrainger.com/`).

### Cloudflare Pages

If you prefer to use Cloudflare Pages:
1. Connect your GitHub repository to Cloudflare Pages.
2. Configure the build settings as follows:
   * **Framework preset:** Next.js (Static HTML Export)
   * **Build command:** `npm run build`
   * **Build output directory:** `out`
3. Save and deploy.

*(Note: If using Cloudflare Pages on a custom domain instead of a GitHub Pages subpath, you will need to remove the `basePath` option from `next.config.ts`)*.
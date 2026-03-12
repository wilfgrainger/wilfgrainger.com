# GitHub Copilot Instructions: wilfgrainger.com

This file provides context and instructions for GitHub Copilot when working in this repository.

---

## Skill: Generate Blog Articles

Use this skill when asked to write, draft, or scaffold a new blog post for wilfgrainger.com.

### Author Context

**Author:** Wilfred Grainger — Senior Cloud Architect at AWS Professional Services.

**Core interests:** Cloud infrastructure (AWS), AI/LLM tooling, spec-driven development, developer experience, and retro computing nostalgia.

**Audience:** Recruiters, clients, and fellow engineers who appreciate practical insights with personality.

---

### Blog Post File Location & Naming

All blog posts live in `content/posts/`. Use a lowercase, hyphen-separated slug for the filename:

```
content/posts/<descriptive-kebab-case-slug>.md
```

**Examples:**
- `content/posts/aws-kiro.md`
- `content/posts/vibe-coding-google-antigravity.md`
- `content/posts/spectrum-128k-memories.md`

---

### Frontmatter Schema

Every post **must** begin with this exact YAML frontmatter block:

```yaml
---
title: "Post Title with Emoji 🚀"
date: "YYYY-MM-DD"
summary: "One or two sentences that describe the post clearly and enticingly."
---
```

**Rules:**
- `title`: Wrapped in double quotes. Include one relevant emoji at the end.
- `date`: ISO 8601 format (`YYYY-MM-DD`), wrapped in double quotes.
- `summary`: A concise 1–2 sentence teaser. No emojis. No trailing period required.

---

### Writing Voice & Tone

Follow the persona defined in `persona.md` at the repository root. Key principles:

| Trait | How it shows up |
|---|---|
| **Conversational** | Speaks directly to the reader. Uses "you", "we", "let's". |
| **Enthusiastic but grounded** | Excited about tech that solves real pain, not hype. |
| **Humorous** | Light developer humour, relatable pain points, occasional sarcasm. |
| **Educational** | Breaks things into numbered steps, bullet lists, bold key terms. |
| **Visual** | Uses emojis sparingly (🚀 🪄 🧠 😭). Includes images with captions. |

**Opening hooks** — start with one of these patterns:
- A direct audience call-out: *"Alright folks, gather around!"*
- A relatable pain-point setup: *"If you've ever spent three hours debugging..."*
- A scene-setter: *"Today, we're putting aside the modern stuff to travel back to..."*

**Closing** — always end with a philosophical or motivational takeaway that ties back to the core theme.

---

### Post Structure

Use this as a structural template (adapt headings to fit the topic):

```markdown
---
title: "Title with Emoji 🛠️"
date: "YYYY-MM-DD"
summary: "Summary sentence."
---

[Opening hook paragraph — 2–3 sentences to grab the reader and set context.]

[Brief transition into the topic.]

## The Problem / The Setup

[Describe the pain point or scenario that motivates this post. Use a narrative style.]

## [Core Concept or Tool Name]

[Explain the concept clearly. Use analogies, metaphors, or step-by-step breakdowns.]

### How It Works

[Numbered list or prose walkthrough. Include code blocks where relevant.]

```language
# example code snippet
```

## [Second Major Concept or Feature]

[Continue building the story or exploring another dimension of the topic.]

![Alt text describing the image](image-url)
*Caption for the image.*

## The Value / Takeaway

[Wrap up with the "why this matters" message. Connect back to the opening problem.]
```

---

### Image Guidelines

- Use [Unsplash](https://unsplash.com) for stock images (`?auto=format&fit=crop&q=80&w=1000`).
- Use `/images/<filename>.jpg` for locally hosted images (stored in `public/images/`).
- Always follow an image with a `*Caption.*` in italics on the next line.
- Choose images that are conceptually relevant, not generic "laptop on a desk" shots.

---

### Code Blocks

Always specify the language for syntax highlighting:

````markdown
```yaml
key: value
```

```typescript
const greeting = "Hello, world!";
```

```bash
npm run build
```
````

---

### Topic Areas

When brainstorming new posts, draw from these themes that align with the author's expertise and interests:

**Cloud & Infrastructure**
- AWS services deep-dives (Lambda, S3, IAM, CDK, CloudFormation)
- Infrastructure as Code (Terraform, Pulumi, CDK)
- Spec-driven and contract-first development

**AI & Developer Tooling**
- LLM-assisted development workflows (Copilot, Claude, Gemini)
- AI-powered IDEs and agents
- "Vibe coding" and the evolving role of the developer

**Developer Experience**
- Reducing boilerplate and configuration friction
- Security-first design patterns
- Modern TypeScript and Next.js patterns

**Retro & Nostalgia**
- Personal stories from the early days of computing
- How old constraints shaped modern thinking
- Hardware retrospectives (ZX Spectrum, early home computers)

---

### Quality Checklist

Before finalising a generated post, verify:

- [ ] Frontmatter is complete: `title`, `date`, `summary`
- [ ] Title includes exactly one emoji
- [ ] Date is in `YYYY-MM-DD` format
- [ ] Opening hook is engaging and direct
- [ ] At least two `##` H2 sections with meaningful content
- [ ] At least one image with a caption
- [ ] Key terms are **bolded** on first mention
- [ ] Post closes with a motivational or philosophical takeaway
- [ ] File is saved to `content/posts/<slug>.md`
- [ ] Slug matches a sensible, human-readable URL

---

### Example Prompt to Copilot

To generate a new blog post, use a prompt like:

```
Write a new blog post for wilfgrainger.com about [TOPIC].
Use the persona in persona.md and follow the structure in .github/copilot-instructions.md.
Save it to content/posts/[slug].md with today's date.
```

---

## General Coding Guidelines

When making code changes to this repository:

- **Framework:** Next.js (App Router), static export mode (`output: 'export'` in `next.config.ts`).
- **Language:** TypeScript — always use strong typing, avoid `any`.
- **Styling:** Tailwind CSS v4 utility classes. Follow the "Copper Circuit" design system: warm cream (`#faf7f2`) / coal (`#0c0a09`) backgrounds, copper accent (`#c46b28` / `#e8884a`).
- **Fonts:** Use `next/font/local` with Geist or `@fontsource-variable/syne`. Do **not** use Google Fonts (`fonts.googleapis.com` may be blocked in CI).
- **Images:** For the static export, images must use the `basePath` prefix. See `src/app/blog/[slug]/page.tsx` for the pattern.
- **Lint:** Zero lint errors. Run `npm run lint` before committing.
- **Build:** Must build successfully with `npm run build`.
- **Spec-first:** For non-trivial changes, update `.spec/interface.json` and `.spec/system.md` first.

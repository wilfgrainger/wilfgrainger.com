# Project Soul

## North Star
TBD

## Core Vibe
Professional, clean, high-signal, and performant. Reflects the standard of an AWS Professional Services engineer.

## Intent
To serve as the definitive digital presence, resume, and technical blog for Wilfred Grainger.

## Problem Being Solved
Providing a centralized, authoritative source for Wilfred Grainger's professional experience, skills, and technical insights.

## Non-Goals
- Overly complex interactive animations.
- Heavy reliance on client-side state for static content.
- E-commerce or heavy backend processing.

## Users
Recruiters, hiring managers, fellow engineers, and technical readers seeking insights or background on Wilfred Grainger.

## Core Journeys
- Reading blog posts
- Viewing projects
- Accessing contact information

## Architecture
Next.js (App Router), TypeScript, Tailwind CSS. Static Export mode (`output: 'export'`).

## Core Logic
Markdown-based blog posts parsed into static HTML at build time.

## Invariants
Must build successfully via `npm run build` and have zero lint errors (`npm run lint`).

## Quality Bars
- security
- reliability
- performance
- maintainability
- usability
- accessibility
- observability

## Definition of Done
TBD

## Change Control
- spec-first
- contract-first
- no silent payload drift
- verification required before done

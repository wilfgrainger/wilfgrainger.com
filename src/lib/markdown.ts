import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostData {
  id: string;
  title: string;
  date: string;
  summary?: string;
  published: boolean;
}

export interface PostContent extends PostData {
  contentHtml: string;
  readingTime: number;
}

export function getSortedPostsData(): PostData[] {
  // Check if directory exists, if not return empty array
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // Get file names under /content/posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.filter(fileName => fileName.endsWith('.md')).map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || '',
      summary: matterResult.data.summary || '',
      published: matterResult.data.published === true,
    };
  }).filter((post) => post.published);

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string): Promise<PostContent> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const isPublished = matterResult.data.published === true;

  if (!isPublished) {
    throw new Error(`Post "${id}" is not published`);
  }

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  let contentHtml = processedContent.toString();

  // Fix image paths for production deployment on GitHub Pages
  if (process.env.NODE_ENV === 'production') {
    contentHtml = contentHtml.replace(/src="\/images\//g, 'src="/wilfgrainger.com/images/');
  }

  // Estimate reading time (average 200 words per minute)
  const wordCount = matterResult.content.trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    title: matterResult.data.title || 'Untitled',
    date: matterResult.data.date || '',
    summary: matterResult.data.summary || '',
    published: isPublished,
    readingTime,
  };
}

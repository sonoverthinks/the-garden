import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

/**
 * Recursively scans the content directory to find all .mdx files
 * and returns a list of their slugs.
 * @param {string} dir The directory to scan.
 * @param {string[]} fileList An array to store the file slugs.
 * @returns {string[]} A list of slugs for all .mdx files.
 */
export function getGardenFiles(
  dir = contentDirectory,
  fileList: string[] = []
) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getGardenFiles(filePath, fileList);
    } else if (file.endsWith(".mdx")) {
      const relativePath = path.relative(contentDirectory, filePath);
      const slug = relativePath.replace(/\\/g, "/").replace(/\.mdx$/, "");
      fileList.push(slug);
    }
  });
  return fileList;
}

/**
 * Retrieves the content and metadata for a specific post by its slug.
 * @param {string[]} slugArray An array of strings representing the slug segments.
 * @returns {Promise<object|null>} An object containing the post's metadata, content, and slug, or null if the file is not found.
 */
export interface PostMeta {
  title?: string;
  description?: string;
  date?: string;
  mtimeMs?: number;
  maturity?: string;
  completion?: number;
  [key: string]: unknown;
}

export async function getPostBySlug(slugArray: string[]) {
  const slug = slugArray.join("/");
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const stat = fs.statSync(fullPath);
  const mtimeMs = stat.mtimeMs;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const meta: PostMeta = { ...data, mtimeMs };

  return { meta, content, slug };
}

/**
 * Retrieves all posts with their metadata.
 * @returns {Promise<object[]>} An array of post objects sorted by modification date (newest first).
 */
export async function getAllPosts() {
  const slugs = getGardenFiles();
  const posts = await Promise.all(
    slugs.map(async (slugStr) => {
      const slug = slugStr.split("/");
      const post = await getPostBySlug(slug);
      if (post) {
          // Normalize slug for the link
          return { ...post, slug: slugStr };
      }
      return null;
    })
  );

  // Filter out any nulls and sort by modification date
  return posts
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((a, b) => {
       const dateA = a.meta.mtimeMs || new Date(a.meta.date || 0).getTime();
       const dateB = b.meta.mtimeMs || new Date(b.meta.date || 0).getTime();
       return dateB - dateA;
    });
}

export type TreeNode = {
  name: string;
  slug?: string;
  children?: TreeNode[];
};

export function getGardenTree(): TreeNode[] {
  const files = getGardenFiles();
  const tree: TreeNode[] = [];

  for (const file of files) {
    const parts = file.split("/");
    let currentLevel = tree;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isFile = i === parts.length - 1;

      let existingNode = currentLevel.find((node) => node.name === part);

      if (!existingNode) {
        existingNode = {
          name: part,
          slug: isFile ? file : undefined,
          children: isFile ? undefined : [],
        };
        currentLevel.push(existingNode);
      }

      if (!isFile && existingNode.children) {
        currentLevel = existingNode.children;
      }
    }
  }

  return tree;
}

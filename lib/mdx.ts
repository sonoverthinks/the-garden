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
export async function getPostBySlug(slugArray: string[]) {
  const slug = slugArray.join("/");
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { meta: data, content, slug };
}

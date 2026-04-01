import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "@/lib/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import Image from "next/image";

const components = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      src={typeof props.src === 'string' ? props.src : ""}
      width={800}
      height={500}
      className="rounded-lg shadow-md mx-auto"
      alt={props.alt || "MDX Image"}
    />
  ),
};

// Helper to extract headings for TOC using Regex
function getHeadings(source: string) {
  const headingLines = source
    .split("\n")
    .filter((line) => line.match(/^#{1,3}\s/));

  const seenIds: Record<string, number> = {};

  return headingLines.map((raw) => {
    const text = raw.replace(/^#{1,3}\s/, "");
    const level = raw.match(/^#{1,3}/)?.[0].length;
    // Create a slug for the ID (must match what rehype-slug does)
    let id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    if (seenIds[id]) {
      const count = seenIds[id];
      seenIds[id] = count + 1;
      id = `${id}-${count}`;
    } else {
      seenIds[id] = 1;
    }

    return { text, level, id };
  });
}

export default async function GardenPost({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const headings = getHeadings(post.content);

  return (
    <>
      {/* --- CENTER COLUMN: Content --- */}
      <main className="py-8 prose dark:prose-invert min-w-0">
        <h1>{post.meta.title}</h1>
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath, remarkGfm],
              rehypePlugins: [
                rehypeKatex,
                rehypeSlug,
                [
                  rehypePrettyCode,
                  {
                    theme: "github-dark",
                  },
                ],
              ],
            },
          }}
        />
      </main>

      {/* --- RIGHT COLUMN: Table of Contents --- */}
      <aside className="hidden md:block border-l py-8 pl-4 h-screen sticky top-0 overflow-y-auto">
        <h3 className="font-bold mb-4">On this page</h3>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ marginLeft: (heading.level || 1) * 8 + "px" }}
            >
              <a
                href={`#${heading.id}`}
                className="text-gray-500 hover:text-blue-500"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

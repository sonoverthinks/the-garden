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
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const src = typeof props.src === "string" ? props.src : "";
    return (
      <Image
        src={src}
        width={800}
        height={500}
        className="rounded-lg shadow-md mx-auto"
        alt={props.alt || "MDX Image"}
      />
    );
  },
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

function getMaturityColor(maturity?: string) {
  switch (maturity?.toLowerCase()) {
    case 'seedling': return 'bg-amber-400';
    case 'budding': return 'bg-lime-500';
    case 'evergreen': return 'bg-emerald-600';
    default: return 'bg-amber-400'; // default seedling
  }
}

function getMaturityIcon(maturity?: string) {
    switch (maturity?.toLowerCase()) {
      case 'seedling': return '🌱 Seedling';
      case 'budding': return '🌿 Budding';
      case 'evergreen': return '🌳 Evergreen';
      default: return '🌱 Seedling'; // default to seedling
    }
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
  const completion = post.meta.completion || (post.meta.maturity === 'evergreen' ? 100 : post.meta.maturity === 'budding' ? 50 : 20);
  const maturityColor = getMaturityColor(post.meta.maturity);

  return (
    <>
      {/* --- CENTER COLUMN: Content --- */}
      <main className="py-8 prose dark:prose-invert min-w-0 pr-4 lg:pr-8 w-full max-w-full">
        {/* Maturity/Growth Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 mb-8 rounded-full overflow-hidden flex" title={`${completion}% Complete`}>
            <div className={`h-full ${maturityColor} transition-all duration-1000 ease-in-out`} style={{ width: `${completion}%` }} />
        </div>

        <div className="flex flex-col mb-8 gap-2 pb-8 border-b dark:border-gray-800">
            <h1 className="mb-0">{post.meta.title || slug.join("/")}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">
               <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/50 border dark:border-gray-700">
                  {getMaturityIcon(post.meta.maturity)}
               </span>
               <span>Updated: {new Date(post.meta.mtimeMs || post.meta.date || 0).toLocaleDateString()}</span>
            </div>
        </div>

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
      <aside className="hidden lg:block border-l py-8 pl-4 h-screen sticky top-0 overflow-y-auto w-64 flex-shrink-0">
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

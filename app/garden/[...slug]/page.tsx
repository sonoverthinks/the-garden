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
    <div className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden shadow-xl shadow-primary/5 my-8">
      <Image
        src={typeof props.src === "string" ? props.src : ""}
        fill
        className="object-cover"
        alt={props.alt || "MDX Image"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
    </div>
  ),
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-6xl font-headline font-extrabold tracking-tight text-primary leading-[1.1] mb-6"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-3xl font-headline font-bold text-primary mt-12 mb-6"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-2xl font-headline font-bold text-primary mt-8 mb-4"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <div
      className="font-body text-lg leading-relaxed text-on-surface-variant mb-6"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-secondary-fixed-dim pl-8 py-4 my-10 italic font-headline text-2xl text-primary"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-[#0d1117] rounded-2xl border-t-4 border-secondary-fixed-dim shadow-sm mb-10 p-6 font-mono text-sm leading-relaxed overflow-x-auto" {...props} />
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
      {/* --- CENTER COLUMN: Content (6 cols out of 9) --- */}
      <article className="md:col-span-6 space-y-8">
        <header className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full bg-secondary-container/40 flex items-center gap-2">
              <span className="text-sm">Budding 🌿</span>
              <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-secondary-fixed-dim w-3/5 rounded-full"></div>
              </div>
            </div>
            <span className="text-xs text-on-surface-variant font-medium">
              Last tended: {new Date(post.meta.lastUpdated || post.meta.date).toLocaleDateString()}
            </span>
          </div>
          <h1 className="text-6xl font-headline font-extrabold tracking-tight text-primary leading-[1.1]">
            {post.meta.title}
          </h1>
        </header>

        <div className="prose prose-stone prose-emerald max-w-none">
          {post.meta.description && (
            <p className="text-xl font-headline italic text-on-surface-variant leading-relaxed">
              {post.meta.description}
            </p>
          )}

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
        </div>
      </article>

      {/* --- RIGHT COLUMN: Table of Contents & Related (3 cols out of 9) --- */}
      <aside className="md:col-span-3">
        {/* TOC */}
        <section className="sticky top-24 p-6 glass-panel rounded-2xl border border-white/40 shadow-xl shadow-primary/5">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 mb-6">
            Table of Contents
          </h3>
          <nav className="space-y-4">
            {headings
              .filter((heading) => heading.level === 2)
              .map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className="block text-sm font-bold text-primary border-l-2 border-secondary-fixed-dim pl-4 transition-colors"
                >
                  {heading.text}
                </a>
              ))}
          </nav>
        </section>
      </aside>
    </>
  );
}

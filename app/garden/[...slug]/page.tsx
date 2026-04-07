import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getHeadings } from "@/lib/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import GardenStatusTag from "@/app/components/GardenStatusTag";
import { components } from "@/app/components/MDXComponents";

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
          <GardenStatusTag dateStr={post.meta.lastUpdated || post.meta.date} />
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

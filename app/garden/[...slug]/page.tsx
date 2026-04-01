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
        src={typeof props.src === 'string' ? props.src : ""}
        fill
        className="object-cover"
        alt={props.alt || "MDX Image"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
    </div>
  ),
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-6xl font-headline font-extrabold tracking-tight text-primary leading-[1.1] mb-6" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-headline font-bold text-primary mt-12 mb-6" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-headline font-bold text-primary mt-8 mb-4" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-body text-lg leading-relaxed text-on-surface-variant mb-6" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-secondary-fixed-dim pl-8 py-4 my-10 italic font-headline text-2xl text-primary" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <div className="bg-surface-container-lowest rounded-2xl p-8 border-t-4 border-secondary-fixed-dim shadow-sm mb-10">
      <pre className="bg-tertiary text-on-tertiary-container p-6 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto" {...props} />
    </div>
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
      <article className="md:col-span-6 space-y-12">
        <header className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full bg-secondary-container/40 flex items-center gap-2">
              <span className="text-sm">Budding 🌿</span>
              <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-secondary-fixed-dim w-3/5 rounded-full"></div>
              </div>
            </div>
            <span className="text-xs text-on-surface-variant font-medium">Last tended: {new Date(post.meta.date).toLocaleDateString()}</span>
          </div>
          <h1 className="text-6xl font-headline font-extrabold tracking-tight text-primary leading-[1.1]">{post.meta.title}</h1>
        </header>

        <div className="prose prose-stone prose-emerald max-w-none">
          {post.meta.description && (
             <p className="text-xl font-headline italic text-on-surface-variant leading-relaxed mb-8">
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

        {/* Contextual Footnotes */}
        <footer className="pt-12 mt-12 border-t border-surface-variant/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Archivist: Julian Thorne</p>
                <p className="text-xs text-on-surface-variant">Lead Horticultural Architect</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-bold uppercase tracking-wider hover:bg-surface-container-highest transition-colors">Fork Note</button>
              <button className="px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20">Edit Note</button>
            </div>
          </div>
        </footer>
      </article>

      {/* --- RIGHT COLUMN: Table of Contents & Related (3 cols out of 9) --- */}
      <aside className="md:col-span-3 sticky top-24 space-y-12">
        {/* TOC */}
        <section className="p-6 glass-panel rounded-2xl border border-white/40 shadow-xl shadow-primary/5">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 mb-6">Table of Contents</h3>
          <nav className="space-y-4">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block text-sm transition-colors ${
                  heading.level === 2
                    ? "font-bold text-primary border-l-2 border-secondary-fixed-dim pl-4"
                    : "text-on-surface-variant hover:text-primary pl-4"
                }`}
                style={{ marginLeft: heading.level === 3 ? "1rem" : "0" }}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </section>

        {/* Quick Action Floating */}
        <div className="p-6 bg-primary rounded-2xl text-on-primary shadow-2xl shadow-primary/30 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h4 className="font-headline text-lg font-bold italic leading-tight">Ready to plant your ideas?</h4>
            <p className="text-xs text-on-primary-container leading-relaxed">Create a new connection between this note and your existing project logs.</p>
            <button className="w-full py-3 bg-secondary-fixed-dim text-on-secondary-fixed font-bold rounded-xl text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform">Create Backlink</button>
          </div>
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10 rotate-12">eco</span>
        </div>
      </aside>
    </>
  );
}

import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export default async function GardenIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      {/* --- CENTER COLUMN: Content (6 columns out of 9 parent columns) --- */}
      <article className="md:col-span-6 space-y-12">
        <header className="space-y-6">
          <h1 className="text-6xl font-headline font-extrabold tracking-tight text-primary leading-[1.1]">
            The Digital Garden
          </h1>
          <p className="text-xl font-headline italic text-on-surface-variant leading-relaxed mb-8">
            This is a collection of thoughts, notes, and technical experiments.
            Feel free to explore using the knowledge tree.
          </p>
        </header>

        <div className="max-w-none">
          <h2 className="text-2xl font-headline font-bold text-primary mt-8 mb-4">Recent Additions</h2>
          <div className="space-y-3">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/garden/${post.slug}`} className="block group">
                <div className="bg-surface-container-lowest rounded-xl p-6 border-l-4 border-secondary-fixed-dim shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-headline text-xl text-primary font-bold group-hover:underline">
                      {post.meta.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant whitespace-nowrap pt-1">
                      <span className="material-symbols-outlined text-xs">schedule</span>
                      <span>{new Date(post.meta.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* --- RIGHT COLUMN: Empty or Intro (3 columns out of 9 parent columns) --- */}
      <aside className="md:col-span-3 sticky top-24 space-y-12">
        <section className="p-6 glass-panel rounded-2xl border border-white/40 shadow-xl shadow-primary/5">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 mb-6">About the Garden</h3>
          <p className="text-sm font-body leading-relaxed text-on-surface-variant">
            A digital garden is a place where ideas grow. Some are seeds, some are sprouts, and some are fully grown evergreen trees.
            Explore the interconnected nodes of the botanical archive.
          </p>
        </section>
      </aside>
    </>
  );
}

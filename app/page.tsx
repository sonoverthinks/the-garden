import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default async function Page() {
  const allPosts = await getAllPosts();
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Hi, I&apos;m Jules.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl">
          I&apos;m a master architect and digital horticulturist. I build robust web applications
          and cultivate this evolving digital garden, blending technical workspace with a lush, organic greenhouse environment.
        </p>
      </section>

      {/* "Now" Section */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
          <span className="text-green-500">⚡</span> What I&apos;m Doing Now
        </h2>
        <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-200 list-disc list-inside bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-800">
          <li>Building this Digital Garden to document my learnings and thoughts.</li>
          <li>Exploring advanced React patterns and performance optimizations.</li>
          <li>Deep diving into probability models and Bayesian statistics.</li>
        </ul>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Recent Learnings Feed */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
            <span className="text-emerald-500">🌱</span> Recent Learnings
          </h2>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={new Date(post.meta.mtimeMs || post.meta.date || 0).toISOString()} className="text-gray-500">
                    {new Date(post.meta.mtimeMs || post.meta.date || 0).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {post.meta.maturity && (
                    <span className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300">
                      {post.meta.maturity === 'seedling' ? '🌱 Seedling' : post.meta.maturity === 'budding' ? '🌿 Budding' : '🌳 Evergreen'}
                    </span>
                  )}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    <Link href={`/garden/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.meta.title || post.slug}
                    </Link>
                  </h3>
                  {post.meta.description && (
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {post.meta.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
            <div className="mt-4">
              <Link href="/garden" className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1">
                Explore the Garden <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
            <span className="text-blue-500">✨</span> Featured Work
          </h2>
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-40 sm:pt-48 lg:pt-60 border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-transform hover:scale-[1.02]">
            {/* Abstract Background Concept */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-gray-900/40 to-transparent"></div>
            <div className="absolute inset-0 -z-20 bg-[url('https://res.cloudinary.com/dz2ur1rtv/image/upload/v1767729457/qmwmpnj65unex58x1ay3.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>

            {/* Subtle glow effect */}
            <div className="absolute -top-24 -right-24 -z-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen"></div>

            <div className="relative z-10 backdrop-blur-sm bg-black/40 p-6 rounded-xl border border-white/10">
              <h3 className="mt-3 text-2xl font-bold leading-6 text-white">
                <Link href="/projects#nexus">
                  <span className="absolute inset-0" />
                  Project Nexus
                </Link>
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-300 line-clamp-3">
                A decentralized root-system network protocol. I solved complex state synchronization across distributed nodes using a novel conflict-free replicated data type (CRDT) architecture, resulting in sub-10ms eventual consistency.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                 <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">Rust</span>
                 <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">WebRTC</span>
                 <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">React</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export default async function GardenIndexPage() {
  const posts = await getAllPosts();

  const getMaturityIcon = (maturity?: string) => {
    switch (maturity?.toLowerCase()) {
      case 'seedling': return '🌱';
      case 'budding': return '🌿';
      case 'evergreen': return '🌳';
      default: return '🌱'; // default to seedling
    }
  };

  return (
    <>
      {/* --- CENTER COLUMN: Content --- */}
      <main className="py-8 prose dark:prose-invert min-w-0 pr-4 lg:pr-8 lg:w-full">
        <h1>Welcome to the Digital Garden</h1>
        <p>
          This is a collection of my thoughts, notes, and experiments. Feel free
          to explore using the navigation on the left.
        </p>

        <h2>Recent Updates</h2>
        <ul className="list-none pl-0 space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="p-4 border dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-1">
                <span title={post.meta.maturity || "seedling"}>{getMaturityIcon(post.meta.maturity)}</span>
                <Link href={`/garden/${post.slug}`} className="font-semibold text-lg no-underline hover:underline">
                  {post.meta.title || post.slug}
                </Link>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                 Updated: {new Date(post.meta.mtimeMs || post.meta.date || 0).toLocaleDateString()}
                 {post.meta.completion && ` • ${post.meta.completion}% Complete`}
              </div>
              {post.meta.description && (
                  <p className="text-gray-600 dark:text-gray-300 mt-2 mb-0 line-clamp-2">
                      {post.meta.description}
                  </p>
              )}
            </li>
          ))}
        </ul>
      </main>

      {/* --- RIGHT COLUMN: Empty or Intro --- */}
      <aside className="hidden lg:block border-l py-8 pl-4 h-screen sticky top-0 overflow-y-auto w-64 flex-shrink-0">
        <h3 className="font-bold mb-4">About</h3>
        <p className="text-sm text-gray-500">
          A digital garden is a place where ideas grow. Some are seeds, some are
          sprouts, and some are fully grown evergreen trees.
        </p>
      </aside>
    </>
  );
}

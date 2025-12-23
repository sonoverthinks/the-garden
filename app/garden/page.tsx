import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export default async function GardenIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      {/* --- CENTER COLUMN: Content --- */}
      <main className="py-8 prose dark:prose-invert min-w-0">
        <h1>Welcome to the Digital Garden</h1>
        <p>
          This is a collection of my thoughts, notes, and experiments. Feel free
          to explore using the navigation on the left.
        </p>

        <h2>Recent Updates</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/garden/${post.slug}`}>
                {post.meta.title}
              </Link>{" "}
              - {new Date(post.meta.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </main>

      {/* --- RIGHT COLUMN: Empty or Intro --- */}
      <aside className="hidden md:block border-l py-8 pl-4 h-screen sticky top-0 overflow-y-auto">
        <h3 className="font-bold mb-4">About</h3>
        <p className="text-sm text-gray-500">
          A digital garden is a place where ideas grow. Some are seeds, some are
          sprouts, and some are fully grown evergreen trees.
        </p>
      </aside>
    </>
  );
}

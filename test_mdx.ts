import { getAllPosts } from './lib/mdx';

async function main() {
  const posts = await getAllPosts();
  console.log(posts.map(p => ({ slug: p.slug, mtimeMs: p.meta.mtimeMs, title: p.meta.title })));
}

main();

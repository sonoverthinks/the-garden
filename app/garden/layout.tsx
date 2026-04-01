import { getGardenTree } from "@/lib/mdx";
import FileTree from "@/app/components/FileTree";

export default function GardenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tree = getGardenTree();

  return (
    <div className="max-w-[1600px] mx-auto px-8 pt-8 pb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">
      {/* --- LEFT COLUMN: Directory --- */}
      <aside className="md:col-span-3 sticky top-24 h-[calc(100vh-8rem)] flex flex-col gap-8 custom-scrollbar overflow-y-auto pr-4">
        <section className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 px-2">Knowledge Tree</h3>
          <FileTree tree={tree} />
        </section>
      </aside>

      {/* --- CENTER & RIGHT COLUMNS (Injected via children) --- */}
      {/* 9 columns total for children wrapper, allowing it to contain its own 6-col + 3-col split if needed,
          or simple flex layout inside child component */}
      <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-9 gap-8">
        {children}
      </div>
    </div>
  );
}

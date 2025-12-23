import { getGardenTree } from "@/lib/mdx";
import FileTree from "@/app/components/FileTree";

export default function GardenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tree = getGardenTree();

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr_250px] gap-6 min-h-screen">
        {/* --- LEFT COLUMN: Directory --- */}
        <aside className="hidden md:block border-r py-8 h-screen sticky top-0 overflow-y-auto pr-4">
          <h3 className="font-bold mb-4 px-2">Files</h3>
          <FileTree tree={tree} />
        </aside>

        {/* --- CENTER & RIGHT COLUMNS (Injected via children) --- */}
        {children}
      </div>
    </div>
  );
}

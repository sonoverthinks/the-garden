import Link from "next/link";
import { getGardenFiles } from "@/lib/mdx";

export default function GardenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allFiles = getGardenFiles(); // Fetch all files for navigation

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr_250px] gap-6 min-h-screen">
        {/* --- LEFT COLUMN: Directory --- */}
        <aside className="hidden md:block border-r py-8 h-screen sticky top-0 overflow-y-auto">
          <h3 className="font-bold mb-4">Files</h3>
          <ul className="space-y-2">
            {allFiles.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/garden/${slug}`}
                  className="hover:text-blue-500 block truncate"
                >
                  {slug}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* --- CENTER & RIGHT COLUMNS (Injected via children) --- */}
        {children}
      </div>
    </div>
  );
}

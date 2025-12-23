import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b p-4 bg-white dark:bg-black dark:border-gray-800">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          My Website
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/garden" className="hover:text-blue-500">
            Garden
          </Link>
          <Link href="/projects" className="hover:text-blue-500">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
